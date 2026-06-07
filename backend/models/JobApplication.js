const mongoose = require('mongoose');

const jobApplicationSchema = new mongoose.Schema({
  name:        { type: String, required: true, trim: true },
  email:       { type: String, required: true, trim: true, lowercase: true },
  phone:       { type: String, required: true },
  position:    { type: String, required: true },
  experience:  { type: String },
  resume:      { type: String },
  coverLetter: { type: String },
  portfolio:   { type: String },
  status:      { type: String, enum: ['pending','reviewing','interview','rejected','hired'], default: 'pending' },
}, { timestamps: true });

module.exports = mongoose.model('JobApplication', jobApplicationSchema);
