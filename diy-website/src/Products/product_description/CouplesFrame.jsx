
import React, { useState, useContext } from "react";
import block from "../../assets/frames/Couples_collague_frame.png";
import { Link } from "react-router";
import Navigate from "../../common/Navigate";
import Footer from "../../common/Footer";
import { toast, ToastContainer } from "react-toastify";
import { CartContext } from "../../Pages/Cart/CartContext";
import "react-toastify/dist/ReactToastify.css";
const CoupleFrame = () => {
  const product = [
    { product: block, product_name: "Couples Collague Frame", price: 200 },
  ];
  const { cart, setcart } = useContext(CartContext)
  const [count, setCount] = useState(1);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count > 1 ? count - 1 : 1);

  const totalAmount = product[0].price * count;

  const handleCart = (item) => {
    const normalizedItem = {
      image: item.image || item.product,
      name: item.name || item.product_name,
      price: item.Price,
      quantity: count
    };
    setcart([...cart, normalizedItem]);
    toast.success("Product added");
  };

  return (
    <div className="bg-rose-50">
      <ToastContainer />
      <Navigate />
      <div className="p-23">
        {product.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow p-6 rounded max-w-4xl mt-22
                      mx-auto flex flex-col md:flex-row gap-6 "
          >
            {/* Left: Image */}
            <div className="flex-1 flex justify-center items-center">
              <img
                src={item.product}
                alt={item.product_name}
                className="w-full max-w-sm h-auto rounded-lg"
              />
            </div>

            {/* Right: Details */}
            <div className="flex-1 flex flex-col justify-center">
              <div className='mb-60'>
                <h2 className='text-lg font-semibold '>{item.product_name}</h2>
                <h2 className='text-gray-600 '>Unit Price: ₹{item.price}</h2>

                <div className='flex items-center gap-2 my-3'>
                  <button onClick={increase} className='bg-amber-400 px-3 py-1 rounded text-white'>+</button>
                  <span className='font-semibold'>{count}</span>
                  <button onClick={decrease} className='bg-amber-400 px-3 py-1 rounded text-white'>-</button>
                </div>

                <h2 className='text-xl font-bold'>Total: ₹{totalAmount}</h2>
              </div>

              <div className="flex gap-2 mt-4">
                <Link
                  to="/purchase"
                  state={{
                    product: {
                      name: item.product_name,
                      price: item.price,
                      quantity: count,
                    },
                  }}
                >
                  <button className="bg-green-500 text-white px-4 py-2 rounded">
                    Buy Now
                  </button>
                </Link>
                <button
                  onClick={() => handleCart(item)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default CoupleFrame;
