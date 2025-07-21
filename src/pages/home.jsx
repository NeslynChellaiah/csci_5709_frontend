import { useEffect, useState } from 'react';
import FilterSidebar from '../components/filterBar';
import RestaurantCard from '../components/restaurantCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurants } from '../store/effects/restaurantEffects';
import Modal from '../components/modal';

const Home = () => {
    const dispatch = useDispatch()
    const { restaurants, isLoading } = useSelector((state) => state.restaurants);
    const [showModal, setShowModal] = useState(true);

    useEffect(() => {
        dispatch(fetchRestaurants());
    }, [dispatch]);

    return (
        <main className="relative">
            <Modal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
            />
            <div className="flex">
                {/* Sidebar */}
                <div className="w-80 p-6">
                    <FilterSidebar />
                </div>

                {/* Main content */}
                <div className="flex-1 mt-6">
                    {/* Scrollable cards section */}
                    <div className="overflow-y-auto max-h-[calc(100vh-8rem)] pr-2">
                        <div className="flex flex-wrap gap-6">
                            {restaurants.map((restaurant, idx) => {
                                return (
                                    <RestaurantCard
                                        key={idx}
                                        name={restaurant?.name}
                                        distance="Should write logic to calc distance"
                                        priceRange="$10–15 Per Person"
                                        imageUrl={restaurant?.img}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
