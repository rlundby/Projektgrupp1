const route = require('express').Router();
const userAction = require('../controllers/userController');

route.post('/', userAction.addUserAction);

module.exports = route;