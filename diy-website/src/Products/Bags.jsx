import React from 'react'
import cartoon from '../assets/bags/cartoon design bags for kids.png'
import flower from '../assets/bags/flower_design_bag.png'

const Bags = () => {
  const bags = [
    { product: cartoon, product_name: "Cartoon Design Bag for Kids", price: 200 },
    { product: flower, product_name: "Flower Design Bag", price: 200 }
  ]

  return (
    <div className="p-6">
      <h2 className="text-center font-bold text-3xl mb-6">Bags</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-300 gap-6">
        {bags.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-3 bg-white p-6 shadow rounded-2xl hover:shadow-lg transition"
          >
            <img
              src={item.product}
              alt={item.product_name}
              className="w- 56 h-56 object-contain"
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

export default Bags
