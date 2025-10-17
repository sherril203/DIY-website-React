
// // app.js
// const express = require('express');
// const http = require('http');
// const cors = require('cors');
// const path=require('path')
// const router = require('./Routes/routes'); 
// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(router);
// app.use('/files', express.static(path.join(__dirname, 'products')))
// const server = http.createServer(app);
// app.get('/', (req, res) => {
//   res.send('API is working!');
// });
// module.exports = server;

const express = require('express');
const cors = require('cors');
const path = require('path');
const router = require('./Routes/routes');

const app = express();

app.use(cors({
  origin: 'https://artsworld.vercel.app', // Allow frontend domain
  credentials: true // If you're using cookies or auth headers
}));
app.use(express.json());
app.use(router);
app.use('/files', express.static(path.join(__dirname, 'products')));

// Root route
app.get('/', (req, res) => {
  res.send('API is working!');
});

module.exports = app;  // ✅ Export the Express app, not the server
