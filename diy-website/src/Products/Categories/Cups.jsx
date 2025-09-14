// Cups.jsx
import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Butterfly from '../../assets/cups/Butterfly Design Cup.png'
import kids from '../../assets/cups/kids cup.png'
import thought from '../../assets/cups/thought customization design cup.png'
import white from '../../assets/cups/white_cup_with_customization.png'
import { Link } from 'react-router'
import { ToastContainer } from 'react-toastify'

const Cups = ({ query }) => {
  const cups = [
    { product: white, product_name: "Name Customization Cup", price: 300, path: "/products/name" },
    { product: Butterfly, product_name: "Butterfly Design Cup", price: 200, path: "/products/butterfly" },
    { product: kids, product_name: "Kids Cup", price: 200, path: "/products/kids" },
    { product: thought, product_name: "Thought Customization Cup", price: 200, path: "/products/thought" }
  ]
   useEffect(() => {
         AOS.init({ duration: 2000, once: true }); 
       }, []);
  // const filtered = cups.filter((item) =>
  //   item.product_name.toLowerCase().includes(query.toLowerCase())
  // );
    const handleCart = () => {
      toast.success("Product added");
    };
  const filtered = cups.filter(item =>
  (item.product_name || '').toLowerCase().includes((query || '').toLowerCase())
);
  if (filtered.length === 0) return null;

  return (
    <div className="p-6 bg-rose-50">
      <ToastContainer/>
      <h2 className="text-center font-bold text-3xl mb-6 text-rose-800"
      data-aos="zoom-in">Cups</h2>

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
              src={item.product}
              alt={item.product_name}
              className="w-56 h-56 object-contain"
            />
            <Link to={item.path} className="text-lg font-semibold text-indigo-800 text-center">
              {item.product_name}
            </Link>
            <p className="text-gray-700 text-xl font-medium">₹{item.price}</p>

            <div className="flex gap-3 mt-2">
                <button onClick={handleCart}
                className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition">
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
}

export default Cups;
