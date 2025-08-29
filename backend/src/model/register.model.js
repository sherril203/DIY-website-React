const UserSchema=mongoose.Schema({
    username:{type:String},
    email:{type:String},
    password:{type:String}
})
const UserModel=mongoose.model('userdata',UserSchema)
module.exports=UserModel