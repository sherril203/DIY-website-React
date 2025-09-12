import React from 'react'
import { MdAccountCircle } from "react-icons/md";
import UserNav from './UserNav';
import Footer from '../../common/Footer';
import { Link } from 'react-router';
const Profile = () => {
  return (
    <div className='bg-rose-50 min-h-screen flex flex-col mt-20'>
      <UserNav />
      <div className='flex-grow flex justify-center items-start mt-10'>
        <div className='rounded p-6 bg-white w-full max-w-md shadow-md'>
          <h2 className='text-3xl font-bold text-center mb-4'>Profile</h2>
          <div className='flex justify-center mb-2'>
            <MdAccountCircle size={150} />
          </div>
          <h3 className='text-center text-lg font-medium mb-4'>User</h3>
          <h3 className='text-center text-lg font-medium mb-4'>DOB</h3>
          <h3 className='text-center text-lg font-medium mb-4'>Mobile no</h3>
          <h3 className='text-center text-lg font-medium mb-4'>Location</h3>
          <div className='flex justify-center gap-3'>
            <button className='px-4 py-2 bg-gradient-to-l from-fuchsia-200 to-pink-300 rounded hover:opacity-90 transition'>
              Edit Profile
            </button>
            <Link to="/homepage" className='px-4 py-2 bg-gradient-to-l from-fuchsia-200 to-pink-300 
            rounded hover:opacity-90 transition'><button>Log out</button></Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
