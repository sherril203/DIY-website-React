// import React, { createContext, useState } from "react";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems((prev) => {
//       const existingItem = prev.find((item) => item.name === product.name);

//       if (existingItem) {
//         return prev.map((item) =>
//           item.name === product.name
//             ? { ...item, quantity: item.quantity + product.quantity }
//             : item
//         );
//       } else {
//         return [...prev, product];
//       }
//     });
//   };

//   const removeFromCart = (itemName) => {
//     setCartItems((prev) => prev.filter((item) => item.name !== itemName));
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
// CartContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.name === product.name);
      if (existing) {
        return prev.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: product.quantity || 1 }];
      }
    });
  };

  const removeFromCart = (name) => {
    setCartItems((prev) => prev.filter((item) => item.name !== name));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
