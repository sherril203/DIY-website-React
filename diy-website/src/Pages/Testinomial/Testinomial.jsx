import React, { useState } from 'react';
import axios from 'axios';
import Navigate from '../../common/Navigate';
import Footer from '../../common/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Testinomial = () => {
   useEffect(() => {
        AOS.init({ duration: 2000, once: true }); 
      }, []);
  const [user, setUser] = useState([]);
  const [query, setQuery] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuery((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form", query);

    try {
      const response = await axios.post("http://localhost:5000/postquery", query);
      console.log("Post query", response.data);

      toast.success("Query submitted successfully!");

      setUser((prev) => [...prev, query]);
      setQuery({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error in post", error.message);
      toast.error("Something went wrong! Try again.");
    }
  };

  return (
    <div className='bg-red-100 min-h-screen'>
      <Navigate />
      <div className='flex flex-col justify-center items-center p-10 space-y-8'>
        <h2 className='text-2xl text-indigo-900 font-semibold text-center mt-15'>
          If you have any queries or comments, kindly fill the form
        </h2>

        <form  data-aos="fade-down"
          onSubmit={handleSubmit} 
          className='bg-white rounded-xl shadow-lg p-10 space-y-6 w-full max-w-md'
        >
          <div>
            <label htmlFor="name" className='text-indigo-800 font-semibold text-lg'>Name</label><br />
            <input 
              type="text" 
              id="name"
              name="name"
              value={query.name}
              onChange={handleChange}
              placeholder='Enter your name'
              className='w-full bg-gray-100 border border-amber-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-amber-500'
              required
            />
          </div>

          <div>
            <label htmlFor="email" className='text-indigo-800 font-semibold text-lg'>Email</label><br />
            <input 
              type="email" 
              id="email"
              name="email"
              value={query.email}
              onChange={handleChange}
              placeholder='Enter your email'
              className='w-full bg-gray-100 border border-amber-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-amber-500'
              required
            />
          </div>

          <div>
            <label htmlFor="message" className='text-indigo-800 font-semibold text-lg'>Message</label><br />
            <textarea 
              id="message"
              name="message"
              value={query.message}
              onChange={handleChange}
              placeholder='Enter your comments'
              className='w-full bg-gray-100 border border-amber-300 rounded p-3 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-amber-500'
              required
            />
          </div>

          <button type='submit'
            className='w-full bg-indigo-700 hover:bg-indigo-600 text-white font-bold py-3 rounded-lg transition-all duration-300 text-lg'
          >Submit
          </button>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={2000} />

      <Footer />
    </div>
  );
};

export default Testinomial;
