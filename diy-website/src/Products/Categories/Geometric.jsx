import React from 'react'
import heart from '../../assets/geometric design/heart-wall-hang.jpg'
import lotus from '../../assets/geometric design/lotus design wall decor.webp'
import love from '../../assets/geometric design/geometric_love_heart_wall_art.jpg'
import modern from '../../assets/geometric design/modern holiday geometry design.jpg'
import { Link } from 'react-router'

const Geometric = ({ query }) => {
  const wall = [
    { product: heart, product_name: "Heart Wall Decor", price: 200, path: "/products/heart" },
    { product: lotus, product_name: "Lotus Design Wall Decor", price: 200, path: "/products/lotus_decor" },
    { product: love, product_name: "Love Heart Wall Art", price: 200, path: "/products/love_decor" },
    { product: modern, product_name: "Modern Holiday Decor", price: 200, path: "/products/holiday" }
  ];

  // const filtered = wall.filter(item =>
  //   item.product_name.toLowerCase().includes(query.toLowerCase())
  // );
    const filtered = wall.filter(item =>
  (item.product_name || '').toLowerCase().includes((query || '').toLowerCase())
);
  if (filtered.length === 0) return null;

  return (
    <div className="p-6 bg-rose-50">
      <h2 className="text-center font-bold text-3xl mb-6 text-rose-800">Geometric Design Wall Decor</h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {filtered.map((item, index) => (
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
  );
};

export default Geometric;
