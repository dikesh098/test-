const express = require('express');
const r = express.Router();
const { submitApplication, getApplications, upload } = require('../controllers/careerController');
r.post('/', upload.single('resume'), submitApplication);
r.get('/', getApplications);
module.exports = r;
