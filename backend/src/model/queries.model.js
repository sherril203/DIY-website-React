const mongoose=require('mongoose')
const FeedSchema= new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    message:{type:String}
})
const FeedModel=mongoose.model('Feedback',FeedSchema)
module.exports=FeedModel