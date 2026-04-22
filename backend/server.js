const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const Contact = require('./models/Contact');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected! ✅'))
  .catch((err) => console.log('MongoDB Error:', err));

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio Backend is running! 🔥' });
});

// Contact form route
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log('Received:', req.body);
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.json({ success: true, message: 'Message saved successfully! ✅' });
  } catch (error) {
    console.log('Error:', error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});