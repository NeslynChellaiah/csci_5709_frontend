import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    console.log('Submitting Signup:', { username, email, password });
    const response = await axios.post(`${BASE_URL}/api/auth/register`, {
      username,
      email,
      password,
    });

    console.log('Response:', response.data);
    alert('Account created successfully');
    navigate('/');
  } catch (error) {
    console.error('User Already Exist:', error);
    alert('Please try again using different email');
  }
};



  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-80">
        <label className="block mb-1 text-sm font-medium">Username</label>
        <input
          type="text"
          className="w-full mb-4 px-3 py-2 border rounded-md"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="block mb-1 text-sm font-medium">Email</label>
        <input
          type="email"
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
          Have an account already?{' '}
          <span className="text-blue-600 underline cursor-pointer" onClick={() => navigate('/')}>
            Sign In to your account
          </span>
        </p>
        <button type="submit" className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;