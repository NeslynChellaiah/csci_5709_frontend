import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RestaurantReviewCard = ({ name, review, date, avatar, rating }) => {
  return (
    <div className="rounded-xl border p-4 shadow-md w-64 bg-white">
      <div className="flex items-center gap-1 mb-2">
        {
        [...Array(rating)].map((_, i) => (
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
        ))}
        {[...Array(5 - rating)].map((_,i) => (
            <FontAwesomeIcon icon={faStar} className="text-gray-300" /> 
        ))}
      </div>
      <h3 className="text-lg font-semibold mb-1">{review.title}</h3>
      <p className="text-sm text-gray-600 mb-4">{review.content}</p>
      <div className="flex items-center gap-2">
        <img
          src={avatar}
          alt={name}
          className="w-8 h-8 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantReviewCard;
