const express = require('express');
const router = express.Router();
const userController = require('../Controllers/user.controller');
const query = require('../Controllers/feedback.controller');
const category = require('../Controllers/Category.controllers');
const purchase=require('../Controllers/Purchase.controllers')
const orders=require('../Controllers/Orders.controllers')
const product=require('../Controllers/productHome.controller')
const products=require("../Controllers/products.controllers")
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
router.get('/getcategory', category.getcategory);
// router.get('/getcategory/:id', category.getcategoryById);
router.put('/updatecategory/:id', upload.single('product_img'), products.updateproducts);
router.delete('/deletecategory/:id', products.deleteproducts);
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
router.post('/category/bags', upload.single('product_img'), category.postCategory);
router.get('/getcategory/:category', category.getcategory);
//cups
router.post('/category/cups', upload.single('product_img'), category.postCategory);
router.get('/getcategory/cups', category.getcategory);
router.get('/getcategory/cups/:id', category.getproductsById);
//phone case
router.post('/category/phone_case', upload.single('product_img'), category.postCategory);
router.get('/getcategory/phone_case', category.getcategory);
router.get('/getcategory/phone_case/:id', category.getproductsById);
//kits
router.post('/category/kids', upload.single('product_img'), category.postCategory);
router.get('/getcategory/kids', category.getcategory);
router.get('/getcategory/kids/:id', category.getproductsById);
//clock
router.post('/category/clock', upload.single('product_img'), category.postCategory);
router.get('/getcategory/clock', category.getcategory);
router.get('/getcategory/clock/:id', category.getproductsById);
//geometric decor
router.post('/category/geometric_decor', upload.single('product_img'), category.postCategory);
router.get('/getcategory/geometric_decor', category.getcategory);
router.get('/getcategory/geometric_decor/:id', category.getproductsById);
//photo frames
router.post('/category/photo_frames', upload.single('product_img'), category.postCategory);
router.get('/getcategory/photo_frames', category.getcategory);
router.get('/getcategory/photo_frames/:id', category.getproductsById );
//product display in home page
router.post('/postsome',upload.single('product_img'),product.postSomeProduct)
router.get('/getsome',product.getSomeProduct)
router.get('/getsome/:category/:id',product.getProductById)
//cart
router.post('/cart/add', cartController.addToCart);
router.get('/cart/get', cartController.getCartItems);
router.delete('/cart/remove/:id', cartController.removeCartItem);
router.delete('/cart/clear', cartController.clearCart);
module.exports = router;
