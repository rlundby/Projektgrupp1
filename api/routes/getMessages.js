// const authorization = require('../auth/auth.js');
const route = require('express').Router();

const messages = require('../controllers/messagesController.js');



route.get('/', messages.getLatestMessages);
route.get('/:id', messages.getMessage);

// route.delete('/:id', authorization, messages.removeMessage);

module.exports = route;