import { useEffect, useState } from 'react';
import FilterSidebar from '../components/filterBar';
import RestaurantCard from '../components/restaurantCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurants, filterRestaurants } from '../store/effects/restaurantEffects';
import Modal from '../components/modal';

const Home = () => {
    const dispatch = useDispatch()
    const { restaurants, isLoading } = useSelector((state) => state.restaurants);
    const [showModal, setShowModal] = useState(true);

  const [keywords, setKeywords] = useState(['Spicy', 'Tacos', 'Nachos']);
  const [priceRange, setPriceRange] = useState(58);
  const [cuisines, setCuisines] = useState({ Indian: true, Mexican: true, Lebanese: true });
  const [types, setTypes] = useState({ Cafe: true, 'Fine Dining': true, 'Food Truck': true });

  // Initial fetch
  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  // Refetch when filters change
  useEffect(() => {
    const selectedCuisines = Object.entries(cuisines).filter(([, v]) => v).map(([k]) => k);
    const selectedTypes = Object.entries(types).filter(([, v]) => v).map(([k]) => k);

    const payload = {
      cuisines: selectedCuisines,
      types: selectedTypes,
      priceRange,
      keywords,
    };

    dispatch(filterRestaurants(payload));
  }, [cuisines, types, priceRange, keywords]);

  return (
    <main className="relative">
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
      
      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 p-6">
          <FilterSidebar
            cuisines={cuisines}
            setCuisines={setCuisines}
            types={types}
            setTypes={setTypes}
            keywords={keywords}
            setKeywords={setKeywords}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
        </div>

        {/* Main content */}
        <div className="flex-1 mt-6">
          <div className="overflow-y-auto max-h-[calc(100vh-8rem)] pr-2">
            <div className="flex flex-wrap gap-6">
              {restaurants.map((restaurant, idx) => (
                <RestaurantCard
                  key={idx}
                  name={restaurant.name}
                  distance="1.2 km"
                  priceRange={`$${restaurant.priceRange} Per Person`}
                  imageUrl={restaurant.img || 'https://via.placeholder.com/400x300?text=Image'}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
