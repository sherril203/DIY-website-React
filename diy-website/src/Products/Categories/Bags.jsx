//data from frontend
import React from 'react'
import cartoon from '../../assets/bags/cartoon design bags for kids.png'
import flower from '../../assets/bags/flower_design_bag.png'
import { Link } from 'react-router'

const Bags = () => {
  const bags = [
    { product: cartoon, product_name: "Cartoon Design Bag for Kids", price: 200},
    { product: flower, product_name: "Flower Design Bag", price: 200 ,path:"/products/flower" }
  ]
 
  return (
    <div className="p-6 bg-rose-50 ">
      <h2 className="text-center font-bold text-3xl mb-6 text-rose-800">Bags</h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {bags.map((item, index) => (
          <div
            key={index}
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
              <button className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition"
             >
                Add to Cart
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700
               transition" >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Bags

//data fetch from backend
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router';
// import axios from 'axios';

// const Bags = () => {
//   const [bags, setBags] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch bags from backend
//   useEffect(() => {
//     const fetchBags = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/productinfo');

//         // Build full image URL using imageUrl
//         const updatedData = response.data.map(item => ({
//           ...item,
//           product: `http://localhost:5000/files/${item.imageUrl}`, // ✅ Construct image URL
//         }));

//         setBags(updatedData);
//       } catch (err) {
//         console.error('Fetch error:', err);
//         setError('Failed to fetch products.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBags();
//   }, []);

//   return (
//     <div className="p-6 bg-rose-50">
//       <h2 className="text-center font-bold text-3xl mb-6 text-rose-800">Bags</h2>

//       {loading ? (
//         <p className="text-center text-gray-600">Loading...</p>
//       ) : error ? (
//         <p className="text-center text-red-600">{error}</p>
//       ) : (
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
//           {bags.map((item, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0 flex flex-col items-center gap-3 bg-white border border-rose-200 p-6 shadow-md rounded-2xl hover:scale-105 transition-transform duration-300 w-72"
//             >
//               <img
//                 src={item.product}
//                 alt={item.product_name}
//                 className="w-56 h-56 object-contain"
//               />
//               <Link
//                 to={item.path || "#"}
//                 className="text-lg font-semibold text-indigo-800 text-center"
//               >
//                 {item.product_name}
//               </Link>
//               <p className="text-gray-700 text-xl font-medium">₹{item.price}</p>

//               <div className="flex gap-3 mt-2">
//                 <button className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition">
//                   Add to Cart
//                 </button>
//                 <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
//                   Buy Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Bags;


