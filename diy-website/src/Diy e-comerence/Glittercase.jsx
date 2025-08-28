import React, { useState } from 'react'
import Navigate from './Navigate'
import Foot from './Foot'
import glitter from './products/Gilter-case.jpeg'
import { Link } from 'react-router'
import Products from './Products'

const Glittercase = () => {
  const [count, setCount] = useState(0)
  const unitPrice = 200

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if (count > 0) setCount(count - 1)
  }

  const productInfo = [
    { image: glitter, product: "Glitter phone case", width: 500 }
  ]

  return (
    <div>
      <Navigate />
      <div className="p-10">
        {productInfo.map((item, index) => (
          <div key={index} className="flex flex-row gap-11">
            <img src={item.image} alt={item.product} width={item.width} />
            <div>
              <h2 className="text-4xl font-bold mb-2">{item.product}</h2>
              <h2 className=" text-4xl mb-4">Price: ₹{count?unitPrice * count: unitPrice}</h2>
              <div className="flex flex-row gap-4 items-center mb-4">
                <button
                  className="text-2xl bg-amber-600 hover:bg-amber-400  text-white font-bold py-3 px-3 rounded"
                  onClick={increment}>+</button>
                <h2>{count}</h2>
                <button
                  className="text-2xl bg-amber-600 hover:bg-amber-400 text-white font-bold py-3 px-3 rounded"
                  onClick={decrement}>-</button>
              </div>
              <div className="flex flex-row gap-5">
                <Link to="/buy" className="bg-white text-fuchsia-700 border border-fuchsia-300 text-2xl
                 hover:bg-fuchsia-300 hover:text-white transition font-semibold px-4 py-2 rounded-xl" >Buy Now</Link>
                <Link to="/cart" className="bg-white text-fuchsia-700 border border-fuchsia-300 text-2xl
                   hover:bg-fuchsia-300 hover:text-white transition font-semibold px-4 py-2 rounded-xl" >Add to Cart </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Products/>
      <Foot />
    </div>
  )
}

export default Glittercase
