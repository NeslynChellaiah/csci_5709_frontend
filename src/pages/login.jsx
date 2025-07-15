import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        console.log('Submitting Login:', { email, password });
        const response = await axios.post(`${BASE_URL}/api/auth/login`, {
        email,
        password,
        });

        console.log('Response:', response.data);
        alert('Logged successfully');
        localStorage.setItem("isLoggedIn", "true");

        navigate('/home');
    } catch (error) {
        console.error('Invalid Email or Password', error);
        alert('Please try again using correct email and password');
    }
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
          <span className="text-blue-600 underline cursor-pointer" onClick={() => navigate('/signup')}>
            Create New Account
          </span>
        </p>
        <button type="submit" className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;