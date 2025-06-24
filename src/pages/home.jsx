import FilterSidebar from '../components/filterBar';
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
                <h2 className="text-xl font-semibold mb-4">Search Results</h2>
                The restaurant cards can be placed here
                </div>
            </div>
        </main>

      );
}

export default Home;