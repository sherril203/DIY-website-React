const mongoose = require('mongoose');

// Product Schema
const productSomeSchema = new mongoose.Schema({
  product_img: { type: String },
    product_name: { type: String },
    product_price: { type: String },
    path:{type:String}
});

const Product = mongoose.model('ProductSome', productSomeSchema);
module.exports = Product;
