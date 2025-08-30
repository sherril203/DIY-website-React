import React from 'react'
import Butterfly from '../assets/cups/Butterfly Design Cup.png'
import glitter from '../assets/phone case/Gilter-case.jpeg'
import flower from '../assets/bags/flower_design_bag.png'
import {Link } from 'react-router'
const ProductHome = () => {
    const products=[
        { product: flower, product_name: "Flower Design Bag", price: 200 },
        { product: Butterfly, product_name: "Butterfly Design Cup", price: 200 },
        { product: glitter, product_name: "Glitter Phone Case", price: 200 },
    ]
   return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <h2 className="text-center font-bold text-3xl mt-22 p-4 text-teal-600">
        Products
      </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-3 bg-white p-6 shadow rounded-2xl hover:shadow-lg transition"
          >
            <img
              src={item.product}
              alt={item.product_name}
              className="w-full h-56 object-cover"
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
        <Link to="/products" className=' flex justify-center items-center p-4'>
        <button className=' p-3 rounded  hover: bg-amber-200 text-center'>Explore More</button>
        </Link>
    </div>
  );
}

export default ProductHome