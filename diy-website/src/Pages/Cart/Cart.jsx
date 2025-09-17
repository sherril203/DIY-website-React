import React, { useContext } from "react";
import Footer from "../../common/Footer";
import UserNav from "../Userpage/UserNav";
import { CartContext } from "../Cart/CartContext";

const Cart = () => {
  const {cart, removeFromCart}=useContext(CartContext)
  
  return (
     <div className="bg-rose-100 mt-17 min-h-screen">
      <UserNav />
      <h2 className="text-center font-bold text-3xl text-red-600 p-5">Cart</h2>

      <div className="max-w-2xl mx-auto bg-white p-5 mb-110 rounded shadow">
       {cart.length === 0 ? (
  <p className="text-center text-gray-500">Your cart is empty</p>
) : (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
    {cart.map((item, index) => (
      <div
        key={index}
        className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-32 h-32 object-cover rounded-lg mb-3"
        />
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <p className="text-gray-600">Price: ₹{item.price}</p>
        <p className="text-gray-600">Qty: {item.quantity}</p>
        <button
          onClick={() => removeFromCart(item.name)}
          className="bg-red-500 text-white px-4 py-2 mt-3 rounded-lg hover:bg-red-600"
        >
          Remove
        </button>
      </div>
    ))}
  </div>
)}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
