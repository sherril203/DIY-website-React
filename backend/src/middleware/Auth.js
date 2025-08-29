const jwt=require('jsonwebtoken')
const tokengenerator=()=>{
    const token=jwt.sign({id:id},jwt_secret,{expiresIn:"1h"})
    return token
}
module.exports=tokengenerator