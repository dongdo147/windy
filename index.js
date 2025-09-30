require('dotenv').config();
const express = require('express');
const app = express();

// Nếu chỉ chạy serverless function trên Vercel, index.js có thể rất đơn giản
// Hoặc có thể để trống, tùy project. 

module.exports = app;
