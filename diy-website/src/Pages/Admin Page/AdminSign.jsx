import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const AdminSign = () => {
  const VITE_API_BACKEND_URL = import.meta.env.VITE_API_BACKEND_URL;
   useEffect(() => {
      AOS.init({ duration: 2000, once: true }); 
    }, []);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
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

  console.log("Submitting form:", formData);  

  try {
    const response = await axios.post(`${VITE_API_BACKEND_URL}/adminRegister`, formData);
    console.log('Signup success:', response.data);

    toast.success("Signup successful! Redirecting to login...", {
      position: "top-right",
      autoClose: 3000,
      theme: "colored"
    });

    setTimeout(() => {
      navigate('/adminlogin');
    }, 3000);

  } catch (err) {
    console.log('Signup error');  
    toast.error( 'Signup failed. Try again.', {
      position: "top-right",
      autoClose: 3000,
      theme: "colored"
    });
  }
};



  return (
    <div className='bg-stone-100 p-6 min-h-screen flex flex-col justify-center items-center'>
      <ToastContainer /> 

      <div className='bg-white rounded-xl shadow-lg p-10 space-y-6 max-w-md w-full' data-aos="fade-down">
        <h2 className='text-center text-black text-2xl font-bold'>Admin Sign Up</h2>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label htmlFor="username" className='text-2xl'>Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder='Enter username'
              className='bg-white rounded p-4 w-full mt-1 focus:ring-5 focus:ring-amber-500'
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

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
              className='bg-gradient-to-l from-fuchsia-400 to-pink-400 text-white
              text-center p-2 rounded text-2xl w-full hover:bg-fuchsia-300 transition'
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className='text-center text-lg'>
          Already have an account?{' '}
          <Link to="/adminlogin" className='text-blue-600 hover:underline'>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AdminSign;
