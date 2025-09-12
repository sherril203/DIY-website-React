import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router'; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/adminlogin', formData);

      console.log('Login Success:', response.data); 

      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });

      const token = response.data.data?.token || response.data.token;
      localStorage.setItem("token", token);

      navigate('/admin');

    } catch (err) {
      console.error('Login failed:', err.response?.data || err.message);

      toast.error(err.response?.data?.message || 'Invalid credentials', {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };

  return (
    <div className='bg-gradient-to-l from-fuchsia-400 to-pink-400 p-6 min-h-screen flex flex-col justify-center items-center'>
      <ToastContainer />

      <div className='bg-white rounded-xl shadow-lg p-10 space-y-6 max-w-md w-full'>
        <h2 className='text-center text-black text-2xl font-bold'>Login</h2>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label htmlFor="email" className='text-2xl'>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Enter email'
              className='bg-white rounded p-4 w-full mt-1 focus:ring-5 focus:ring-amber-500'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className='text-2xl'>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder='Enter password'
              className='bg-white rounded p-4 w-full mt-1 focus:ring-5 focus:ring-amber-500'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className='bg-gradient-to-l from-fuchsia-400 to-pink-400 text-center p-2 rounded text-2xl w-full text-white hover:bg-amber-300 transition'
            >
              Login
            </button>
          </div>
        </form>

        <p className='text-center text-lg'>
          New account?{' '}
          <Link to="/signup" className='text-blue-600 hover:underline'>
            Sign Up
          </Link>
        </p>
        <p className='text-center text-lg'>
          Forgot Password?{' '}
          <Link to="/forgot" className='text-blue-600 hover:underline'>
            Forgot Password 
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
