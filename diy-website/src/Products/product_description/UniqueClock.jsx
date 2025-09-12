import React, { useState } from 'react';
import unique from '../../assets/clock/unique clock- the perfect holiday gift.jpg';
import Navigate from '../../common/Navigate';
import Footer from '../../common/Footer';
import { Link } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UniqueClock = () => {
  const product = [
    { product: unique, product_name: "Unique Clock - The Perfect Holiday Gift", price: 200 }
  ];

  const [count, setCount] = useState(1);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count > 1 ? count - 1 : 1);

  const totalAmount = product[0].price * count;

  const handleAddToCart = () => {
    const cartItem = {
      name: product[0].product_name,
      price: product[0].price,
      quantity: count,
      total: totalAmount,
      image: product[0].product,
    };

    // Get existing cart (or empty array)
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

    // Possibly check if item already in cart → update quantity
    const index = existingCart.findIndex(item => item.name === cartItem.name);
    if (index !== -1) {
      // Update existing
      existingCart[index].quantity += cartItem.quantity;
      existingCart[index].total = existingCart[index].price * existingCart[index].quantity;
    } else {
      existingCart.push(cartItem);
    }

    localStorage.setItem('cart', JSON.stringify(existingCart));

    toast.success('Item added to cart!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  return (
    <div className='bg-rose-50'>
      <Navigate />
      <div className='p-6'>
        {product.map((item, index) => (
          <div key={index} className='bg-white shadow p-6 rounded max-w-sm mx-auto'>
            <img src={item.product} alt={item.product_name} className='w-full h-auto' />
            <h2 className='text-lg font-semibold mt-2'>{item.product_name}</h2>
            <h2 className='text-gray-600'>Unit Price: ₹{item.price}</h2>

            <div className='flex items-center gap-2 my-3'>
              <button onClick={increase} className='bg-amber-400 px-3 py-1 rounded text-white'>+</button>
              <span className='font-semibold'>{count}</span>
              <button onClick={decrease} className='bg-amber-400 px-3 py-1 rounded text-white'>-</button>
            </div>

            <h2 className='text-xl font-bold'>Total: ₹{totalAmount}</h2>

            <div className='flex gap-2 mt-4'>
              <Link
                to="/purchase"
                state={{
                  product: {
                    name: item.product_name,
                    price: item.price,
                    quantity: count,
                  }
                }}
              >
                <button className='bg-green-500 text-white px-4 py-2 rounded'>Buy Now</button>
              </Link>

              <button
                className='bg-blue-500 text-white px-4 py-2 rounded'
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default UniqueClock;
