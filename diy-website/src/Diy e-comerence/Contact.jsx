import React, { useState } from 'react';
import { SiInstagram } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
const Contact = () => {

  return (
    <div className='bg-amber-300 min-h-screen flex flex-col justify-center items-center p-10 space-y-8'>
     <div className='bg-white rounded p-5 shadow'>
      <h2 className='text-center font-bold text-2xl'>Contact US</h2>
      <h2 className='font-bold text-2xl'>Email:diyarts@gmail.com</h2>
      <h2 className='font-bold text-2xl'>Mobile  No: 9486907680</h2>
     </div>
     <div className='bg-white rounded p-5 shadow'>
        <h2 className='text-center font-bold text-2xl'>Follow Us</h2>
        <div className='flex gap-3'>
           <div><SiInstagram size={30} className='hover:bg-gray rounded'/></div>
           <div><FaTwitter size={30} /></div>
           <div><FaFacebook size={30} /></div>
        </div>
     </div>
    
    </div>
  );
};

export default Contact;
