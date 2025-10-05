const express = require('express');
const router = express.Router();
const userController = require('../Controllers/user.controller');
const query = require('../Controllers/feedback.controller');
const products = require('../Controllers/products.controllers');
const purchase=require('../Controllers/Purchase.controllers')
const orders=require('../Controllers/Orders.controllers')
const product=require('../Controllers/productHome.controller')
const upload = require('../middleware/fileStorage');
const admin=require('../Controllers/Admin.controllers')
const { authMiddleware } = require('../middleware/Auth');
const cartController = require('../Controllers/Cart.controllers');
// Post query and  get query
router.post('/postquery', query.postquery);
router.get('/getquery', query.getquery);
// Register and Login for user
router.post('/userRegister', userController.UserRegisterController);
router.post('/userlogin', userController.UserLoginController);
router.put("/user/:id",userController.updateUserProfile);
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
router.delete('/getorders/:orderId',orders.CancelOrder) //cancel the order
//razorpay
//router.post("/payment/verify", verifyPayment);
//Admin login and Register
router.post('/adminRegister', admin.AdminRegisterController);
router.post('/adminlogin', admin.AdminLoginController);
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
router.post('/category/kids', upload.single('product_img'), products.postCategory);
router.get('/getcategory/kids', products.getcategory);
//clock
router.post('/category/clock', upload.single('product_img'), products.postCategory);
router.get('/getcategory/clock', products.getcategory);
//geometric decor
router.post('/category/geometric_decor', upload.single('product_img'), products.postCategory);
router.get('/getcategory/geometric_decor', products.getcategory);
//photo frames
router.post('/category/photo_frames', upload.single('product_img'), products.postCategory);
router.get('/getcategory/photo_frames', products.getcategory);
//product display in home page
router.post('/postsome',upload.single('product_img'),product.postSomeProduct)
router.get('/getsome',product.getSomeProduct)
//cart
router.post('/cart/add', cartController.addToCart);
router.get('/cart/get', cartController.getCartItems);
router.delete('/cart/remove/:id', cartController.removeCartItem);
router.delete('/cart/clear', cartController.clearCart);
module.exports = router;
