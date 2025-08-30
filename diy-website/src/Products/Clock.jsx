import React from 'react'
import holiday from '../assets/clock/unique clock- the perfect holiday gift.jpg'
import flower from '../assets/clock/flower design clock.png'

const Clock = () => {
  const clocks = [
    { product: flower, product_name: "Flower Design Clock", price: 200 },
    { product: holiday, product_name: "Unique Clock - The Perfect Holiday Gift", price: 200 }
  ]

  return (
    <div className="p-6">
      {/* Section Heading */}
      <h2 className="text-center font-bold text-3xl mb-6">Clocks</h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-300">
        {clocks.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 bg-white p-6 shadow rounded-2xl hover:shadow-lg transition"
          >
            <img
              src={item.product}
              alt={item.product_name}
              className="w-full h-56 object-contain"
            />

            <h3 className="text-lg font-semibold text-gray-800 text-center">
              {item.product_name}
            </h3>

            <p className="text-gray-700 text-xl font-medium">₹{item.price}</p>

            {/* Buttons */}
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

export default Clock
