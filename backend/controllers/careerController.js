const JobApplication = require('../models/JobApplication');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = 'uploads/resumes';
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, `resume_${Date.now()}${path.extname(file.originalname)}`);
  }
});

const fileFilter = (req, file, cb) => {
  const allowed = ['.pdf', '.doc', '.docx'];
  allowed.includes(path.extname(file.originalname).toLowerCase())
    ? cb(null, true)
    : cb(new Error('Only PDF/DOC/DOCX files allowed'), false);
};

exports.upload = multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024 } });

exports.submitApplication = async (req, res) => {
  try {
    const { name, email, phone, position, experience, coverLetter, portfolio } = req.body;
    if (!name || !email || !phone || !position)
      return res.status(400).json({ success: false, message: 'Name, email, phone and position are required.' });
    const data = { name, email, phone, position, experience, coverLetter, portfolio };
    if (req.file) data.resume = req.file.path;
    const app = await JobApplication.create(data);
    res.status(201).json({ success: true, message: 'Application submitted! We will be in touch within 3–5 business days.', id: app._id });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};

exports.getApplications = async (req, res) => {
  try {
    const apps = await JobApplication.find().sort({ createdAt: -1 });
    res.json({ success: true, count: apps.length, data: apps });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};
