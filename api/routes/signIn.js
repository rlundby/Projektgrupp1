const express = require('express');
const route = express.Router();
const user = require('../controllers/signInController');

route.post('/', user.signIn);

module.exports = route;