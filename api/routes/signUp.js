const express = require('express');
const route = express.Router();
const user = require('../controllers/signUpController');

route.post('/', user.signup);

module.exports = route;