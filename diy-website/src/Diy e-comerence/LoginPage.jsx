import React from 'react';
import { Link, useNavigate } from 'react-router';
const LoginPage = () => {
  const handleSubmit = () => {
    alert("Login  successfully");
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
          <label htmlFor="email" className='text-indigo-800 font-semibold text-lg'>Password</label><br />
          <input 
            type="password" 
            id="email"
            placeholder='Enter your email' 
            className='w-full bg-gray-100 border border-amber-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-amber-500' 
            required 
          />
        </div>
        <Link to="/user">
         <button
          className='w-full bg-indigo-700 hover:bg-indigo-600 text-white font-bold py-3 rounded-lg transition-all duration-300 text-lg'
        >
          Login
        </button></Link>
       
      </form>
       <h2 className='bg-white p-3 mx-6 text-xl text-center rounded'>new account <Link to="/signup" className='text-blue-800 '>Sign in</Link> </h2>
    </div>
  );
};

export default LoginPage;
