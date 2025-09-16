

//backend to frontend
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Frames = ({ query }) => {
  const [bags, setBags] = useState([]);
 
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });

    // Fetch products from backend
    axios.get('http://localhost:5000/getcategory/photo_frames')
      .then(res => setBags(res.data.data))
      .catch(err => console.error(err));
  }, []);

  const filtered = bags.filter(item =>
    (item.product_name || '').toLowerCase().includes((query || '').toLowerCase())
  );

  const handleCart = (item) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingIndex = cart.findIndex(c => c.product_name === item.product_name);

    if (existingIndex !== -1) {
      cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success("Product added to cart");
  };

  if (filtered.length === 0) return null;

  return (
    <div className="p-6 bg-rose-50">
      <ToastContainer />
      <h2 className="text-center font-bold text-3xl mb-6 text-rose-800" data-aos="zoom-in">Photo Frame</h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {filtered.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex flex-col items-center gap-3 bg-white border border-rose-200 p-6 shadow-md rounded-2xl hover:scale-105 transition-transform duration-300 w-72"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay={index * 200}
          >
            <img
              src={`http://localhost:5000/files/${item.product_img}`}
              alt={item.product_name}
              className="w-56 h-56 object-contain"
               />
            <Link to={item.path} className="text-lg font-semibold text-indigo-800 text-center">
              {item.product_name}
            </Link>
            <p className="text-gray-700 text-xl font-medium">₹{item.product_price}</p>

            <div className="flex gap-3 mt-2">
              <button onClick={() => handleCart(item)} className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition">
                Add to Cart
              </button>
              <Link to="/purchase">
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frames;

