import React, { useState } from 'react';
import dora from '../../assets/bags/Dora kids bag.png'
import UserNav from '../../Pages/Userpage/UserNav';
import Footer from '../../common/Footer';
import { Link } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { CartContext } from '../../Pages/Cart/CartContext';
import { FaStar } from "react-icons/fa";
import axios from "axios";
import Navbar from '../../common/Navbar';
const Dorabag = () => {
  const product = [
    { product_img: dora, product_name: "Dora Kids Bag", Price: 80 }
  ];

  const [count, setCount] = useState(1);
  const { cart, setcart } = useContext(CartContext)
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]); // store all submitted reviews
const REACT_APP_BACKEND_API = import.meta.env.VITE_API_BACKEND_URL;
  const handleReview = () => {
    if (!review.trim()) {
      toast.error("Review cannot be empty!");
      return;
    }

    setReviews([...reviews, review]); // add new review to list
    setReview(''); // clear input
    toast.success("Review submitted!");
  };
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count > 1 ? count - 1 : 1);

  const totalAmount = product[0].Price * count;
const handleCart = (item) => {
  const userData = JSON.parse(localStorage.getItem('userData')); // assuming you stored login data
  const userId = userData?.userId || userData?.user?.userId;

  if (!userId) {
    toast.error("User not logged in");
    return;
  }

  axios.post(`${VITE_API_BACKEND_URL}/cart/add` , {
    image: item.product_img,
    product_name: item.product_name,
    quantity: count,
    price: item.Price, 
    userId              
  })
    .then(() => {
      toast.success("Product added to cart");
    })
    .catch((err) => {
      console.error(err);
      toast.error("Failed to add to cart");
    });
}

  return (
    <div className='bg-stone-100'>
      <ToastContainer />
      <Navbar/>
      <div className='p-23'>
        {product.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow p-6 rounded max-w-4xl mt-22
                     mx-auto flex flex-col md:flex-row gap-6 "
          >
            {/* Left: Image */}
            <div className="flex-1 flex justify-center items-center">
              <img
                src={item.product_img}
                alt={item.product_name}
                className="w-full max-w-sm h-auto rounded-lg"
              />
            </div>

            {/* Right: Details */}
            <div className="flex-1 flex flex-col justify-center">
              <div className='mb-70'>
                <h2 className='text-lg font-semibold '>{item.product_name}</h2>
                 <h2 className='flex gap-3 text-lg font-bold'><FaStar color="yellow" size={25}/>3.0</h2>
                <h2 className='text-gray-600 text-xl '>Unit Price: ₹{item.Price}</h2>

                <div className='flex items-center gap-2 my-3'>
                  <button onClick={decrease} className='bg-amber-400 px-3 py-1 rounded text-white'>-</button>
                  <span className='font-semibold'>{count}</span>
                  <button onClick={increase} className='bg-amber-400 px-3 py-1 rounded text-white'>+</button>
                </div>

                <h2 className='text-xl font-bold'>Total: ₹{totalAmount}</h2>
              </div>

             <div className="flex gap-50 ">
                <button
                  onClick={() => handleCart(item)}
                  className="bg-amber-500 text-white px-4 py-2 rounded"
                >
                  Add to Cart
                </button>
                 <Link
                  to="/purchase"
                  state={{
                    product: {
                      name: item.product_name,
                      price: item.Price,
                      quantity: count,
                    },
                  }}
                >
                  <button className="bg-green-500 text-white px-4 py-2 rounded">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mb-15 ">
        <div className="bg-white w-[48%]  p-8 rounded shadow gap-5">
          <h2 className="font-bold text-xl mb-3 text-center">Reviews</h2>

          <div className='flex justify-center gap-5'>
            <input
              type="text"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Enter review"
              className="p-3 ring-2 rounded w-full mb-3"
            />

            <div className="">
              <button
                onClick={handleReview}
                className="bg-blue-500 p-3 rounded text-white"
              >
                Submit
              </button>
            </div>
          </div>

          {/* Show submitted reviews */}
          <div className="mt-5 space-y-2">
            {reviews.length === 0 ? (
              <p className="text-gray-500 italic text-center">No reviews yet.</p>
            ) : (
              reviews.map((r, idx) => (
                <div key={idx} className="bg-gray-100 p-3 rounded shadow-sm">
                  {r}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dorabag;
