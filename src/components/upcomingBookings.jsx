import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookingCard from './bookingCard';
import { BASE_URL, getToken } from '../../constants';
import { toast } from 'react-toastify';

const UpcomingBookings = () => {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/admin/bookings/restaurant/{restaurantId}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
  
      const now = new Date();
  
      const upcomingSorted = response.data.data
        .filter(b => {
          if (!b.bookingDate || !b.bookingTime || b.status?.toUpperCase() === 'CANCELLED') return false;
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
      toast.error('Failed to fetch bookings');
      console.error('Error fetching bookings:', error);
    }
  };
  

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleCancel = (cancelledId) => {
    setBookings(prev => prev.filter(b => b.id !== cancelledId));
  };

  return (
    <div className="grid gap-4 px-4 py-6">
      <h2 className="text-xl font-semibold mb-2">Upcoming Bookings</h2>
      {bookings.length === 0 ? (
        <p className="text-gray-500">No upcoming bookings found.</p>
      ) : (
        bookings.map((booking) => (
          <BookingCard
            key={booking.id}
            booking={booking}
            showCancelButton={true}
            onCancel={handleCancel}
          />
        ))
      )}
    </div>
  );
};

export default UpcomingBookings;
