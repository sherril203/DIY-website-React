import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error('Please enter your email address.');
      return;
    }

    toast.success('Reset link sent! Please check your email.');
     setTimeout(() => {
      navigate('/reset');
    }, 2000);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-l from-fuchsia-400 to-pink-400 flex justify-center items-center w-full">
      <ToastContainer />
      <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-center font-bold text-2xl mb-6">Forgot Password</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-fuchsia-500 text-white p-3 rounded hover:bg-fuchsia-600 transition"
            >
              Send Reset Link
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
