const route = require('express').Router();
const earnings = require('../controllers/earningsController');
const checkAuth = require('../auth/check-auth');

// Get monthly earnings
route.get('/', checkAuth, earnings.getMonthlyEarnings);


module.exports = route;
