import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import christmas from '../../assets/kits/Christmas kit for kids.jpg'
import jewellery from '../../assets/kits/jewelery kit.jpg'
import { Link } from 'react-router'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Kits = ({ query }) => {
  const kits = [
    { product: christmas, product_name: "Kids Christmas Kit", price: 200, path: "/products/christmas" },
    { product: jewellery, product_name: "Jewellery Kit for Girls", price: 200, path: "/products/jewelery" },
  ]
  useEffect(() => {
           AOS.init({ duration: 2000, once: true }); 
  }, []);
  const handleCart = () => {
    toast.success("Product added");
  };
  // const filtered = kits.filter((item) =>
  //   item.product_name.toLowerCase().includes(query.toLowerCase())
  // );
    const filtered = kits.filter(item =>
  (item.product_name || '').toLowerCase().includes((query || '').toLowerCase())
);

  if (filtered.length === 0) return null;

  return (
    <div className="p-6 bg-rose-50">
      <ToastContainer/>
      <h2 className="text-center font-bold text-3xl mb-6 text-rose-800"
      data-aos="zoom-in">Kit for kids</h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {filtered.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-duration="2000" 
            data-aos-delay={index * 200} 
            className="flex-shrink-0 flex flex-col items-center gap-3 bg-white border border-rose-200 p-6 shadow-md rounded-2xl hover:scale-105 transition-transform duration-300 w-72"
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

export default Kits;
