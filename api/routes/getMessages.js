const route = require('express').Router();

const messages = require('../controllers/messagesController.js');



route.get('/', messages.getLatestMessages);




module.exports = route;