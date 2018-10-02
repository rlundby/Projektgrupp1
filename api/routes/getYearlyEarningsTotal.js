const route = require('express').Router();
const earnings = require('../controllers/getYearlyEarningsTotalController');
const checkAuth = require('../auth/check-auth');

// Get sum of all products
route.get('/', checkAuth, earnings.getYearlyEarningsTotal);

module.exports = route;