const mongoose = require('mongoose');
const server = require('../src/app'); // assuming app exports your Express app
require('dotenv').config();

let isConnected = false;

module.exports = async (req, res) => {
  if (!isConnected) {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      isConnected = true;
      console.log("MongoDB connected");
    } catch (err) {
      console.error("MongoDB connection error:", err);
      res.status(500).send("Database connection error");
      return;
    }
  }

  server(req, res); // Express handles the request
};
