const route = require('express').Router();
const transactions = require('../controllers/transactionsController');

// Get the latest transactions
route.get('/', transactions.getLatestTransactions);

//Unsecred routes

module.exports = route;
