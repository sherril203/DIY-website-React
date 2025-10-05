
// import React, { useContext } from "react";
// import Footer from "../../common/Footer";
// import UserNav from "../Userpage/UserNav";
// import { CartContext } from "../Cart/CartContext";

// const Cart = () => {
//   const {cart, removeFromCart}=useContext(CartContext)
//   const handleDelete = (name, e) => {
//   e.preventDefault();
//   removeFromCart(name);
// };
//   return (
//      <div className="bg-stone-100 mt-17 min-h-screen">
//       <UserNav />
//       <h2 className="text-center font-bold text-3xl text-stone-700 p-5">Cart</h2>

//       <div className="max-w-2xl mx-auto bg-white p-5 mb-110 rounded shadow">
//        {cart.length === 0 ? (
//   <p className="text-center text-stone-700">Your cart is empty</p>
// ) : (
//   <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//     {cart.map((item, index) => (
//       <div
//         key={index}
//         className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center"
//       >
//         <img
//           src={item.image}
//           alt={item.name}
//           className="w-32 h-32 object-cover rounded-lg mb-3"
//         />
//         <h3 className="font-semibold text-lg">{item.name}</h3>
//         <p className="text-gray-600">Price: ₹{item.price}</p>
//         <p className="text-gray-600">Qty: {item.quantity}</p>
//         <button
//           onClick={(e) => handleDelete(item.name, e)}
//           className="bg-red-500 text-white px-4 py-2 mt-3 rounded-lg hover:bg-red-600"
//         >
//           Remove
//         </button>
//       </div>
//     ))}
//   </div>
// )}
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Cart;
// Cart.jsx
// import React, { useContext } from "react";
// import Footer from "../../common/Footer";
// import UserNav from "../Userpage/UserNav";
// import { CartContext } from "../Cart/CartContext";
// import { toast, ToastContainer } from "react-toastify";
// import { Link } from "react-router";

// const Cart = () => {
//   const { cart, setcart } = useContext(CartContext);

//   const handleDelete = (name) => {
//     setcart(cart.filter((item) => item.name !== name));
//     toast.success("Item removed from cart");
//   };

//   return (
//     <div className="bg-stone-100 mt-16 min-h-screen">
//       <ToastContainer/>
//       <UserNav />
//       <h2 className="text-center font-bold text-3xl text-stone-700 p-5">Cart</h2>

//       <div className="max-w-2xl mx-auto bg-white p-5 mb-28 rounded shadow">
//         {cart.length === 0 ? (
//           <p className="text-center text-stone-700">Your cart is empty</p>
//         ) : (
//           <>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//               {cart.map((item, index) => (
//                 <div
//                   key={index}
//                   className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center"
//                 > <Link to={item.path}>
//                 <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-32 h-32 object-cover rounded-lg mb-3"
//                   />
//                 </Link>
//                   <Link to={item.path}><h3 className="font-semibold text-lg">{item.name}</h3></Link>
                  
//                   <p className="text-gray-600">Price: ₹{item.price}</p>
//                   <p className="text-gray-600">Qty: {item.quantity}</p>
//                   <button
//                     type="button"
//                     onClick={() => handleDelete(item.name)}
//                     className="bg-red-500 text-white px-4 py-2 mt-3 rounded-lg hover:bg-red-600"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               ))}
//             </div>

//             {/* Total Price */}
//             <div className="text-right mt-6 font-bold text-xl text-stone-700">
//               Total: ₹{cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
//             </div>
//           </>
//         )}
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Cart;
// import React, { useContext } from "react";
// import Footer from "../../common/Footer";
// import UserNav from "../Userpage/UserNav";
// import { CartContext } from "../Cart/CartContext";
// import { toast, ToastContainer } from "react-toastify";
// import { Link } from "react-router"; 

// const Cart = () => {
//   const { cart, setcart } = useContext(CartContext);

//   const handleDelete = (productName) => {
//     setcart(cart.filter((item) => item.product_name !== productName)); // ✅ Fixed
//     toast.success("Item removed from cart");
//   };

//   const totalPrice = cart.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   return (
//     <div className="bg-stone-100 mt-16 min-h-screen">
//       <ToastContainer />
//       <UserNav />
//       <h2 className="text-center font-bold text-3xl text-stone-700 p-5">Cart</h2>

//       <div className="max-w-2xl mx-auto bg-white p-5 mb-28 rounded shadow">
//         {cart.length === 0 ? (
//           <p className="text-center text-stone-700">Your cart is empty</p>
//         ) : (
//           <>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//               {cart.map((item, index) => (
//                 <div
//                   key={index}
//                   className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center"
//                 >
//                   <Link to={item.path}>
//                     <img
//                       src={item.image}
//                       alt={item.product_name}
//                       className="w-32 h-32 object-cover rounded-lg mb-3"
//                     />
//                   </Link>
//                   <Link to={item.path}>
//                     <h3 className="font-semibold text-lg">{item.product_name}</h3>
//                   </Link>

//                   <p className="text-gray-600">Price: ₹{item.price}</p>
//                   <p className="text-gray-600">Qty: {item.quantity}</p>
//                   <button
//                     type="button"
//                     onClick={() => handleDelete(item.product_name)}
//                     className="bg-red-500 text-white px-4 py-2 mt-3 rounded-lg hover:bg-red-600"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               ))}
//             </div>

//             {/* Total Price */}
//             <div className="text-right mt-6 font-bold text-xl text-stone-700">
//               Total: ₹{totalPrice}
//             </div>
//           </>
//         )}
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Cart;
import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../common/Footer";
import UserNav from "../Userpage/UserNav";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom"; // ✅ Correct import
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCart = async () => {
    try {
      const response = await axios.get("http://localhost:5000/cart/get");
      const items = Array.isArray(response?.data?.data) ? response.data.data : [];
      setCart(items);
    } catch (error) {
      console.error("Error fetching cart:", error.message);
      toast.error("Failed to load cart items");
    } finally {
      setLoading(false);
    }
  };

  const clearCart = async () => {
    if (!window.confirm("Are you sure you want to clear the entire cart?")) return;

    try {
      await axios.delete("http://localhost:5000/cart/clear");
      toast.success("Cart cleared successfully");
      setCart([]);
    } catch (error) {
      console.error("Error clearing cart:", error.message);
      toast.error("Failed to clear cart");
    }
  };

  const removeItem = async (id) => {
    if (!window.confirm("Remove this item from cart?")) return;

    try {
      await axios.delete(`http://localhost:5000/cart/remove/${id}`);
      toast.success("Item removed");
      setCart((prevCart) => prevCart.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error removing item:", error.message);
      toast.error("Failed to remove item");
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const totalPrice = cart.reduce((acc, item) => {
    const itemTotal = Number(item.price) * Number(item.quantity);
    return isNaN(itemTotal) ? acc : acc + itemTotal;
  }, 0);

  return (
    <div className="bg-stone-100 min-h-screen">
      <ToastContainer />
      <UserNav />
      <h2 className="text-center font-bold text-3xl text-stone-700 p-5 mt-20">Cart</h2>

      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : (
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 mb-10">
          {cart.length === 0 ? (
            <div className="col-span-full text-center">
              <p className="text-gray-500">Your cart is empty.</p>
              <Link to="/products">
                <button className="mt-4 p-2 bg-amber-600 text-white rounded hover:bg-amber-400">
                  Continue Shopping
                </button>
              </Link>
            </div>
          ) : (
            cart.map((item, index) => (
              <div
                key={item._id || index}
                className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition flex flex-col items-center"
              >
                <img
                  src={item.image.startsWith("http") ? item.image : `http://localhost:5000/files/${item.image}`}
                  alt={item.product_name}
                  className="w-64 h-64 object-contain rounded mb-3"
                />

                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                  {item.product_name}
                </h3>

                <p className="text-gray-600">
                  <strong>Price:</strong> ₹{item.price}
                </p>
                <p className="text-gray-600">
                  <strong>Quantity:</strong> {item.quantity}
                </p>

                <button
                  onClick={() => removeItem(item._id)}
                  className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      )}

      {cart.length > 0 && (
        <div className="max-w-4xl mx-auto mb-20 px-4">
          <div className="bg-white rounded-lg p-5 shadow-md text-right">
            <p className="text-xl font-bold text-stone-700">
              Total: ₹{totalPrice}
            </p>

            <div className="mt-4 flex justify-end gap-4">
              <button
                onClick={clearCart}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Clear Cart
              </button>

              {/* <Link to="/purchase" state={{ cart }}>
                <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                  Proceed to Checkout
                </button>
              </Link> */}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Cart;
