const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

// Route trả HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route trả JS
app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'script.js'));
});

// Route API config trả key
app.get('/config', (req, res) => {
    res.json({ windyKey: process.env.KEY });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
