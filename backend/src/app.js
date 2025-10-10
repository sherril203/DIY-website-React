
// app.js
const express = require('express');
const http = require('http');
const cors = require('cors');
const path=require('path')
const router = require('./Routes/routes'); 
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use('/files', express.static(path.join(__dirname, 'products')))
const server = http.createServer(app);

module.exports = server;
