import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import Footer from '../../common/Footer';
import Navigate from '../../common/Navigate';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Confirmationpage = () => {
  const location = useLocation();
  const data = location.state; // formData passed from Purchase

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // animation happens only once
    });
  }, []);

  return (
    <div className="bg-rose-50 min-h-screen flex flex-col">
      <Navigate />

      <div className="flex-grow flex items-center justify-center mt-30 mb-20">
        <div
          className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl"
          data-aos="fade-up" 
        >
          <h2
            className="text-center text-2xl font-bold mb-6"
            data-aos="zoom-in"
          >
            Product Confirmation
          </h2>

          <div className="space-y-3 text-gray-700" >
            <h2><b>Product Name:</b> {data?.product_name}</h2>
            <h2><b>Quantity:</b> {data?.quantity}</h2>
            <h2><b>Price:</b> ₹{data?.product_price}</h2>
            <h2><b>Customization:</b> {data?.customization}</h2>
            <h2><b>Customer Name:</b> {data?.customer_name}</h2>
            <h2><b>Email:</b> {data?.customer_email}</h2>
            <h2><b>Mobile:</b> {data?.mobile_no}</h2>
            <h2><b>Payment Mode:</b> {data?.payment_mode}</h2>
          </div>

          <div className="text-center mt-8" data-aos="flip-up">
            <button
              type="submit"
              className="bg-gradient-to-r from-fuchsia-600 to-pink-500 px-6 py-3 text-white font-bold rounded-lg shadow hover:opacity-90 transition"
            >
              Buy Product
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Confirmationpage;
