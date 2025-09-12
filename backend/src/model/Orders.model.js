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