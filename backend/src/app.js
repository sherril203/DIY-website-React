// const express = require('express');
// const http = require('http');
// const cors = require('cors');
// const router = require('./Routes/routes');

// const app = express();

// app.use(cors({
//   origin: "http://localhost:5173" 
// }));
// app.use(express.json());
// app.use(router);

// const server = http.createServer(app);

// module.exports = server;
// app.js
const express = require('express');
const http = require('http');
const cors = require('cors');
const router = require('./Routes/routes'); 
const app = express();
app.use(cors({
  origin: "http://localhost:5173" 
}));
app.use(express.json());
app.use(router);

const server = http.createServer(app);

module.exports = server;
