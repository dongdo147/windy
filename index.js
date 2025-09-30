require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.static('public'));

// Trả config (ví dụ API key) cho client
app.get('/config', (req, res) => {
    res.json({ windyKey: process.env.KEY });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
