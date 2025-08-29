const mongoose = require('mongoose');
const server = require('./app'); // import app.js
require('dotenv').config();

const mongodb_uri = process.env.MONGODB_URI;
const port = process.env.PORT;

console.log('MongoDB URI:', mongodb_uri);

mongoose.connect(mongodb_uri)
  .then(() => {
    server.listen(port, () => {
      console.log(`✅ Server running on http://localhost:${port}`);
      console.log("✅ MongoDB connected");
    });
  })
  .catch((err) => {
    console.error(" MongoDB connection error:", err);
  });
