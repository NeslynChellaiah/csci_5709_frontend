import React, { useState, useEffect } from 'react';
import RestaurantList from '../components/admin/RestaurantList';
import RestaurantEditor from '../components/admin/RestaurantEditor';
import CreateRestaurantModal from '../components/admin/CreateRestaurantModal';
import AdminNavbar from '../components/admin/AdminNavbar';
import axios from 'axios';
import { BASE_URL, getToken } from '../../constants';
import { toast } from 'react-toastify';
import Navbar from '../components/navBar';
const AdminDashboard = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selected, setSelected] = useState(null);
  const [createOpen, setCreateOpen] = useState(false);
const [isLoading, setIsLoading] = useState(true);
  const fetchRestaurants = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/restaurants`, {
        headers: { Authorization: getToken() },
      });
      setRestaurants(res.data.data);
      setFiltered(res.data.data);
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
    setIsLoading(false)
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
    <Navbar isAdmin={true}/>
    <div className="flex min-h-screen">
      <RestaurantList
        isLoading={isLoading}
        restaurants={filtered}
        setFiltered={setFiltered}
        all={restaurants}
        onSelect={(r) => setSelected({ ...r })} // force new object
        onCreate={() => setCreateOpen(true)}
      />
      <div className="flex-1 p-6 bg-gray-50">
        {selected ? (
          <RestaurantEditor
            restaurant={selected}
            onUpdated={(shouldClear = false) => {
              fetchRestaurants();
              if (shouldClear) setSelected(null);
            }}
          />
        ) : (
          <p className="text-gray-500 text-center mt-20">Select a restaurant to edit.</p>
        )}
      </div>
      <CreateRestaurantModal
        isOpen={createOpen}
        onClose={() => setCreateOpen(false)}
        onCreated={fetchRestaurants}
      />
    </div>
    </div>
  );
};

export default AdminDashboard;
