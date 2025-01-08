"use client"
// pages/forget-password.tsx

import Image from 'next/image'
import React, { useState } from 'react'
import vectorImageForget from '@/public/images/forget.png' // Use a vector image of your choice

const page = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset error before new submission
    setError(null);

    // Simple email validation (You can improve this as per your requirements)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    // Simulate an API request (Replace with your actual API call)
    try {
      // Simulating API call delay
      setTimeout(() => {
        setIsLoading(false);
        alert('If this email exists in our system, a password reset link will be sent.');
      }, 2000);
    } catch (error) {
      setIsLoading(false);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 dark:bg-gray-900">
      <div className="flex flex-col items-center max-w-md w-full p-8 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        {/* Vector Image */}
        <div className="mb-6">
          <Image src={vectorImageForget} alt="Forget Password" width={100} height={100} />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Forgot Your Password?</h2>
        <p className="text-gray-500 dark:text-gray-300 mb-6 text-center">
          Enter your email address below, and we'll send you a link to reset your password.
        </p>

        {/* Form */}
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-primary-500"
              placeholder="youremail@example.com"
              required
            />
            {error && <div className="text-sm text-red-600 mt-2">{error}</div>}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 mt-4 text-white bg-primary-600 rounded-lg focus:outline-none focus:ring-4 focus:ring-primary-300 disabled:bg-gray-400 ${isLoading ? 'opacity-50' : ''}`}
          >
            {isLoading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
