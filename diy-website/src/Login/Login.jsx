
import React from 'react';
import { Link, useNavigate } from 'react-router';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted");

    // Navigate to login after "successful" signup
    navigate("/login");
  };

  return (
    <div className='bg-fuchsia-300 p-6 min-h-screen flex flex-col justify-center items-center'>
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
              className='bg-white  rounded p-4 w-full mt-1 focus:ring-5 focus:ring-amber-500'
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
              className='bg-white  rounded p-4 w-full mt-1 focus:ring-5 focus:ring-amber-500'
              required
            />
          </div>
           <div>
            <button className=' bg-amber-200 text-center p-2 rounded text-2xl w-full hover:bg-amber-300 transition '>
          <Link to="/login" >Login</Link>
           </button> </div>
        </form>
        <p className='text-center text-lg'>
          new account ? <Link to="/signup" className='text-blue-600 hover:underline'>Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
