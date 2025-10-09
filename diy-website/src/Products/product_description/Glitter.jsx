// import React, { useState } from 'react';
// import { Link } from 'react-router';
// import glitter from '../../assets/phone_case/Gilter-case.jpeg';
// import UserNav from '../../Pages/Userpage/UserNav';
// import Footer from '../../common/Footer';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useContext } from 'react';
// import { CartContext } from '../../Pages/Cart/CartContext';
// import { FaStar } from "react-icons/fa";
// import emerald from '../../assets/phone_case/Ruby-emerald.png'
// import aqua from '../../assets/phone_case/aqua-torquise.png'
// import axios from "axios";
// const Anime = () => {
//   const product = [
//     { product_img: glitter, product_name: "Glitter Phone Case", Price: 200 }
//   ];
//   const { cart, setcart } = useContext(CartContext)
//   const [count, setCount] = useState(1);
//   const [review, setReview] = useState('');
//   const [reviews, setReviews] = useState([]); // store all submitted reviews
//   const sidepics = [
//     { product_img: emerald},
//     { product_img: aqua }
//   ];
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

//   const totalAmount = product[0].Price * count;
// const handleCart = (item) => {
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
//     <div className='  bg-stone-100'>
//       <ToastContainer />
//       <UserNav />
//       <div className='p-23'>
//         {product.map((item, index) => (
//           <div
//   key={index}
//   className="bg-white shadow p-6 rounded max-w-4xl mt-10 mx-auto flex flex-col md:flex-row gap-6"
// >
//   {/* Left: Main Image */}
//   <div className="flex-1 flex justify-center items-center">
//     <img
//       src={item.product_img}
//       alt={item.product_name}
//       className="w-full max-w-sm h-auto rounded-lg"
//     />
//   </div>

//   {/* Right: Details */}
//   <div className="flex-1 flex flex-col justify-between">
//     <div>
//       <h2 className="text-lg font-semibold">{item.product_name}</h2>
//       <h2 className="flex items-center gap-2 text-lg font-bold">
//         <FaStar color="yellow" size={25} /> 3.0
//       </h2>
//       <h2 className="text-gray-600 text-xl mb-2">
//         Unit Price: ₹{item.Price}
//       </h2>

//       {/* Quantity Selector */}
//       <div className="flex items-center gap-2 my-3">
//         <button onClick={decrease} className="bg-amber-400 px-3 py-1 rounded text-white">-</button>
//         <span className="font-semibold">{count}</span>
//         <button onClick={increase} className="bg-amber-400 px-3 py-1 rounded text-white">+</button>
//       </div>

//       <h2 className="text-xl font-bold mb-4">Total: ₹{totalAmount}</h2>

//       {/* Side Images (Moved Here) */}
//       <div className='flex flex-row'>
//         <div className="grid grid-cols-2 gap-2 ">
//         {sidepics.map((pic, idx) => (
//           <img
//             key={idx}
//             src={pic.product_img}
//             alt={`Side pic ${idx + 1}`}
//             className="w-24 h-24 object-contain rounded shadow"
//           />
//         ))}
//          </div>
//       </div>
//     </div>

//     {/* Buttons */}
//     <div className="flex gap-50 mt-6">
//       <button
//         onClick={() => handleCart(item)}
//         className="bg-amber-500 text-white px-4 py-2 rounded"
//       >
//         Add to Cart
//       </button>
//       <Link
//         to="/purchase"
//         state={{
//           product: {
//             name: item.product_name,
//             price: item.Price,
//             quantity: count,
//           },
//         }}
//       >
//         <button className="bg-green-500 text-white px-4 py-2 rounded">
//           Buy Now
//         </button>
//       </Link>
//     </div>
//   </div>
// </div>

//         ))}
//       </div>
//       <div className="flex justify-center mb-15 ">
//         <div className="bg-white w-230  p-8 rounded shadow gap-5">
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
//                 className="bg-blue-500 p-2 rounded text-white"
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

// export default Anime;
import emerald from '../../assets/phone_case/Ruby-emerald.png'
import aqua from '../../assets/phone_case/aqua-torquise.png'
import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router';  // use react-router-dom, not react-router
import UserNav from '../../Pages/Userpage/UserNav';
import Footer from '../../common/Footer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartContext } from '../../Pages/Cart/CartContext';
import { FaStar } from "react-icons/fa";
import axios from 'axios';
import Navbar from '../../common/Navbar';

const Glitter = () => {
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const { cart, setcart } = useContext(CartContext);
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);
  const { id } = useParams()
  const sidepics = [
    { product_img: emerald },
    { product_img: aqua }
  ];
  useEffect(() => {
    axios.get(`http://localhost:5000/getcategory/phone_case/${id}`)
      .then(res => {
        setProduct(res.data);
      })
      .catch(err => {
        console.error(err);
        toast.error("Failed to load product");
      });
  }, [id]);

  const handleReview = () => {
    if (!review.trim()) {
      toast.error("Review cannot be empty!");
      return;
    }
    setReviews([...reviews, review]);
    setReview('');
    toast.success("Review submitted!");
  };

  const increase = () => setCount(prev => prev + 1);
  const decrease = () => setCount(prev => (prev > 1 ? prev - 1 : 1));

  if (!product) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-stone-100">
        <p className="text-gray-500 text-lg">Loading...</p>
      </div>
    );
  }

  const unitPrice = Number(product.product_price || product.price);
  const totalAmount = unitPrice * count;

  const handleCart = () => {
    axios.post("http://localhost:5000/cart/add", {
      image: product.product_img,
      product_name: product.product_name,
      quantity: count,
      price: unitPrice,
    })
      .then(() => {
        toast.success("Product added to cart");
      })
      .catch(err => {
        console.error(err);
        toast.error("Failed to add to cart");
      });
  };

  return (
    <div className='bg-stone-100'>
      <ToastContainer />
      <Navbar />

      <div className='p-6'>
        <div className="bg-white shadow p-6 rounded max-w-4xl mt-23 mx-auto flex flex-col md:flex-row gap-6">
          {/* Left: Image */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src={`http://localhost:5000/files/${product.product_img}`}
              alt={product.product_name}
              className="w-full max-w-sm h-auto rounded-lg"
            />
          </div>

          {/* Right: Details */}
          <div className="flex-1 flex flex-col justify-center">
            <div className='mb-12'>
              <h2 className='text-lg font-semibold'>{product.product_name}</h2>
              <h2 className='flex gap-3 text-lg font-bold'>
                <FaStar color="yellow" size={25} /> 3.0
              </h2>
              <h2 className='text-gray-600 text-xl'>Unit Price: ₹{unitPrice}</h2>
              <h2 className='text-gray-600 text-xl'>Customization Available</h2>

              <div className='flex items-center gap-2 my-3'>
                <button onClick={decrease} className='bg-amber-400 px-3 py-1 rounded text-white'>-</button>
                <span className='font-semibold'>{count}</span>
                <button onClick={increase} className='bg-amber-400 px-3 py-1 rounded text-white'>+</button>
              </div>

              <h2 className='text-xl font-bold'>Total: ₹{totalAmount}</h2>
              {/* Side Images (Moved Here) */}
              <div className='flex flex-row'>
                <div className="grid grid-cols-2 gap-2 ">
                  {sidepics.map((pic, idx) => (
                    <img
                      key={idx}
                      src={pic.product_img}
                      alt={`Side pic ${idx + 1}`}
                      className="w-24 h-24 object-contain rounded shadow"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-50">
              <button onClick={handleCart} className="bg-amber-500 text-white px-4 py-2 rounded">
                Add to Cart
              </button>

              <Link
                to="/purchase"
                state={{
                  product: {
                    name: product.product_name,
                    price: unitPrice,
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
      </div>

      {/* Reviews */}
      <div className="flex justify-center mb-20">
        <div className="bg-white w-[48%] p-8 rounded shadow gap-5">
          <h2 className="font-bold text-xl mb-3 text-center">Reviews</h2>

          <div className='flex justify-center gap-5'>
            <input
              type="text"
              value={review}
              onChange={e => setReview(e.target.value)}
              placeholder="Enter review"
              className="p-3 ring-2 rounded w-full mb-3"
            />
            <button
              onClick={handleReview}
              className="bg-blue-500 p-3 rounded text-white"
            >
              Submit
            </button>
          </div>

          <div className="mt-5 space-y-2">
            {reviews.length === 0 ? (
              <p className="text-gray-500 italic text-center">No reviews yet.</p>
            ) : (
              reviews.map((r, idx) => (
                <div key={idx} className="bg-gray-100 p-3 rounded shadow-sm">{r}</div>
              ))
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Glitter;
