const tokengenerator = require('../middleware/Auth');
const SignModel = require('../model/Signup.model');
const bcrypt = require('bcrypt');

// Register
const UserRegisterController = async (req, res) => {
  try {
    const userData = req.body;
    const existData = await SignModel.findOne({ email: userData.email });
    if (existData) {
      return res.status(400).send({ message: "Email is already registered" });
    }
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;
    const savedUser = new SignModel(userData)
    await savedUser.save();

    return res.status(201).send({ message: "User registered successfully" });

  } catch (err) {
    return res.status(500).send({ message: "Signup failed", error: err.message });
  }
};

// Login
const UserLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existData = await SignModel.findOne({ email });
    if (!existData) {
      return res.status(404).send({ message: "You are not registered" });
    }

    const matchedPassword = await bcrypt.compare(password, existData.password);
    if (!matchedPassword) {
      return res.status(401).send({ message: "Invalid password" });
    }

    const token = tokengenerator(existData._id);

    return res.status(200).send({
      message: "User login successfully",
      data: {
        token,
        user: {
          id: existData._id,
          username: existData.username,
          email: existData.email
        }
      }
    });

  } catch (err) {
    return res.status(500).send({ message: "Login failed", error: err.message });
  }
};

module.exports = { UserLoginController, UserRegisterController };
