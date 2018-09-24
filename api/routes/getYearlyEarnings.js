const route = require('express').Router();
const earnings = require('../controllers/yearlyEarningsController');

route.get('/', earnings.getYearlyEarnings);

module.exports = route;