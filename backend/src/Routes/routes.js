// const express=require('express')
// const router=express.Router()
// const userLogin=require('../Controllers/user.controller')
// const app=router
// const query=require('../Controllers/feedback.controller')
// //post query
// app.post('/postquery',query.postquery)
// //register
// app.post('/userlogin',userLogin.UserRegisterController)
// //login
// app.post('/userlogin',userLogin.UserLoginController)

// module.exports={router}
// router.js
const express = require('express');
const router = express.Router();
const userController = require('../Controllers/user.controller');
const query = require('../Controllers/feedback.controller');
// Post query
router.post('/postquery', query.postquery);
// Post query
router.get('/getquery', query.getquery);
// Register
router.post('/userregister', userController.UserRegisterController);
// Login
router.post('/userlogin', userController.UserLoginController);

module.exports = router;
