const tokengenerator = require('../middleware/Auth');
const SignModel = require('../model/Signup.model');
const bcrypt = require('bcrypt');

// Register for user
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

// Login for user
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
// Forgot Password - simplified version (no OTP)
const forgotpassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: 'Email is required.' });
    }
    const user = await SignModel.findOne({ email });

    if (!user) {
      return res.status(200).json({ message: 'If that email exists, we sent instructions.' });
    }

    console.log(`Password reset requested for: ${email}`);
    // await mail(email); // Optional: send actual reset email

    return res.status(200).json({ message: 'Password reset instructions sent to your email.' });

  } catch (err) {
    console.error('Forgot password error:', err);
    return res.status(500).json({ message: 'Server error.' });
  }
};

// Reset Password 
const Resetpassword = async (req, res) => {
  try {
    const { email, Newpassword } = req.body;

    if (!email || !Newpassword) {
      return res.status(400).json({ message: 'Email and new password are required.' });
    }

    const user = await SignModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    const hashedPassword = await bcrypt.hash(Newpassword, 10);
    user.password = hashedPassword;

    // Remove any previous OTP fields if they exist
    user.otp = undefined;
    user.otpExpiry = undefined;

    await user.save();

    return res.status(200).json({ message: 'Password reset successful.' });

  } catch (err) {
    console.error('Reset password error:', err);
    return res.status(500).json({ message: 'Server error.' });
  }
};


// Get User Profile
// const getUserProfile = async (req, res) => {
//   try {
//     // req.userId comes from middleware (after token verification)
//     const user = await SignModel.findById(req.userId).select("-password");
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     return res.status(200).json(user);
//   } catch (err) {
//     return res.status(500).json({ message: "Server error", error: err.message });
//   }
// };




module.exports = { UserLoginController, UserRegisterController,forgotpassword,Resetpassword, 
};
