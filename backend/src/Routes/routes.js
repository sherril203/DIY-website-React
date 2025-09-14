const express = require('express');
const router = express.Router();
const userController = require('../Controllers/user.controller');
const query = require('../Controllers/feedback.controller');
const products = require('../Controllers/products.controllers');
const purchase=require('../Controllers/Purchase.controllers')
const orders=require('../Controllers/Orders.controllers')
const upload = require('../middleware/fileStorage');
// Post query and  get query
router.post('/postquery', query.postquery);
router.get('/getquery', query.getquery);
// Register and Login for user
router.post('/userRegister', userController.UserRegisterController);
router.post('/userlogin', userController.UserLoginController);
// forgot password
router.post('/userlogin', userController.forgotpassword);
// Reset password
router.post('/reset', userController.Resetpassword);
// Product Routes
router.post('/productinfo', upload.single('product_img'), products.postproduct);
router.get('/getproducts', products.getproducts);
router.put('/updateproducts/:id', upload.single('product_img'), products.updateproducts);
router.delete('/deleteproducts/:id', products.deleteproducts);
//purchase routes
router.post('/purchase',purchase.PostPurchase)
router.get('/getpurchase',purchase.getPurchase)
//orders route
// router.post('/orders',orders.PostOrder)
router.get('/getorders',orders.getOrder)
//Admin login and Register
router.post('/adminRegister', userController.UserRegisterController);
router.post('/adminlogin', userController.UserLoginController);
module.exports = router;
