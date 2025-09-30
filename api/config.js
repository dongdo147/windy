require('dotenv').config();

export default function handler(req, res) {
    res.status(200).json({ windyKey: process.env.WINDY_KEY });
}
