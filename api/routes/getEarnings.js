const route = require('express').Router();
const earnings = require('../controllers/earningsController');

// Get the latest transactions
route.get('/', earnings.getMonthlyEarnings);

//Unsecred routes

module.exports = route;
