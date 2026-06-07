require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const rateLimit = require('express-rate-limit');
const connectDB = require('./config/db');
const { chatbotRoutes, newsletterRoutes } = require('./routes/otherRoutes');

const app = express();
connectDB();

app.use(cors({ origin: process.env.FRONTEND_URL || '*', credentials: true }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 200 }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API Routes
app.use('/api/contact',    require('./routes/contactRoutes'));
app.use('/api/careers',    require('./routes/careerRoutes'));
app.use('/api/payment',    require('./routes/paymentRoutes'));  // Razorpay
app.use('/api/chat',       rateLimit({ windowMs: 60000, max: 30 }), chatbotRoutes);
app.use('/api/newsletter', newsletterRoutes);

app.get('/api/health', (req, res) =>
  res.json({ status: 'OK', service: 'Esakha Digital Services API', version: '2.0.0', time: new Date().toISOString() })
);

app.use((err, req, res, next) =>
  res.status(500).json({ success: false, message: err.message || 'Internal server error' })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Esakha API running on http://localhost:${PORT}`));
