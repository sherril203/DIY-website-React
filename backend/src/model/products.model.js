const mongoose = require('mongoose');

// Product Schema
const productSchema = new mongoose.Schema({
  imageUrl: { type: String },
  product_name: { type: String },
  price: { type: Number },
  path: { type: String },
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
