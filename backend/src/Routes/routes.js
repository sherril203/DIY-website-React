const express = require('express');
const router = express.Router();
const userController = require('../Controllers/user.controller');
const query = require('../Controllers/feedback.controller');
const products = require('../Controllers/products.controllers');
const upload = require('../middleware/fileStorage');
// Post query
router.post('/postquery', query.postquery);
// get query
router.get('/getquery', query.getquery);
// Register
router.post('/userRegister', userController.UserRegisterController);
// Login
router.post('/userlogin', userController.UserLoginController);
// forgot password
router.post('/userlogin', userController.forgotpassword);
// Reset password
router.post('/reset', userController.Resetpassword);
// Product Routes
router.post('/productinfo', upload.single("imageUrl"), products.postproduct);
router.get('/getproducts', products.getproducts);
module.exports = router;
