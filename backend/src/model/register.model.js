const mongoose =require('mongoose')
const UserSchema=new mongoose.Schema({
    username:{type:String},
    email:{type:String},
    password:{type:String}
})
const UserModel=mongoose.model('userdata',UserSchema)
module.exports=UserModel