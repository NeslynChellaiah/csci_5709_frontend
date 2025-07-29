import { useState, useEffect } from 'react';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import RestaurantCard from './restaurantCard';

const Navbar = memo(({isAdmin}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const { restaurants } = useSelector((state) => state.restaurants);

  const filteredRestaurants = search
    ? restaurants.filter(r => r.name.toLowerCase().includes(search.toLowerCase()))
    : [];

  useEffect(() => {
    const loggedIn = localStorage.getItem('token');
    if (loggedIn) {
      setIsLoggedIn(true);
    }
    else {
      setIsLoggedIn(false);
    }
  });
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-xl font-semibold text-gray-800">
            Dine Connect
          </Link>
          <div className="flex items-center justify-center space-x-4 relative">
            {!isAdmin && (
              <div className="w-full max-w-md relative">
                <input
                  type="search"
                  placeholder="Search..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="hidden sm:block w-full px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
                {search && filteredRestaurants.length > 0 && (
                  <div className="absolute z-50 bg-white border border-gray-200 rounded-md mt-2 w-full max-h-80 overflow-y-auto shadow-lg">
                    {filteredRestaurants.map((restaurant) => (
                      <div key={restaurant.id} className="p-2 hover:bg-gray-100 cursor-pointer">
                        <RestaurantCard
                          id={restaurant.id}
                          name={restaurant.name}
                          distance={restaurant.distance || ''}
                          priceRange={`$${restaurant.priceRange} Per Person`}
                          imageUrl={
                            restaurant.imageUrls?.[0] ||
                            'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
                          }
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
            <div className="hidden md:flex space-x-2">
             {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-black hover:bg-black/10 px-2 py-1 rounded"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={handleLoginRedirect}
                  className="text-gray-600 hover:text-black hover:bg-black/10 px-2 py-1 rounded"
                >
                  Login
                </button>
              )}
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
              ☰
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2">
          <Link to="/" className="block text-gray-600 hover:text-black">
            Home
          </Link>
          {isLoggedIn ? (
            <button onClick={handleLogout} className="block text-left w-full text-gray-600 hover:text-black">Logout</button>
          ) : (
            <button onClick={handleLoginRedirect} className="block text-left w-full text-gray-600 hover:text-black">Login</button>
          )}
        </div>
      )}
    </nav>
  );
});

export default Navbar;
