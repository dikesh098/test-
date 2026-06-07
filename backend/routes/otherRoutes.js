const express = require('express');
const r1 = express.Router();
const r2 = express.Router();
const { chat } = require('../controllers/chatbotController');
const { subscribe } = require('../controllers/newsletterController');
r1.post('/', chat);
r2.post('/', subscribe);
module.exports = { chatbotRoutes: r1, newsletterRoutes: r2 };
