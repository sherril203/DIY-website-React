// const mongoose=require('mongoose')
// const server=require('./app') //import app.js
// require('dotenv').config()
// const mongodb_uri=process.env.MONGODB_URI
// const port=process.env.PORT
// console.log('mongo',mongodb_uri)
// mongoose.connect(mongodb_uri).then(()=>{
//   server.listen(port,()=>{
//     console.log(`server is running on port ${port}`)
//   })
//   console.log("mongodb connected")
// }).catch((err)=>{
//   console.log("mongodb error",err)
// })
const mongoose = require('mongoose');
const server = require('./app');
require('dotenv').config();

const mongodb_uri = process.env.MONGODB_URI;
const port = process.env.PORT ;

if (!mongodb_uri) {
  console.error(" MONGODB_URI is not defined in .env");
}

mongoose.connect(mongodb_uri)
  .then(() => {
    console.log("MongoDB connected");
    server.listen(port, () => {
      console.log(` Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error(" MongoDB connection error:", err);
  });

