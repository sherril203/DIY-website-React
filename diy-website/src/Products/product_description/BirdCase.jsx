// // import React,{useState} from 'react'
// // import bird from '../../assets/phone case/bird-design-case.jpg'
// // import { Link } from 'react-router'
// // import Navigate from '../../common/Navigate';
// // import Footer from '../../common/Footer';
// // import { toast, ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // const BirdCase = () => {
// //   const product = [
// //     { product: bird, product_name: "Bird Design Phone Case", price: 200 },
// //   ];

// //   const [count, setCount] = useState(1); 

// //   const increase = () => setCount(count + 1);
// //   const decrease = () => setCount(count > 1 ? count - 1 : 1);

// //   const totalAmount = product[0].price * count;
// //   const handleCart=()=>{
// //     toast.success('product added')
// //   }
// //   return (
// //     <div className='  bg-rose-50'>
// //         <ToastContainer/>
// //         <Navigate/>
// //       <div className='p-23'>
// //         {product.map((item, index) => (
// //           <div key={index} className='bg-white shadow p-6 rounded max-w-sm mx-auto'>
// //             <img src={item.product} alt={item.product_name} className='w-full h-auto' />
// //             <h2 className='text-lg font-semibold mt-2'>{item.product_name}</h2>
// //             <h2 className='text-gray-600'>Unit Price: ₹{item.price}</h2>
// //             <div className='flex items-center gap-2 my-3'>
// //               <button onClick={increase} className='bg-amber-400 px-3 py-1 rounded text-white'>+</button>
// //               <span className='font-semibold'>{count}</span>
// //               <button onClick={decrease} className='bg-amber-400 px-3 py-1 rounded text-white'>-</button>
// //             </div>

// //             <h2 className='text-xl font-bold'>Total: ₹{totalAmount}</h2>

// //             <div className='flex gap-2 mt-4'>
// //               <Link
// //                 to="/purchase"
// //                 state={{
// //                   product: {
// //                     name: item.product_name,
// //                     price: item.price,
// //                     quantity: count
// //                   }
// //                 }}
// //               >
// //                 <button className='bg-green-500 text-white px-4 py-2 rounded'>Buy Now</button>
// //               </Link>
// //               <button onClick={handleCart}
// //               className='bg-blue-500 text-white px-4 py-2 rounded'>Add to Cart</button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //       <Footer/>
// //     </div>
// //   );
// // }

// // export default BirdCase
// import React, { useState, useContext } from "react";
// import bird from "../../assets/phone case/bird-design-case.jpg";
// import { Link } from "react-router";
// import Navigate from "../../common/Navigate";
// import Footer from "../../common/Footer";
// import { toast, ToastContainer } from "react-toastify";
// import { CartContext } from "../../Pages/Cart/CartContext"; 
// import "react-toastify/dist/ReactToastify.css";
// const BirdCase = () => {
//   const product = [
//     { product: bird, product_name: "Bird Design Phone Case", price: 200 },
//   ];
//  const {cart,setcart}=useContext(CartContext)
//   const [count, setCount] = useState(1);

//   const increase = () => setCount(count + 1);
//   const decrease = () => setCount(count > 1 ? count - 1 : 1);

//   const totalAmount = product[0].price * count;

//    const handleCart = (item) => {
//    const normalizedItem = {
//      image: item.image || item.product,
//      name: item.name || item.product_name,
//      price: item.Price,
//      quantity: count
//    };
//    setcart([...cart, normalizedItem]);
//    toast.success("Product added");
//  };

//   return (
//     <div className='bg-stone-100'>
//       <ToastContainer />
//       <Navigate />
//       <div className="p-23">
//         {product.map((item, index) => (
//           <div
//             key={index}
//             className="bg-white shadow p-6 rounded max-w-sm mx-auto"
//           >
//             <img src={item.product} alt={item.product_name} className="w-full h-auto" />
//             <h2 className="text-lg font-semibold mt-2">{item.product_name}</h2>
//             <h2 className="text-gray-600">Unit Price: ₹{item.price}</h2>

//             <div className="flex items-center gap-2 my-3">
//               <button onClick={increase} className="bg-amber-400 px-3 py-1 rounded text-white">
//                 +
//               </button>
//               <span className="font-semibold">{count}</span>
//               <button onClick={decrease} className="bg-amber-400 px-3 py-1 rounded text-white">
//                 -
//               </button>
//             </div>

//             <h2 className="text-xl font-bold">Total: ₹{totalAmount}</h2>

//             <div className="flex gap-2 mt-4">
//               <Link
//                 to="/purchase"
//                 state={{
//                   product: {
//                     name: item.product_name,
//                     price: item.price,
//                     quantity: count,
//                   },
//                 }}
//               >
//                 <button className="bg-green-500 text-white px-4 py-2 rounded">
//                   Buy Now
//                 </button>
//               </Link>
//               <button
//                 onClick={()=>handleCart(item)}
//                 className="bg-blue-500 text-white px-4 py-2 rounded"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default BirdCase;
// import React, { useState, useContext } from "react";
// import bird from "../../assets/phone_case/bird-design-case.jpg";
// import { Link } from "react-router";
// import Navigate from "../../common/Navigate";
// import Footer from "../../common/Footer";
// import { toast, ToastContainer } from "react-toastify";
// import { CartContext } from "../../Pages/Cart/CartContext";
// import "react-toastify/dist/ReactToastify.css";
// import { FaStar } from "react-icons/fa";
// import UserNav from "../../Pages/Userpage/UserNav";
// import axios from "axios"
// const BirdCase = () => {
//   const product = [
//     { product_img: bird, product_name: "Bird Design Phone Case", price: 200 },
//   ];

//   const { cart, setcart } = useContext(CartContext);
//   const [count, setCount] = useState(1);
//   const [review, setReview] = useState('');
//   const [reviews, setReviews] = useState([]); // store all submitted reviews

//   const handleReview = () => {
//     if (!review.trim()) {
//       toast.error("Review cannot be empty!");
//       return;
//     }

//     setReviews([...reviews, review]); // add new review to list
//     setReview(''); // clear input
//     toast.success("Review submitted!");
//   };
//   const increase = () => setCount(count + 1);
//   const decrease = () => setCount(count > 1 ? count - 1 : 1);

//   const totalAmount = product[0].price * count;

//   const handleCart = (item) => {
//     axios.post("http://localhost:5000/cart/add", {
//       image: item.product_img,
//       product_name: item.product_name,
//       quantity: count,
//       price: item.price, 
//     })
//       .then(() => {
//         toast.success("Product added to cart");
//       })
//       .catch((err) => {
//         console.error(err);
//         toast.error("Failed to add to cart");
//       });
//   }

//   return (
//     <div className='bg-stone-100'>
//       <ToastContainer />
//       <UserNav />
//       <div className="p-23">
//         {product.map((item, index) => (
//           <div
//             key={index}
//             className="bg-white shadow p-6 rounded max-w-4xl mx-auto flex flex-col md:flex-row gap-6 mt-10"
//           >
//             {/* Left: Image */}
//             <div className="flex-1 flex justify-center items-center">
//               <img
//                 src={item.product_img}
//                 alt={item.product_name}
//                 className="w-full max-w-sm h-auto rounded-lg"
//               />
//             </div>

//             {/* Right: Details */}
//             <div className="flex-1 flex flex-col justify-center">
//               <div className='mb-45'>
//                 <h2 className='text-lg font-semibold '>{item.product_name}</h2>
//                 <p className='flex gap-3 text-lg font-bold'><FaStar color="yellow" size={25}/>3.0</p>
//                 <h2 className='text-gray-600 text-xl '>Unit Price: ₹{item.price}</h2>

//                 <div className='flex items-center gap-2 my-3'>
//                   <button onClick={decrease} className='bg-amber-400 px-3 py-1 rounded text-white'>-</button>
//                   <span className='font-semibold'>{count}</span>
//                   <button onClick={increase} className='bg-amber-400 px-3 py-1 rounded text-white'>+</button>
//                 </div>

//                 <h2 className='text-xl font-bold'>Total: ₹{totalAmount}</h2>
//               </div>
// <div className="flex gap-50 ">
//                 <button
//                   onClick={() => handleCart(item)}
//                   className="bg-amber-500 text-white px-4 py-2 rounded"
//                 >
//                   Add to Cart
//                 </button>
//                  <Link
//                   to="/purchase"
//                   state={{
//                     product: {
//                       name: item.product_name,
//                       price: item.price,
//                       quantity: count,
//                     },
//                   }}
//                 >
//                   <button className="bg-green-500 text-white px-4 py-2 rounded">
//                     Buy Now
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-center mb-15 ">
//         <div className="bg-white w-[48%]  p-8 rounded shadow gap-5">
//           <h2 className="font-bold text-xl mb-3 text-center">Reviews</h2>

//           <div className='flex justify-center gap-5'>
//             <input
//               type="text"
//               value={review}
//               onChange={(e) => setReview(e.target.value)}
//               placeholder="Enter review"
//               className="p-3 ring-2 rounded w-full mb-3"
//             />

//             <div className="">
//               <button
//                 onClick={handleReview}
//                 className="bg-blue-500 p-3 rounded text-white"
//               >
//                 Submit
//               </button>
//             </div>
//           </div>

//           {/* Show submitted reviews */}
//           <div className="mt-5 space-y-2">
//             {reviews.length === 0 ? (
//               <p className="text-gray-500 italic text-center">No reviews yet.</p>
//             ) : (
//               reviews.map((r, idx) => (
//                 <div key={idx} className="bg-gray-100 p-3 rounded shadow-sm">
//                   {r}
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default BirdCase;
import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Footer from "../../common/Footer";
import UserNav from "../../Pages/Userpage/UserNav";
import { CartContext } from "../../Pages/Cart/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaStar } from "react-icons/fa";
import Navbar from "../../common/Navbar";

const BirdCase = () => {
  const { id } = useParams(); // ⬅️ extract id from route like /products/:id
  const { cart, setcart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);
const REACT_APP_BACKEND_API = import.meta.env.VITE_API_BACKEND_URL;
  useEffect(() => {
    axios.get(`http://localhost:5000/getcategory/phone_case/${id}`)
      .then(res => {
        setProduct(res.data);
      })
      .catch(err => {
        console.error(err);
        toast.error("Failed to load product.");
      });
  }, [id]);

  const increase = () => setCount(prev => prev + 1);
  const decrease = () => setCount(prev => (prev > 1 ? prev - 1 : 1));

const handleCart = (item) => {
  const userData = JSON.parse(localStorage.getItem('userData')); // assuming you stored login data
  const userId = userData?.userId || userData?.user?.userId;

  if (!userId) {
    toast.error("User not logged in");
    return;
  }

  axios.post(`${REACT_APP_BACKEND_API}/cart/add`, {
    image: item.product_img,
    product_name: item.product_name,
    quantity: count,
    price: item.product_price,  // ❗Fix key name
    userId              // ✅ Add userId
  })
    .then(() => {
      toast.success("Product added to cart");
    })
    .catch((err) => {
      console.error(err);
      toast.error("Failed to add to cart");
    });
}


  const handleReview = () => {
    if (!review.trim()) {
      toast.error("Review cannot be empty!");
      return;
    }
    setReviews([...reviews, review]);
    setReview('');
    toast.success("Review submitted!");
  };

  if (!product) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  const totalAmount = product.product_price * count;

  return (
    <div className='bg-stone-100 min-h-screen'>
      <ToastContainer />
      <Navbar />

      <div className="p-6">
        <div className="bg-white shadow p-6 rounded max-w-4xl mx-auto flex flex-col md:flex-row gap-6 mt-23">
          {/* Left: Image */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src={`${REACT_APP_BACKEND_API}/files/${product.product_img}`}
              alt={product.product_name}
              className="w-full max-w-sm h-auto rounded-lg object-contain"
            />
          </div>

          {/* Right: Details */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="mb-6">
              <h2 className="text-xl font-semibold">{product.product_name}</h2>
              <p className="flex items-center gap-2 text-lg font-bold text-black mt-1">
                <FaStar color="yellow" /> 3.0
              </p>
              <h3 className="text-gray-700 text-lg mt-2">Unit Price: ₹{product.product_price}</h3>

              <div className="flex items-center gap-3 my-4">
                <button onClick={decrease} className="bg-amber-400 px-3 py-1 rounded text-white">-</button>
                <span className="font-semibold text-lg">{count}</span>
                <button onClick={increase} className="bg-amber-400 px-3 py-1 rounded text-white">+</button>
              </div>

              <h3 className="text-xl font-bold">Total: ₹{totalAmount}</h3>
            </div>

            <div className="flex gap-50 mt-4">
              <button onClick={handleCart} className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 transition">
                Add to Cart
              </button>
              <Link
                to="/purchase"
                state={{
                  product: {
                    name: product.product_name,
                    price: product.product_price,
                    quantity: count
                  }
                }}
              >
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Review Section */}
      <div className="flex justify-center mt-14 mb-20">
        <div className="bg-white w-full max-w-4xl p-8 rounded shadow">
          <h2 className="font-bold text-2xl mb-4 text-center">Reviews</h2>
          <div className='flex flex-col sm:flex-row justify-center gap-4'>
            <input
              type="text"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Enter your review"
              className="p-3 border rounded w-full"
            />
            <button
              onClick={handleReview}
              className="bg-blue-500 px-5 py-3 rounded text-white hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </div>

          <div className="mt-6 space-y-3">
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

export default BirdCase;
