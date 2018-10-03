const route = require('express').Router();
const checkAuth = require('../auth/check-auth');
const messages = require('../controllers/messagesController.js');



route.get('/', checkAuth, messages.getLatestMessages);




module.exports = route;