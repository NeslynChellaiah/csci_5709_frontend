import React from 'react';
import axios from 'axios';
import { BASE_URL, getToken } from '../../constants';
import { toast } from 'react-toastify';

const BookingCard = ({ booking, showCancelButton, onCancel }) => {
  const {
    id,
    userId = 'N/A',
    numberOfGuests,
    bookingDate,
    bookingTime,
    notes = 'N/A',
  } = booking;

  const formattedDateTime = (() => {
    if (!bookingDate || !bookingTime) return 'Invalid Date';
    try {
      const dateObj = new Date(`${bookingDate}T${bookingTime}`);
      return isNaN(dateObj.getTime()) ? 'Invalid Date' : dateObj.toLocaleString();
    } catch {
      return 'Invalid Date';
    }
  })();

  const handleCancel = async () => {
    try {
      await axios.delete(`${BASE_URL}/bookings/${id}`, {
        headers: {
          Authorization: `${getToken()}`,
        },
      });
      toast.success('Booking cancelled successfully!');
      if (onCancel) onCancel(id);
    } catch (error) {
      toast.error('Failed to cancel booking.');
      console.error('Cancel error:', error);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-md p-4 border border-gray-200">
      <h3 className="text-lg font-semibold mb-1">Booking ID: {id}</h3>
      <p className="text-sm text-gray-600 mb-1">
        <span className="font-medium">Customer:</span> {userId}
      </p>
      <p className="text-sm text-gray-600 mb-1">
        <span className="font-medium">Guests:</span> {numberOfGuests}
      </p>
      <p className="text-sm text-gray-600 mb-1">
        <span className="font-medium">Time:</span> {formattedDateTime}
      </p>
      <p className="text-sm text-gray-600 mb-2">
        <span className="font-medium">Notes:</span> {notes}
      </p>
      {showCancelButton && (
        <button
          className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
          onClick={handleCancel}
        >
          Cancel Booking
        </button>
      )}
    </div>
  );
};

export default BookingCard;
