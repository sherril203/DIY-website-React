import React from 'react'
import anime from './products/anime-case.jpeg'
import Gliter from './products/Gilter-case.jpeg'
import block from './products/Block-frame.jpeg'
import { Link } from 'react-router'
import bird from './products/bird-design-case.jpg'
import dot from './products/dot-case.jpeg'
import leather from './products/leather-case.jpg'
import wood from './products/wood-frame.jpg'
import roll from './products/circle-roll-frame.jpeg'
import clock from './products/clock-frame.jpg'
import bangle from './products/bangle-wall-hang.jpg'
import ceramic from './products/ceramic-vase.jpeg'
import brass from './products/brass-vase.jpg'
import butterfly from './products/butterfly jute pen holder.jpg'
import fruit from './products/fruits design pen holder.webp'
import valentines from './products/valentine-heart-vase.jpg'
import moon from './products/moon-phase-wall-hang.jpg'
import kit from './products/jewelery kit.jpg'

const Products = () => {
  const products = [
    { image: anime, product_name: "Anime Phone Case",price:200, width: 800 },
    { image: Gliter, product_name: "Gliter phone case",price:200, width: 800,path:"/products/glitter" },
    { image: bird, product_name: "bird design phone case",price:200, width: 800,path:"/products/birddesign" },
    { image: dot, product_name: "dot design phone case",price:200, width: 800 },
    { image: leather, product_name: "leather design phone case",price:200, width: 800 },
    { image: bangle, product_name: "bangle wall hanging",price:200, width: 800 },
    { image: moon, product_name: "moon phase wall hanging",price:200, width: 800 },
    { image: ceramic, product_name: "ceramic flower vase",price:200, width: 1000 },
    { image: brass, product_name: "brass flower vase",price:200, width: 800 },
    { image: valentines, product_name: " valentines heart flower vase",price:200, width: 800 },
    { image: roll, product_name: "circle roll frame", price:200,width: 800 },
    { image: clock, product_name: "clock frame",price:200, width: 800 },
    { image: wood, product_name: "Wood frame",price:200, width: 800 },
    { image: block, product_name: "Block frame",price:200, width: 800 ,path:"/products/blockframe"},
    { image: butterfly, product_name: "Butterfly design jute pen holder",price:200, width: 800 },
    { image: fruit, product_name: "fruits design pen holder",price:200, width: 800 },
    { image: kit, product_name: "kids jewelery kit",price:200, width: 800 },
  ]
  const handleCart=()=>{
    alert(`${product_name} added to cart`)
  }
  return (
    <div className="bg-gradient-to-br from-fuchsia-100 to-pink-50 min-h-screen">
      <h2 className="text-center text-4xl font-extrabold py-8 text-violet-800 tracking-wide">
        PRODUCTS
      </h2>
      <div className='flex justify-center items-center'>
        <input type="text" placeholder="Search Products"className='bg-white p-2 rounded'/><button className= "bg-emerald-400 p-3 rounded-2xl">Filter</button>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={item.image}
                alt={item.product_name}
                width={item.width}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-center">
                <Link
                  className="font-bold text-xl text-violet-900 mb-3 block" to={item.path}
                >
                  {item.product_name}
                </Link>
                <h2 className='font-bold text-xl text-violet-900 mb-3 block'>₹{item.price}</h2>
                <Link
                  to="/"
                  className="bg-white text-fuchsia-700 border border-fuchsia-300 hover:bg-fuchsia-300 hover:text-white transition font-semibold px-4 py-2 rounded-xl block mb-2"
                >
                  Buy now
                </Link>
                <Link
                   onClick={()=>handleCart()}
                  className="bg-white text-fuchsia-700 border border-fuchsia-300 hover:bg-fuchsia-300 hover:text-white transition font-semibold px-4 py-2 rounded-xl block"
                >
                  Add to Cart
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products
