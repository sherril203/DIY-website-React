import React from 'react';
import { Link } from 'react-router';
const Signup = () => {
  const handleSubmit = () => {
    alert("Sign in  successfully");
  };

  return (
    <div className='bg-amber-300 min-h-screen flex flex-col justify-center items-center p-10 space-y-8'>
      <h2 className='text-2xl text-indigo-900 font-semibold text-center'>
        Login
      </h2>

      <form 
        onSubmit={handleSubmit} 
        className='bg-white rounded-xl shadow-lg p-10 space-y-6 w-full max-w-md'
      >
        <div>
          <label htmlFor="name" className='text-indigo-800 font-semibold text-lg'>username</label><br />
          <input 
            type="text" 
            id="name"
            placeholder='Enter your name' 
            className='w-full bg-gray-100 border border-amber-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-amber-500' 
            required 
          />
        </div>
         <div>
          <label htmlFor="name" className='text-indigo-800 font-semibold text-lg'>email</label><br />
          <input 
            type="email" 
            id="name"
            placeholder='Enter your name' 
            className='w-full bg-gray-100 border border-amber-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-amber-500' 
            required 
          />
        </div>
        <div>
          <label htmlFor="email" className='text-indigo-800 font-semibold text-lg'>Password</label><br />
          <input 
            type="password" 
            id="email"
            placeholder='Enter your email' 
            className='w-full bg-gray-100 border border-amber-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-amber-500' 
            required 
          />
        </div>

        <button 
          type='submit' 
          className='w-full bg-indigo-700 hover:bg-indigo-600 text-white font-bold py-3 rounded-lg transition-all duration-300 text-lg'
        >
          Sign in
        </button>
      </form>
      <h2 className='bg-white p-3 mx-6 text-xl text-center rounded'>already Register <Link to="/login" className='text-blue-800 '>Login</Link> </h2>
    </div>
  );
};

export default Signup;
