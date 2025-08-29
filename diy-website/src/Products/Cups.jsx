import React from 'react'
import Butterfly from '../assets/cups/Butterfly Design Cup.png'
import kids from '../assets/cups/kids cup.png'
import thought from '../assets/cups/thought customization design cup.png'
import white from '../assets/cups/white_cup_with_customization.png'

const Cups = () => {
  const cups = [
    { product: white, product_name: "Name Customization Cup", price: 300 },
    { product: Butterfly, product_name: "Butterfly Design Cup", price: 200 },
    { product: kids, product_name: "Kids Cup", price: 200 },
    { product: thought, product_name: "Thought Customization Design Cup", price: 200 }
  ]

  return (
    <div className="p-6">

      <h2 className="text-center font-bold text-3xl mb-6">Cups</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cups.map((item, index) => (
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

export default Cups
