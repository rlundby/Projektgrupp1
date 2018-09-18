const route = require('express').Router();
const yearlyController = require('../controllers/yearlyController');

route.get('/', yearlyController.getYearly);

module.exports = route ;