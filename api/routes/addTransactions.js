const route = require('express').Router();
const transactions = require('../controllers/addTransactionsController');

// Get the latest transactions
route.post('/', transactions.addTransaction);

//Unsecred routes

module.exports = route;
