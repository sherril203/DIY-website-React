const tokengenerator = require('../middleware/Auth')
const registerUser=require('../model/register.model')
//register
const registerUser=async(req,res)=>{
    try{
    const userData=req.body
    const existingUser=await registerUser(userData).findOne({email:"sherrilkumar2003@gmail,com"})
    if(existingUser){
        return res.status(400).send({message:"user already registered"})
    }
    const hashpassword=await bcrypt.hash(userData.password,10)
    userData.password=hashpassword
    const saveduser=await  registerUser(userData).save()
    res.status(200).send({messge:"user registered successfully"},{data:saveduser})
}
catch(err){
    res.status(500).send({message:"invalid credential error"})
}
}
//login
const loginUser=async(req,res)=>{
    try{
    const {email,password}=req.body
    const existingUser=await registerUser.findOne({email:email})
    if(!existingUser){
        return res.status(404).send({message:"user not registered"})
    }
   const isMatchpassword=await bcrypt.compare(password,existingUser.password)
   if(!isMatchpassword){
    return res.status(404).send({message:"invalid password"})
   }
   const token=await tokengenerator(existingUser._id)
   res.status(200).send({message:"user login successfully"},{token:token})
}catch(err){   res.status(200).send({message:"invalid login credentials"})}
}
module.exports={registerUser,loginUser}