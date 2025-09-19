const mongoose=require('mongoose')
const OrderSchema=new mongoose.Schema({
    product_name:{type:String},
    quantity:{type:String},
    product_price:{type:Number},
    customer_name:{type:String},
    mobile_no:{type:String},
    address:{type:String},
    payment_mode:{type:String}
})
const OrderModel=mongoose.model('Order',OrderSchema)
module.exports=OrderModel
// const mongoose = require("mongoose");

// const OrderSchema = new mongoose.Schema(
//   {
//     product_name: { type: String, required: true },
//     quantity: { type: Number, required: true },
//     product_price: { type: Number, required: true },
//     customer_name: { type: String, required: true },
//     customer_email: { type: String, required: true },
//     mobile_no: { type: String, required: true },
//     address: { type: String, required: true },
//     payment_mode: { type: String, enum: ["COD", "Online"], required: true },

//     // Razorpay details
//     razorpay_order_id: { type: String },
//     razorpay_payment_id: { type: String },
//     razorpay_signature: { type: String },

//     status: {
//       type: String,
//       enum: ["Pending", "Paid", "Failed"],
//       default: "Pending",
//     },
//   },
//   { timestamps: true }
// );

// const OrderModel = mongoose.model("Order", OrderSchema);
// module.exports = OrderModel;
