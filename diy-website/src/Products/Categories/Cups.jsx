// import React from 'react'
// import Butterfly from '../assets/cups/Butterfly Design Cup.png'
// import kids from '../assets/cups/kids cup.png'
// import thought from '../assets/cups/thought customization design cup.png'
// import white from '../assets/cups/white_cup_with_customization.png'

// const Cups = () => {
//   const cups = [
//     { product: white, product_name: "Name Customization Cup", price: 300 },
//     { product: Butterfly, product_name: "Butterfly Design Cup", price: 200 },
//     { product: kids, product_name: "Kids Cup", price: 200 },
//     { product: thought, product_name: "Thought Customization  Cup", price: 200 }
//   ]

//   return (
//     <div className="p-6">

//       <h2 className="text-center font-bold text-3xl mb-6">Cups</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-300">
//         {cups.map((item, index) => (
//           <div
//             key={index}
//                  className="flex-shrink-0 flex flex-col items-center gap-3 bg-white p-6 shadow rounded-2xl hover:shadow-lg transition w-72"
//           >
//             <img
//               src={item.product}
//               alt={item.product_name}
//               className="w-full h-56 object-contain"
//             />

//             <h3 className="text-lg font-semibold text-gray-800 text-center">
//               {item.product_name}
//             </h3>

//             <p className="text-gray-700 text-xl font-medium">₹{item.price}</p>

//             <div className="flex gap-3 mt-2">
//               <button className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition">
//                 Add to Cart
//               </button>
//               <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
//                 Buy Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Cups
import React from 'react'
import Butterfly from '../../assets/cups/Butterfly Design Cup.png'
import kids from '../../assets/cups/kids cup.png'
import thought from '../../assets/cups/thought customization design cup.png'
import white from '../../assets/cups/white_cup_with_customization.png'
import { Link } from 'react-router'

const Cups = () => {
  const cups = [
    { product: white, product_name: "Name Customization Cup", price: 300,path:"/products/name" },
    { product: Butterfly, product_name: "Butterfly Design Cup", price: 200 },
    { product: kids, product_name: "Kids Cup", price: 200 },
    { product: thought, product_name: "Thought Customization Cup", price: 200 }
  ]

  return (
    <div className="p-6 bg-rose-50 ">
      <h2 className="text-center font-bold text-3xl mb-6 text-rose-800">Cups</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
        {cups.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex flex-col items-center gap-3 bg-white border border-rose-200 p-6 shadow-md rounded-2xl hover:scale-105 transition-transform duration-300 w-72"
          >
            <img
              src={item.product}
              alt={item.product_name}
              className="w-full h-56 object-contain"
            />

            <Link to={item.path} className="text-lg font-semibold text-indigo-800 text-center">
              {item.product_name}
            </Link>

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

export default Cups
