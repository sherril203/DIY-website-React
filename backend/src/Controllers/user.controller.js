const tokengenerator = require('../middleware/Auth')
const SignModel=require('../model/Signup.model')
const  bcrypt=require('bcrypt')
//register
const UserRegisterController=async(req,res)=>{
    try{
        const userData=req.body
    const existData= await SignModel.findOne({email:userData.email})
    if(existData){
        return res.status(400).send({message:"already registered email"})
    }
    const hashedpassword=await bcrypt.hash(userData.password,10)
    userData.password=hashedpassword
    const savedUser=await new LoginModel(userData).save()
    res.status(201).send({message:"user login successfully"})
    }
    catch(err){
        res.status(500).send({message:"invalid user data"})
    }
}
//login
const UserLoginController=async(req,res)=>{
    try{
        const {email,password}=req.body
      const existData=await SignModel.findOne({email:email})
      if(!existData){
         return res.status(404).send({message:"You are not registered"})
      }
      const matchedpassword = await bcrypt.compare(password,existData.password)
      if(!matchedpassword){
        return res.status(401).send({message:"invalid password"})
      }
      const token=tokengenerator(existData._id)
      res.status(200).send({message:"user Login successfuly",data:{token}})
    }
 catch(err){
     res.status(500).send({message:"invalid creditentials"})
 }
}
module.exports={UserLoginController,UserRegisterController}
