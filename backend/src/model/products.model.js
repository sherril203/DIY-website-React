const mongoose = require('mongoose');

// Product Schema
const productSchema = new mongoose.Schema({
  product_img: { type: String },
  product_name: { type: String },
  quantity:{type:Number},
  product_price: { type: Number },
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
