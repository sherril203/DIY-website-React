const tokengenerator = require('../middleware/Auth');
const AdminModel=require('../model/Admin.model')
const bcrypt = require('bcrypt');
// Register for admin
const AdminRegisterController = async (req, res) => {
  try {
    const adminData = req.body;

    // check if email already exists
    const existData = await AdminModel.findOne({ email: adminData.email });
    if (existData) {
      return res.status(400).send({ message: "Email is already registered" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(adminData.password, 10);
    adminData.password = hashedPassword;

    // save new admin
    const savedUser = new AdminModel(adminData);
    await savedUser.save();

    return res.status(201).send({ message: "Admin registered successfully" });

  } catch (err) {
    return res.status(500).send({ message: "Signup failed", error: err.message });
  }
};


// Login for admin
const AdminLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existData = await AdminModel.findOne({ email });
    if (!existData) {
      return res.status(404).send({ message: "Admin not registered" });
    }

    const matchedPassword = await bcrypt.compare(password, existData.password);
    if (!matchedPassword) {
      return res.status(401).send({ message: "Invalid password" });
    }

    const token = tokengenerator(existData._id);

    return res.status(200).send({
      message: "Login successful",
      data: {
        token,
        admin: {
          id: existData._id,
          username: existData.username,
          email: existData.email,
        },
      },
    });

  } catch (err) {
    return res.status(500).send({ message: "Login failed", error: err.message });
  }
};

module.exports = {  
  AdminLoginController,AdminRegisterController
};
