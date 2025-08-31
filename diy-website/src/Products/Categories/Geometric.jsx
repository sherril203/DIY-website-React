// import React from 'react'
// import heart from '../assets/geometric design/heart-wall-hang.jpg'
// import lotus from '../assets/geometric design/lotus design wall decor.webp'
// import love from '../assets/geometric design/geometric_love_heart_wall_art.jpg'
// import modern from '../assets/geometric design/modern holiday geometry design.jpg'
// const Geometric = () => {
//    const wall = [
//      { product: heart, product_name: "Heart wall hang", price: 200 },
//      { product: lotus, product_name: "Lotus design wall hang", price: 200 },
//      { product: love, product_name: "love heart wall art", price: 200 },
//      { product: modern, product_name: "modern holiday", price: 200 }
//    ]
 
//    return (
//      <div className="p-6">
//        <h2 className="text-center font-bold text-3xl mb-6">Geometric design wall hang</h2>
 
//        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-300 gap-6">
//          {wall.map((item, index) => (
//            <div
//              key={index}
//                   className="flex-shrink-0 flex flex-col items-center gap-3 bg-white p-6 shadow rounded-2xl hover:shadow-lg transition w-72"
//            >
//              <img
//                src={item.product}
//                alt={item.product_name}
//                className="w- 56 h-56 object-contain"
//              />
//              <h3 className="text-lg font-semibold text-gray-800 text-center">
//                {item.product_name}
//              </h3>
//              <p className="text-gray-700 text-xl font-medium">₹{item.price}</p>
 
//              <div className="flex gap-3 mt-2">
//                <button className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition">
//                  Add to Cart
//                </button>
//                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
//                  Buy Now
//                </button>
//              </div>
//            </div>
//          ))}
//        </div>
//      </div>
//    )
// }

// export default Geometric
import React from 'react'
import heart from '../../assets/geometric design/heart-wall-hang.jpg'
import lotus from '../../assets/geometric design/lotus design wall decor.webp'
import love from '../../assets/geometric design/geometric_love_heart_wall_art.jpg'
import modern from '../../assets/geometric design/modern holiday geometry design.jpg'

const Geometric = () => {
  const wall = [
    { product: heart, product_name: "Heart Wall Hang", price: 200 },
    { product: lotus, product_name: "Lotus Design Wall Hang", price: 200 },
    { product: love, product_name: "Love Heart Wall Art", price: 200 },
    { product: modern, product_name: "Modern Holiday", price: 200 }
  ]

  return (
    <div className="p-6 bg-rose-50 ">
      <h2 className="text-center font-bold text-3xl mb-6 text-rose-800">Geometric Design Wall Hang</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
        {wall.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex flex-col items-center gap-3 bg-white border border-rose-200 p-6 shadow-md rounded-2xl hover:scale-105 transition-transform duration-300 w-72"
          >
            <img
              src={item.product}
              alt={item.product_name}
              className="w-56 h-56 object-contain"
            />
            <h3 className="text-lg font-semibold text-indigo-800 text-center">
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

export default Geometric
