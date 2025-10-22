const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  image: { type: String, required: true },
  product_name: { type: String, required: true },
  quantity: { type: Number, default: 1 },
  description:{type:String},
  price: { type: Number, required: true },
    userId: {
  // type: mongoose.Schema.Types.ObjectId,
  // ref: "Signup",
  type:String,
  required: true
}
});

const CartModel = mongoose.model('cart', CartSchema);
module.exports = CartModel;
