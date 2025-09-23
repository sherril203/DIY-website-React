const express = require('express');
const router = express.Router();
const userController = require('../Controllers/user.controller');
const query = require('../Controllers/feedback.controller');
const products = require('../Controllers/products.controllers');
const purchase=require('../Controllers/Purchase.controllers')
const orders=require('../Controllers/Orders.controllers')
const { verifyPayment } = require('../Controllers/Payment.controllers')
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
// router.get('/getproducts/:id', products.getproductsById);
router.put('/updateproducts/:id', upload.single('product_img'), products.updateproducts);
router.delete('/deleteproducts/:id', products.deleteproducts);
//purchase routes
router.post('/purchase',purchase.PostPurchase)
router.get('/getpurchase',purchase.getPurchase)
//orders route
router.post('/orders',orders.postOrder)
router.get('/getorders',orders.getOrder)
//razorpay
//router.post("/payment/verify", verifyPayment);
//Admin login and Register
router.post('/adminRegister', userController.UserRegisterController);
router.post('/adminlogin', userController.UserLoginController);
//category
//bags
router.post('/category/bags', upload.single('product_img'), products.postCategory);
router.get('/getcategory/:category', products.getcategory);
//cups
router.post('/category/cups', upload.single('product_img'), products.postCategory);
router.get('/getcategory/cups', products.getcategory);
//phone case
router.post('/category/phone_case', upload.single('product_img'), products.postCategory);
router.get('/getcategory/phone_case', products.getcategory);
//kits
router.post('/category/kits', upload.single('product_img'), products.postCategory);
router.get('/getcategory/kits', products.getcategory);
//clock
router.post('/category/clock', upload.single('product_img'), products.postCategory);
router.get('/getcategory/clock', products.getcategory);
//geometric decor
router.post('/category/geometric_decor', upload.single('product_img'), products.postCategory);
router.get('/getcategory/geometric_decor', products.getcategory);
//photo frames
router.post('/category/photo_frames', upload.single('product_img'), products.postCategory);
router.get('/getcategory/photo_frames', products.getcategory);
module.exports = router;
