// import {useEffect} from 'react'
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import Butterfly from '../assets/cups/Butterfly Design Cup.png'
// import glitter from '../assets/phone case/Gilter-case.jpeg'
// import flower_bag from '../assets/bags/flower_design_bag.png'
// import flower from '../assets/clock/flower design clock.png'
// import love from '../assets/geometric design/geometric_love_heart_wall_art.jpg'
// import christmas from '../assets/kits/Christmas kit for kids.jpg'
// import {Link } from 'react-router'
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const ProductHome = () => {
//     const products=[
//         { product: flower_bag, product_name: "Flower Design Bag", price: 200,path:"/products/flower" },
//         { product: Butterfly, product_name: "Butterfly Design Cup", price: 200,path:"/products/butterfly" },
//         { product: glitter, product_name: "Glitter Phone Case", price: 200 ,path:"/products/glitter" },
//         { product: flower, product_name: "Flower Design Clock", price: 200 , path:"/products/flowerclock"},
//         { product: love, product_name: "love heart wall art", price: 200 , path:"/products/love_decor"},
//         { product: christmas, product_name: "Kids Christmas Kit", price: 200,path:"/products/christmas" },
//     ]
//     useEffect(() => {
//       AOS.init({ duration: 2000, once: true }); 
//     }, []);


//    const handleCart = (item) => {
//      // Get existing cart or empty array
//      let cart = JSON.parse(localStorage.getItem("cart")) || [];

//      // Check if item already exists
//      const existingIndex = cart.findIndex(
//        (cartItem) => cartItem.product_name === item.product_name
//      );

//      if (existingIndex !== -1) {
//        // If exists, increase quantity
//        cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + 1;
//      } else {
//        // If not, add with quantity 1
//        cart.push({ ...item, quantity: 1 });
//      }

//      // Save back to localStorage
//      localStorage.setItem("cart", JSON.stringify(cart));

//      // Show toast
//      toast.success("Product added to cart");
//    };
//    return (
//     <div className=" bg-rose-50 p-3 ">
//       <ToastContainer/>
//       <h2 className="text-center font-bold text-3xl  p-3 text-rose-800"  data-aos="zoom-in">
//         Products
//       </h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 px-6 ">
//   {products.map((item, index) => (
//     <div
//       key={index}
//       data-aos="fade-up"
//       data-aos-duration="2000" 
//       data-aos-delay={index * 200} 
//       className=" flex-shrink-0 flex flex-col justify-center
//       items-center gap-3 bg-white p-6 shadow rounded-2xl hover:scale-105 transition-transform duration-300 w-72"
//     >
//       <Link to={item.path}>
//       <img
//         src={item.product}
//         alt={item.product_name}
//         className="w-56 h-56 object-contain"
//       />
//       </Link>
//       <Link to={item.path} className="text-lg font-semibold text-gray-800 text-center">
//         {item.product_name}
//       </Link>
//       <p className="text-gray-700 text-xl font-medium">₹{item.price}</p>

//       <div className="flex gap-3 mt-2">
//         <button onClick={()=>handleCart(item)}
//          className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition">
//           Add to Cart
//         </button>
//         <Link
//          to="/purchase"
//           state={{
//                   product: {
//                     name: item.product_name,
//                     price: item.price,
//                     // quantity: count
//                   }
//                 }}>
//         <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
//           Buy Now
//         </button>
//         </Link>

//       </div>
//     </div>
//   ))}
// </div>

//         <Link to="/products" className=' flex justify-center items-center p-4'>
//         <button className=' p-3 rounded  hover: bg-amber-200 text-center'>Explore More</button>
//         </Link>
//     </div>
//   );
// }

// export default ProductHome

//data from backend to frontend
import { useEffect, useState } from 'react';
import AOS from 'aos';
import axios from 'axios';
import { Link } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import { FaCartArrowDown } from "react-icons/fa6";
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../common/Navbar';


const ProductHome = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const BACKEND_API = import.meta.env.VITE_API_BACKEND_URL;

  const getProducts = async () => {
    try {
      const response = await axios.get(`${BACKEND_API}/getsome`);
      const products = Array.isArray(response?.data?.data) ? response.data.data : [];
      setData(products);
    } catch (error) {
      console.error("GET error:", error.message);
      toast.error("Failed to load products");
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
    AOS.init({ duration: 2000, once: true });
  }, []);


  const handleCart = (item) => {
    const userData = JSON.parse(localStorage.getItem('user'));
    const userId = userData?.userId || userData?.user?.userId;
    axios.post(`${BACKEND_API}/cart/add`, {
      image: item.product_img,
      product_name: item.product_name,
      quantity: 1,
      price: item.product_price,
      userId,
    })

      .then(() => {
        toast.success("Product added to cart");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to add to cart");
      });
  };

  return (
    <div className="bg-stone-100 p-3">
      <Navbar />
      <ToastContainer />
      <h2 className="text-center font-bold text-3xl p-3 text-stone-700" data-aos="zoom-in">
        Products
      </h2>

      {loading ? (
        <div className="text-center text-gray-600 py-10">Loading products...</div>
      ) : data.length === 0 ? (
        <div className="text-center text-gray-500 py-10">No products found.</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
          {data.map((item, index) => (
            <div
              key={item._id || item.product_name} // ✅ Use unique key if _id exists
              className="w-full max-w-xs bg-white p-6 rounded-2xl shadow-md flex flex-col items-center gap-3 transition-transform hover:scale-105"
              data-aos="fade-up"
            >
              <Link to={`/${item._id}`} className="w-full flex flex-col items-center">
                {item.product_img ? (
                  <img
                    src={`${BACKEND_API}/files/${item.product_img}`}
                    alt={item.product_name}
                    className="w-50 h-50 object-contain mb-4 rounded"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-40 h-40 flex items-center justify-center bg-gray-200 mb-4 rounded text-gray-500">
                    No Image
                  </div>
                )}
                <div className="text-lg font-semibold text-gray-800 text-center">
                  {item.product_name}
                </div>
              </Link>

              <p className="text-gray-700 text-xl font-medium">₹{item.product_price}</p>

              <div className="flex gap-3 mt-2">
                <button
                  onClick={() => handleCart(item)}
                  className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition"
                  aria-label="Add to Cart"
                >
                  <FaCartArrowDown size={20} />
                </button>

                <Link
                  to="/purchase"
                  state={{
                    product: {
                      name: item.product_name,
                      price: item.product_price,
                    },
                  }}
                >
                  <button className="w-full bg-[#916A2f] text-white px-4 py-2 rounded-lg hover:bg-[#7B481C] transition">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      <Link to="/products" className="flex justify-center items-center p-4">
        <button className="p-3 rounded bg-[#916A2f] hover:bg-[#7B481C] text-center text-white">
          Explore More
        </button>
      </Link>
    </div>
  );
};

export default ProductHome;