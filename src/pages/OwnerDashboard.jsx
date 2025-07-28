import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL, getToken } from '../../constants';

import ImageCarousel from '../components/imgCarousel';
import Reservation from '../components/reservation';
import RestaurantMap from '../components/restaurantMap';
import RestaurantReviews from '../components/restaurantReviews';
import AddReview from '../components/addReview';
import Modal from '../components/modal';
import BookingCard from '../components/bookingCard';

import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurantById } from '../store/effects/restaurantEffects';
import { Spinner } from '../components/spinner';

const OwnerDashboard = () => {
  const dispatch = useDispatch();
  const { restaurant, isLoading } = useSelector((state) => state.restaurant);

  const [restaurantId, setRestaurantId] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [showBookings, setShowBookings] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Step 1: Fetch owner's restaurant ID and dispatch Redux fetch
  useEffect(() => {
    const fetchOwnerProfile = async () => {
      try {
        const token = getToken();
        const res = await axios.get(`${BASE_URL}/owner/profile`, {
          headers: { Authorization: token },
        });
        const id = res.data.restaurantId;
        setRestaurantId(id);
        dispatch(fetchRestaurantById(id));
      } catch (error) {
        console.error('Error fetching owner profile:', error.response?.data || error.message);
      }
    };

    fetchOwnerProfile();
  }, [dispatch]);

  // Step 2: Fetch reviews after restaurant loads
  useEffect(() => {
    const fetchReviews = async () => {
      if (restaurant?.overallReview?.href) {
        try {
          const url = `${BASE_URL.slice(0, -4)}${restaurant.overallReview.href}`;
          const res = await axios.get(url, {
            headers: { Authorization: getToken() },
          });
          setReviews(Array.isArray(res.data.data) ? res.data.data : []);
        } catch (error) {
          console.error('Error fetching reviews:', error);
          setReviews([]);
        }
      }
    };

    fetchReviews();
  }, [restaurant]);

  // Step 3: Fetch and filter upcoming bookings sorted by datetime
  useEffect(() => {
    const fetchBookings = async () => {
      if (showBookings && restaurantId) {
        try {
          const token = getToken();
          const res = await axios.get(`${BASE_URL}/owner/bookings/restaurant/${restaurantId}`, {
            headers: { Authorization: token },
          });
          const data = Array.isArray(res.data?.data) ? res.data.data : [];

          const now = new Date();

          const upcomingSorted = data
            .filter((b) => {
              if (!b.bookingDate || !b.bookingTime) return false;
              const bookingDateTime = new Date(`${b.bookingDate}T${b.bookingTime}`);
              return bookingDateTime >= now;
            })
            .sort((a, b) => {
              const dateA = new Date(`${a.bookingDate}T${a.bookingTime}`);
              const dateB = new Date(`${b.bookingDate}T${b.bookingTime}`);
              return dateA - dateB;
            });

          setBookings(upcomingSorted);
        } catch (error) {
          console.error('Error fetching bookings:', error.response?.data || error.message);
          setBookings([]);
        }
      }
    };

    fetchBookings();
  }, [showBookings, restaurantId]);

  const handleCancelBooking = (cancelledId) => {
    setBookings((prev) => prev.filter((b) => b.id !== cancelledId));
  };

  return (
    <div className="h-[calc(100vh-4rem)] overflow-y-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Owner Dashboard</h1>
  
      {isLoading ? (
        <Spinner />
      ) : restaurant ? (
        <div>
          <h2 className="text-xl font-semibold mb-2">Your Restaurant</h2>
          <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
  
          <ImageCarousel images={restaurant.imageUrls} />
          <Reservation restaurant={restaurant} />
          <RestaurantMap
            latitude={44.638452391512345}
            longitude={-63.590358497425484}
          />
  
          <RestaurantReviews reviews={reviews} />
  
          <AddReview
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            id={restaurant.id}
          />
        </div>
      ) : (
        <p className="text-red-500 mt-4">Failed to load restaurant data.</p>
      )}
  
      <button
        onClick={() => setShowBookings(!showBookings)}
        className="mt-6 px-6 py-2 bg-black text-white rounded hover:bg-gray-800"
      >
        {showBookings ? 'Hide Bookings' : 'View Booking Details'}
      </button>
  
      {showBookings && (
        <div className="mt-6 space-y-4">
          {Array.isArray(bookings) && bookings.length > 0 ? (
            bookings.map((booking) => (
              <BookingCard
                key={booking.id}
                booking={booking}
                showCancelButton={true}
                onCancel={handleCancelBooking}
              />
            ))
          ) : (
            <p className="text-gray-600">No upcoming bookings found.</p>
          )}
        </div>
      )}
    </div>
  );  
};

export default OwnerDashboard;
