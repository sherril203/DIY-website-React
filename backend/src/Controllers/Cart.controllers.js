// controllers/cartController.js
const CartModel = require('../model/Cart.model');

const addToCart = async (req, res) => {
  const { image, product_name, quantity, price } = req.body;

  // Validate inputs
  if (!image || !product_name || !price || !quantity) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (isNaN(quantity) || quantity <= 0) {
    return res.status(400).json({ message: "Invalid quantity" });
  }

  if (isNaN(price) || price <= 0) {
    return res.status(400).json({ message: "Invalid price" });
  }

  try {
    let existing = await CartModel.findOne({ product_name });

    if (existing) {
      existing.quantity += quantity;
      await existing.save();
      return res.status(200).json({ message: "Quantity updated", item: existing });
    }

    const newItem = new CartModel({
      image,
      product_name,
      quantity,
      price,
    });

    await newItem.save();
    res.status(201).json({ message: "Product added", item: newItem });

  } catch (error) {
    res.status(500).json({ message: "Error adding to cart", error: error.message });
  }
};



const getCartItems = async (req, res) => {
  try {
    const items = await CartModel.find();
    res.status(200).json({ data: items });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch cart", error: error.message });
  }
};

// Delete a single item from the cart
const removeCartItem = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await CartModel.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json({ message: "Item removed from cart", item: deleted });
  } catch (error) {
    res.status(500).json({ message: "Failed to remove item", error: error.message });
  }
};
const clearCart = async (req, res) => { 
  try { await CartModel.deleteMany({}); 
  res.status(200).json({ message: "Cart cleared" }); 
} 
catch (error) 
{ 
  res.status(500).json({ message: "Failed to clear cart", error: error.message }); 
} 
};

module.exports = {
  addToCart,
  getCartItems,
 removeCartItem,
  clearCart 
};