const express = require('express');
const r = express.Router();
const c = require('../controllers/contactController');
r.post('/', c.submitContact);
r.get('/', c.getContacts);
module.exports = r;
