const jwt=require('jsonwebtoken')
require('dotenv').config();
const jwt_secret=process.env.jwt_secret
const tokengenerator=(id)=>{
    const token=jwt.sign({id:id},jwt_secret,{expiresIn:"1h"})
    return token
}
module.exports=tokengenerator
// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// const jwt_secret = process.env.jwt_secret;

// const tokengenerator = (id) => {
//   return jwt.sign({ id }, jwt_secret, { expiresIn: "1h" });
// };

// // Middleware to verify token
// const authMiddleware = (req, res, next) => {
//   const token = req.headers.authorization?.split(" ")[1]; // "Bearer <token>"

//   if (!token) {
//     return res.status(401).json({ message: "No token provided" });
//   }

//   try {
//     const decoded = jwt.verify(token, jwt_secret);
//     req.userId = decoded.id; // store user id for next handler
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: "Invalid or expired token" });
//   }
// };

// module.exports = { tokengenerator, authMiddleware };
