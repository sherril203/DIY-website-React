const mongoose=require('mongoose')
const SignupSchema= new mongoose.Schema({
    Username:{type:String,required:true},
    Email:{type:String,required:true},
    Password:{type:String,required:true}
})
const SignupModel=mongoose.model('Signup',SignupSchema)
module.exports=SignupModel