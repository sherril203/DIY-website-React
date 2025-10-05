const mongoose=require('mongoose')
const CartSchema=new mongoose.Schema({
    image:{type:String},
    product_name:{type:String},
    quantity :{type:Number,default: 1},
    price:{type:Number}
})
const CartModel=mongoose.model('cart',CartSchema)
module.exports=CartModel