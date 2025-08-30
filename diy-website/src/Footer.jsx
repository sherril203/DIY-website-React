import React from 'react';
import { Link } from 'react-router'; // ✅ Correct import
import { SiInstagram } from "react-icons/si";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-fuchsia-600 to-fuchsia-500 text-white p-10 mt-16">
      <div className="flex flex-col md:flex-row justify-between gap-10">

        <div>
          <h2 className="font-bold text-xl mb-4">Links</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-gray-800">Home</Link></li>
            <li><Link to="/products" className="hover:text-gray-800">Products</Link></li>
            <li><Link to="/services" className="hover:text-gray-800">Services</Link></li>
            <li><Link to="/contact" className="hover:text-gray-800">Contact</Link></li>
            <li><Link to="/testimonial" className="hover:text-gray-800">Testimonial</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-xl mb-4">Products</h2>
          <ul className="space-y-2">
             <li>Bags</li>
            <li>Cups</li>
            <li>Phone Cases</li>
            <li>Geometric design wall hang</li>
            <li>Clocks</li>
            <li>Kits for Kids</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-xl mb-4">Follow Us</h2>
          <div className="flex gap-4">
            <SiInstagram size={25} className="hover:text-pink-400" />
            <FaTwitter size={25} className="hover:text-sky-400" />
           <FaFacebook size={25} className="hover:text-blue-600" />
            <FaYoutube size={25} className="hover:text-red-600" />
          </div>
        </div>

      </div>
      <p className="text-center text-sm text-gray-400 mt-8">© 2025 DIY Arts. All rights reserved.</p>
    </div>
  );
};

export default Footer;
