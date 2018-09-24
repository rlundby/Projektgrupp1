const route = require('express').Router();
const earnings = require('../controllers/getYearlyEarningsTotalController');

// Get sum of all products
route.get('/', earnings.getYearlyEarningsTotal);

module.exports = route;