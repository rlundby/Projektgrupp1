const route = require('express').Router();
const earnings = require('../controllers/yearlyEarningsController');

// Get sum of all products
route.get('/', earnings.getYearlyEarnings);

module.exports = route;