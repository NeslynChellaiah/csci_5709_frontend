import React from 'react'
import ImageCarousel from '../components/imgCarousel'
import Reservation from '../components/reservation'
import RestaurantMap from '../components/restaurantMap'

const Restaurant = () => {
  return (
    <div className="flex-1">
      <div className="overflow-y-auto max-h-[calc(100vh-4rem)] pr-2">
        <ImageCarousel />
        <Reservation />
        <RestaurantMap latitude={44.638452391512345} longitude={-63.590358497425484} />
      </div>
    </div>
  )
}

export default Restaurant