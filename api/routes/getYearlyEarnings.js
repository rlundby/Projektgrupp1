const route = require('express').Router();
const earnings = require('../controllers/yearlyEarningsController');
const checkAuth = require('../auth/check-auth');

route.get('/', checkAuth, earnings.getYearlyEarnings);

module.exports = route;