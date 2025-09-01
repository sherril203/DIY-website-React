import React from 'react';
import { SiInstagram } from "react-icons/si";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import Navigate from '../Navigate';
import Footer from '../Footer';
import map from '../assets/map.jpg';
import { IoIosMailUnread } from "react-icons/io";
import { IoCall } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="bg-amber-300">
      <Navigate />

     <h2 className="text-center font-bold text-4xl text-teal-700 mt-18 p-4 mb-6">Contact Us</h2>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 p-6">
        <div className="space-y-8 w-full max-w-md">
          <div className="bg-white rounded-lg px-8 py-6 shadow-md text-black">
            <div className="flex items-center gap-2 mb-2">
              <IoIosMailUnread size={30} />
              <h3 className="text-xl font-semibold">Email:</h3>
            </div>
            <p className="text-xl ml-8">artsworld@gmail.com</p>

            <div className="flex items-center gap-2 mt-6 mb-2">
              <IoCall size={28} />
              <h3 className="text-xl font-semibold">Mobile No:</h3>
            </div>
            <p className="text-xl ml-8">9486907680</p>
          </div>

      
          <div className="bg-white rounded-lg px-8 py-6 shadow-md text-black">
            <h3 className="text-2xl font-bold text-center mb-4">Follow Us</h3>
            <div className="flex justify-center gap-5">
                <SiInstagram size={30} className="hover:text-pink-500 transition" />
                <FaTwitter size={30} className="hover:text-sky-400 transition" />
                <FaFacebook size={30} className="hover:text-blue-600 transition" />
                <FaYoutube size={33} className="hover:text-red-600 transition" />
            </div>
          </div>
        </div>

        <div className="w-full max-w-md">
          <img src={map} alt="Google Maps Location" className="rounded-lg shadow-md w-full" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
