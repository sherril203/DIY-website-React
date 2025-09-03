const express = require('express');
const router = express.Router();
const userController = require('../Controllers/user.controller');
const query = require('../Controllers/feedback.controller');
// Post query
router.post('/postquery', query.postquery);
// Post query
router.get('/getquery', query.getquery);
// Register
router.post('/userRegister', userController.UserRegisterController);
// Login
router.post('/userlogin', userController.UserLoginController);

module.exports = router;
