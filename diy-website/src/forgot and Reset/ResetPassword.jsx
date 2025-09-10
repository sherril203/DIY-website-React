import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!newPassword || !confirmPassword) {
      toast.error('Please fill in both fields.');
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }

    toast.success('Password reset successful!');
    setTimeout(() => {
    navigate('/login')
     }, 2000);
    setNewPassword('');
    setConfirmPassword('');
    
  };

  return (
    <div className="min-h-screen bg-gradient-to-l from-fuchsia-400 to-pink-400 flex justify-center items-center w-full">
      <ToastContainer />
      <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-center font-bold text-2xl mb-6">Reset Password</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-2">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
              placeholder="Enter new password"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
              placeholder="Confirm new password"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-fuchsia-500 text-white p-3 rounded hover:bg-fuchsia-600 transition"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
