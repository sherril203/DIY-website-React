// controllers/cartController.js
// const CartModel = require('../model/Cart.model');

// const addToCart = async (req, res) => {
//   const { image, product_name, quantity, price } = req.body;

//   // Validate inputs
//   if (!image || !product_name || !price || !quantity) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   if (isNaN(quantity) || quantity <= 0) {
//     return res.status(400).json({ message: "Invalid quantity" });
//   }

//   if (isNaN(price) || price <= 0) {
//     return res.status(400).json({ message: "Invalid price" });
//   }

//   try {
//     let existing = await CartModel.findOne({ product_name });

//     if (existing) {
//       existing.quantity += quantity;
//       await existing.save();
//       return res.status(200).json({ message: "Quantity updated", item: existing });
//     }

//     const newItem = new CartModel({
//       image,
//       product_name,
//       quantity,
//       price,
//     });

//     await newItem.save();
//     res.status(201).json({ message: "Product added", item: newItem });

//   } catch (error) {
//     res.status(500).json({ message: "Error adding to cart", error: error.message });
//   }
// };



// const getCartItems = async (req, res) => {
//   try {
//     const items = await CartModel.find();
//     res.status(200).json({ data: items });
//   } catch (error) {
//     res.status(500).json({ message: "Failed to fetch cart", error: error.message });
//   }
// };

// // Delete a single item from the cart
// const removeCartItem = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const deleted = await CartModel.findByIdAndDelete(id);

//     if (!deleted) {
//       return res.status(404).json({ message: "Item not found" });
//     }

//     res.status(200).json({ message: "Item removed from cart", item: deleted });
//   } catch (error) {
//     res.status(500).json({ message: "Failed to remove item", error: error.message });
//   }
// };
// const clearCart = async (req, res) => { 
//   try { await CartModel.deleteMany({}); 
//   res.status(200).json({ message: "Cart cleared" }); 
// } 
// catch (error) 
// { 
//   res.status(500).json({ message: "Failed to clear cart", error: error.message }); 
// } 
// };

// module.exports = {
//   addToCart,
//   getCartItems,
//  removeCartItem,
//   clearCart 
// };
const CartModel = require('../model/Cart.model');

// Add to Cart
const addToCart = async (req, res) => {
  const { image, product_name, quantity, price, userId } = req.body;

  if (!image || !product_name || !price || !quantity || !userId) {
    return res.status(400).json({ message: "All fields are required" });
  }
  if (isNaN(quantity) || quantity <= 0) {
    return res.status(400).json({ message: "Invalid quantity" });
  }
  if (isNaN(price) || price <= 0) {
    return res.status(400).json({ message: "Invalid price" });
  }

  try {
    // Find existing cart item for this user + product
    let existing = await CartModel.findOne({ userId, product_name });
    if (existing) {
      existing.quantity += quantity;
      await existing.save();
      return res.status(200).json({ message: "Quantity updated", item: existing });
    }

    const newItem = new CartModel({
      userId,
      image,
      product_name,
      quantity,
      price
    });
    await newItem.save();
    return res.status(201).json({ message: "Product added", item: newItem });

  } catch (error) {
    // If duplicate key error (because of the unique compound index), handle gracefully
    if (error.code === 11000) {
      // fallback: just update quantity
      try {
        let existingAgain = await CartModel.findOne({ userId, product_name });
        if (existingAgain) {
          existingAgain.quantity += quantity;
          await existingAgain.save();
          return res.status(200).json({ message: "Quantity updated", item: existingAgain });
        }
      } catch (err2) {
        // ignore, then fall through
      }
    }
    console.error("Error in addToCart:", error);
    return res.status(500).json({ message: "Error adding to cart", error: error.message });
  }
};

// Get Cart Items (for a user)
const getCartItems = async (req, res) => {
  // Here we expect userId in query (or header, or from JWT)
  const { userId } = req.query;
  if (!userId) {
    return res.status(400).json({ message: "userId is required" });
  }

  try {
    // const items = await CartModel.find({ userId });
    const items = await CartModel.find({ userId })
      .populate("userId", "username email");
    return res.status(200).json({ data: items });
  } catch (error) {
    console.error("Error in getCartItems:", error);
    return res.status(500).json({ message: "Failed to fetch cart", error: error.message });
  }
};

// Remove a single item
const removeCartItem = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ message: "userId is required" });
  }

  try {
    const deleted = await CartModel.findOneAndDelete({ _id: id, userId });
    if (!deleted) {
      return res.status(404).json({ message: "Item not found or unauthorized" });
    }
    return res.status(200).json({ message: "Item removed from cart", item: deleted });
  } catch (error) {
    console.error("Error in removeCartItem:", error);
    return res.status(500).json({ message: "Failed to remove item", error: error.message });
  }
};

// Clear all items in a user's cart
const clearCart = async (req, res) => {
  const { userId } = req.body;
  if (!userId) {
    return res.status(400).json({ message: "userId is required" });
  }

  try {
    await CartModel.deleteMany({ userId });
    return res.status(200).json({ message: "Cart cleared" });
  } catch (error) {
    console.error("Error in clearCart:", error);
    return res.status(500).json({ message: "Failed to clear cart", error: error.message });
  }
};

module.exports = {
  addToCart,
  getCartItems,
  removeCartItem,
  clearCart
};
