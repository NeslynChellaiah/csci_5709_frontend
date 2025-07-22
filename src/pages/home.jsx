import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurants, filterRestaurants } from '../store/effects/restaurantEffects';
import FilterSidebar from '../components/filterBar';
import RestaurantCard from '../components/restaurantCard';
import { debounce } from 'lodash';
import { Spinner } from '../components/spinner';


const Home = () => {
  const dispatch = useDispatch();
  const { restaurants, isLoading } = useSelector((state) => state.restaurants);

  const [priceRange, setPriceRange] = useState(100); // default max
  const [cuisines, setCuisines] = useState({
    Indian: false,
    Mexican: false,
    Lebanese: false,
  });
  const [types, setTypes] = useState({
    Cafe: false,
    'Fine Dining': false,
    'Food Truck': false,
  });

  // Initial fetch
  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  // Debounced filter function
  const debouncedFilter = useMemo(
    () =>
      debounce((payload) => {
        dispatch(filterRestaurants(payload));
      }, 300),
    [dispatch]
  );

  // Trigger filter on every change
  useEffect(() => {
    const selectedCuisines = Object.entries(cuisines)
      .filter(([, v]) => v)
      .map(([k]) => k);
    const selectedTypes = Object.entries(types)
      .filter(([, v]) => v)
      .map(([k]) => k);

    const payload = {
      cuisines: selectedCuisines,
      types: selectedTypes,
      priceRange,
      keywords: [], // removed, backend expects this
    };

    debouncedFilter(payload);

    return () => debouncedFilter.cancel(); // cleanup
  }, [cuisines, types, priceRange, debouncedFilter]);

  return (
    <main className="relative">
        {isLoading ? <Spinner /> : 
      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 p-6">
          <FilterSidebar
            cuisines={cuisines}
            setCuisines={setCuisines}
            types={types}
            setTypes={setTypes}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
        </div>

        {/* Main content */}
        <div className="flex-1 mt-6">
          <div className="overflow-y-auto max-h-[calc(100vh-6rem)] pr-2">
            <div className="flex flex-wrap gap-6">
              {restaurants.map((restaurant, idx) => (
                <RestaurantCard
                  key={idx}
                  id={restaurant?.id}
                  name={restaurant.name}
                  distance="1.2 km"
                  priceRange={`$${restaurant?.priceRange} Per Person`}
                  imageUrl={
                    restaurant?.img ||
                    'https://via.placeholder.com/400x300?text=Image'
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    }
    </main>
  );
};

export default Home;
