import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const OwnerNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('token'));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/owner" className="text-xl font-semibold text-gray-800">
            Dine Connect
          </Link>
          <div className="hidden md:flex space-x-2">
            <Link to="/owner" className="text-gray-600 hover:text-black hover:bg-black/10 px-2 py-1 rounded">Dashboard</Link>
            {isLoggedIn && (
              <button
                onClick={handleLogout}
                className="text-gray-600 hover:text-black hover:bg-black/10 px-2 py-1 rounded"
              >
                Logout
              </button>
            )}
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
          <Link to="/owner" className="block text-gray-600 hover:text-black">Dashboard</Link>
          {isLoggedIn && (
            <button onClick={handleLogout} className="block text-left w-full text-gray-600 hover:text-black">Logout</button>
          )}
        </div>
      )}
    </nav>
  );
};

export default OwnerNavBar;
