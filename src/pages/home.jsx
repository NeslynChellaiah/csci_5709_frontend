import FilterSidebar from '../components/filterBar';
import RestaurantCard from '../components/restaurantCard';

const Home = () => {
    return (
        <main className="pt-16">
            <div className="flex">
                {/* Sidebar */}
                <div className="w-80 p-6">
                <FilterSidebar />
                </div>

                {/* Main content */}
                <div className="flex-1 p-8">
                    <h2 className="text-xl font-semibold mb-4">Book your Dine-In</h2>
                    <div className="flex flex-wrap gap-6">
                        <RestaurantCard
                            name="The Taco Place"
                            distance="1 km"
                            priceRange="$10–15 Per Person"
                            imageUrl="https://cdn.pixabay.com/photo/2023/05/15/04/44/tacos-7994117_1280.jpg"
                        />
                        <RestaurantCard
                            name="is it Spicy ?"
                            distance="1.5 km"
                            priceRange="$20–25 Per Person"
                            imageUrl="https://cdn.pixabay.com/photo/2023/05/15/04/44/tacos-7994117_1280.jpg"
                        />
                        <RestaurantCard
                            name="Taco Bell"
                            distance="2 km"
                            priceRange="$10–20 Per Person"
                            imageUrl="https://cdn.pixabay.com/photo/2023/05/15/04/44/tacos-7994117_1280.jpg"
                        />
                    </div>
                </div>
            </div>
        </main>

      );
}

export default Home;