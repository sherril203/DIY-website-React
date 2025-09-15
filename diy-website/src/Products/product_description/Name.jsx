import React, { useState } from 'react';
import name from '../../assets/cups/white_cup_with_customization.png';
import Navigate from '../../common/Navigate';
import Footer from '../../common/Footer';
import { Link } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { CartContext } from '../../Pages/Cart/CartContext';
const Name = () => {
  const {cart,setcart}=useContext(CartContext)
  const product = [
    { image: name, name: "Name Customization Cup", Price: 200 }
  ];

  const [count, setCount] = useState(1); 

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count > 1 ? count - 1 : 1);

  const totalAmount = product[0].Price * count;
//  const handleCart=(item)=>{
//   setcart([...cart,item])
//   toast.success('product added')
//  }
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
    <div className='  bg-rose-50'>
      <ToastContainer/>
        <Navigate/>
      <div className='p-23'>
        {product.map((item, index) => (
          <div key={index} className='bg-white shadow p-6 rounded max-w-sm mx-auto'>
            <img src={item.image} alt={item.name} className='w-full h-auto' />
            <h2 className='text-lg font-semibold mt-2'>{item.name}</h2>
            <h2 className='text-gray-600'>Unit Price: ₹{item.Price}</h2>
             <h2 className='text-gray-600'>Customizable</h2>
            <div className='flex items-center gap-2 my-3'>
              <button onClick={increase} className='bg-amber-400 px-3 py-1 rounded text-white'>+</button>
              <span className='font-semibold'>{count}</span>
              <button onClick={decrease} className='bg-amber-400 px-3 py-1 rounded text-white'>-</button>
            </div>

            <h2 className='text-xl font-bold'>Total: ₹{totalAmount}</h2>

            <div className='flex gap-2 mt-4'>
              <Link to="/purchase">
                <button className='bg-green-500 text-white px-4 py-2 rounded'>Buy Now</button>
              </Link>
              <button onClick={()=>handleCart(item)}
              className='bg-blue-500 text-white px-4 py-2 rounded'>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Name;
