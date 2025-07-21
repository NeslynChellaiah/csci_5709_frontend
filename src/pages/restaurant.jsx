import React, { useEffect } from 'react'
import ImageCarousel from '../components/imgCarousel'
import Reservation from '../components/reservation'
import RestaurantMap from '../components/restaurantMap'
import RestaurantReviews from '../components/restaurantReviews'
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
  
    const reviews = [
  {
    name: "Tracy",
    avatar: "https://i.pravatar.cc/40?u=tracy",
    review: {
      title: "Amazing Food",
      content: "Loved the food, will suggest to try.",
    },
    date: "May 2, 2025",
    rating: 5,
  },
  {
    name: "Sarah",
    avatar: "https://i.pravatar.cc/40?u=sarah",
    review: {
      title: "Great place",
      content: "The place looked amazing.",
    },
    date: "May 30, 2025",
    rating: 4,
  },
  {
    name: "Emily",
    avatar: "https://i.pravatar.cc/40?u=emily",
    review: {
      title: "Love the vibe",
      content: "The people there are simply wow.",
    },
    date: "May 27, 2025",
    rating: 4,
  },
  {
    name: "David",
    avatar: "https://i.pravatar.cc/40?u=david",
    review: {
      title: "Nice ambiance",
      content: "The lights and decor really set the mood.",
    },
    date: "June 5, 2025",
    rating: 5,
  },
  {
    name: "Ava",
    avatar: "https://i.pravatar.cc/40?u=ava",
    review: {
      title: "Service was slow",
      content: "Had to wait quite a bit, but food was good.",
    },
    date: "June 12, 2025",
    rating: 2,
  }];

  return (
    restaurant && (<div className="flex-1">
      <div className="overflow-y-auto max-h-[calc(100vh-4rem)] pr-2">
        <ImageCarousel images={restaurant?.imageUrls}/>
        <Reservation restaurant={restaurant}/>
        <RestaurantMap latitude={44.638452391512345} longitude={-63.590358497425484} />
        <RestaurantReviews reviews={reviews} />
      </div>
    </div>)
  )
}

export default Restaurant