const Newsletter = require('../models/Newsletter');

exports.subscribe = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ success: false, message: 'Email required.' });
    const existing = await Newsletter.findOne({ email });
    if (existing) return res.json({ success: true, message: 'You are already subscribed!' });
    await Newsletter.create({ email });
    res.status(201).json({ success: true, message: 'Subscribed successfully!' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};
