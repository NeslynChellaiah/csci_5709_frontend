import React, { useEffect } from 'react'
import ImageCarousel from '../components/imgCarousel'
import Reservation from '../components/reservation'
import RestaurantMap from '../components/restaurantMap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurantById } from '../store/effects/restaurantEffects'
import { useParams } from 'react-router-dom'

const Restaurant = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchRestaurantById(id));
  }, [dispatch, id]);

  const { restaurant } = useSelector((state) => {return state.restaurant});
  

  return (
    restaurant && (<div className="flex-1">
      <div className="overflow-y-auto max-h-[calc(100vh-4rem)] pr-2">
        <ImageCarousel images={restaurant?.imageUrls}/>
        <Reservation restaurant={restaurant}/>
        <RestaurantMap latitude={44.638452391512345} longitude={-63.590358497425484} />
      </div>
    </div>)
  )
}

export default Restaurant