import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL, getRole } from '../../constants';
import { Spinner } from '../components/spinner';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const role = getRole();
      if (role === 'ADMIN') navigate('/admin');
      else if (role === 'OWNER') navigate('/owner');
      else navigate('/');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, {
        email,
        password,
      });

      const token = response?.data?.token;
      localStorage.setItem("token", token);

      const decoded = JSON.parse(atob(token.split('.')[1]));
      const role = decoded?.role;

      if (role === 'ADMIN') navigate('/admin');
      else if (role === 'OWNER') navigate('/owner');
      else navigate('/');
    } catch (error) {
      console.error('Login Error:', error);
      toast.error(error?.response?.data?.error || 'Login failed');
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-80">
        <label className="block mb-1 text-sm font-medium">Email</label>
        <input
          type="text"
          className="w-full mb-4 px-3 py-2 border rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="block mb-1 text-sm font-medium">Password</label>
        <input
          type="password"
          className="w-full mb-4 px-3 py-2 border rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="text-sm mb-4">
          Are you a new user?{' '}
          <span
            className="text-blue-600 underline cursor-pointer"
            onClick={() => navigate('/signup')}
          >
            Create New Account
          </span>
        </p>

        {isLoading ? (
          <Spinner />
        ) : (
          <button
            type="submit"
            className={`w-full text-white py-2 rounded-md ${
              email && password
                ? 'bg-black hover:bg-gray-800'
                : 'bg-black opacity-50 cursor-not-allowed'
            }`}
            disabled={!email || !password}
          >
            Login
          </button>
        )}
      </form>
    </div>
  );
};

export default Login;
