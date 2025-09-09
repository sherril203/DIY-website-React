import React from 'react'
import Butterfly from '../assets/cups/Butterfly Design Cup.png'
import glitter from '../assets/phone case/Gilter-case.jpeg'
import flower_bag from '../assets/bags/flower_design_bag.png'
import flower from '../assets/clock/flower design clock.png'
import love from '../assets/geometric design/geometric_love_heart_wall_art.jpg'
import christmas from '../assets/kits/Christmas kit for kids.jpg'
import {Link } from 'react-router'
const ProductHome = () => {
    const products=[
        { product: flower_bag, product_name: "Flower Design Bag", price: 200,path:"/products/flower" },
        { product: Butterfly, product_name: "Butterfly Design Cup", price: 200,path:"/products/butterfly" },
        { product: glitter, product_name: "Glitter Phone Case", price: 200 ,path:"/products/glitter" },
         {product: flower, product_name: "Flower Design Clock", price: 200 , path:"/products/flowerclock"},
        { product: love, product_name: "love heart wall art", price: 200 },
        { product: christmas, product_name: "Kids Christmas Kit", price: 200,path:"/products/christmas" },
    ]
   return (
    <div className=" bg-rose-50 p-3 ">
      <h2 className="text-center font-bold text-3xl mt-22 p-3 text-rose-800">
        Products
      </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 px-6 ">
  {products.map((item, index) => (
    <div
      key={index}
      className=" flex-shrink-0 flex flex-col justify-center
      items-center gap-3 bg-white p-6 shadow rounded-2xl hover:scale-105 transition-transform duration-300 w-72"
    >
      <img
        src={item.product}
        alt={item.product_name}
        className="w-56 h-56 object-contain"
      />
      <Link to={item.path} className="text-lg font-semibold text-gray-800 text-center">
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

        <Link to="/products" className=' flex justify-center items-center p-4'>
        <button className=' p-3 rounded  hover: bg-amber-200 text-center'>Explore More</button>
        </Link>
    </div>
  );
}

export default ProductHome