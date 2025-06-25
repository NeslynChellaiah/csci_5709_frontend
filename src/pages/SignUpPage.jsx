import React from 'react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700 font-medium mb-1">Username</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Admin"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="admin.admin.com"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="************"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                    />
                </div>

                <div className="mb-4 text-sm text-gray-600">
                    Have an account already?{' '}
                    <Link to="/login" className="text-blue-600 hover:underline">
                        Sign In to your account
                    </Link>
                </div>

                <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-200">
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default SignupPage;
