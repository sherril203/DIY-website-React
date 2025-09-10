const mongoose = require('mongoose');

const SignupSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Newpassword: { type: String, required: true }
});

const SignupModel = mongoose.model('Signup', SignupSchema);

module.exports = SignupModel;
