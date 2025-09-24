import React from 'react'
import { MdAccountCircle } from "react-icons/md";
import { Link } from 'react-router';

const AdminProfile = () => {
  return (
    <div className='bg-rose-50 min-h-screen flex flex-col '>
      <div className='flex-grow flex justify-center items-start mt-8'>
        <div className='rounded p-6 bg-white w-full max-w-md shadow-md'>
          <h2 className='text-3xl font-bold text-center mb-4'>Profile</h2>
          <div className='flex justify-center mb-2'>
            <MdAccountCircle size={150} />
          </div>
          <h3 className='text-center text-lg font-medium mb-4'>Admin</h3>
          <h3 className='text-center text-lg font-medium mb-4'>
            Role : admin
          </h3>
          <div className='flex justify-center gap-3'>
            <button className='px-4 py-2 bg-gradient-to-l from-fuchsia-200 to-pink-300 rounded hover:opacity-90 transition'>
              Edit Profile
            </button>
            <Link to="/adminlogin" className='px-4 py-2 bg-gradient-to-l from-fuchsia-200 to-pink-300 
            rounded hover:opacity-90 transition'><button>Log out</button></Link>
          </div>
        </div>
      </div>

    </div>
  );
}

export default AdminProfile;
