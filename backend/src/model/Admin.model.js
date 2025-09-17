const mongoose = require('mongoose');
const AdminSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role:{type:String, default:"admin"}
});
const AdminModel = mongoose.model('Admin', AdminSchema);
module.exports = AdminModel;
