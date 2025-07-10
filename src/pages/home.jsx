import { useEffect } from 'react';
import FilterSidebar from '../components/filterBar';
import RestaurantCard from '../components/restaurantCard';
import axios from 'axios';
import { BASE_URL, getToken } from '../../constants';

const Home = () => {

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/restaurants`, {
                    headers: {
                        Authorization: getToken(),
                    },
                });
                console.log('Fetched restaurants:', response.data);
            } catch (error) {
                console.error('Error fetching restaurants:', error);
            }
        };

        fetchRestaurants();
    }, []);

    return (
        <main className="">
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
                            {[1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 99, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0].map((_, idx) => {
                                return (
                                    <RestaurantCard
                                        key={idx}
                                        name="The Taco Place"
                                        distance="1 km"
                                        priceRange="$10–15 Per Person"
                                        imageUrl="https://cdn.pixabay.com/photo/2023/05/15/04/44/tacos-7994117_1280.jpg"
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
