import React, { useContext } from "react";
import Footer from "../../common/Footer";
import UserNav from "../Userpage/UserNav";
import { CartContext } from "../Cart/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="bg-rose-100 mt-17 min-h-screen">
      <UserNav />
      <h2 className="text-center font-bold text-3xl text-red-600 p-5">Cart</h2>

      <div className="max-w-2xl mx-auto bg-white p-5 mb-110 rounded shadow">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty</p>
        ) : (
          cartItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b py-3"
            >
              <img src={item.image} alt={item.name} className="w-16 h-16 rounded" />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p>Price: ₹{item.price}</p>
                <p>Qty: {item.quantity}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.name)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
