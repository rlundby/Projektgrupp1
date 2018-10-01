const route = require('express').Router();
const transactions = require('../controllers/transactionsController');
const checkAuth = require('../auth/check-auth');

// Get the latest transactions
route.get('/', checkAuth, transactions.getLatestTransactions);

//Unsecred routes

module.exports = route;
