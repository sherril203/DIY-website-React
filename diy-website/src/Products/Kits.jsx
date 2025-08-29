import React from 'react'
import christmas from '../assets/kits/Christmas kit for kids.jpg'
import jewellery from '../assets/kits/jewelery kit.jpg'
const Kits = () => {
 const bags = [
     { product: christmas, product_name: "kids Christmas Kit", price: 200 },
     { product: jewellery, product_name: "Jewellery Kit for Girls", price: 200 },
   ]
 
   return (
     <div className="p-6">
       <h2 className="text-center font-bold text-3xl mb-6">Kits for kids</h2>
 
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
         {bags.map((item, index) => (
           <div
             key={index}
             className="flex flex-col items-center gap-3 bg-white p-6 shadow rounded-2xl hover:shadow-lg transition"
           >
             <img
               src={item.product}
               alt={item.product_name}
               className="w-60 h-60 object-cover"
             />
             <h3 className="text-lg font-semibold text-gray-800 text-center">
               {item.product_name}
             </h3>
             <p className="text-gray-700 text-xl font-medium">₹{item.price}</p>
 
             <div className="flex gap-3 mt-2">
               <button className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition">
                 Add to Cart
               </button>
               <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                 Buy Now
               </button>
             </div>
           </div>
         ))}
       </div>
     </div>
   )
}

export default Kits