import React from 'react'
import ImageCarousel from '../components/imgCarousel'
import Reservation from '../components/reservation'

const Restaurant = () => {
  return (
    <div className="flex-1">
      <div className="overflow-y-auto max-h-[calc(100vh-4rem)] pr-2">
        <ImageCarousel />
        <Reservation />
      </div>
    </div>
  )
}

export default Restaurant