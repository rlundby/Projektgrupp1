const route = require('express').Router();
const transactions = require('../controllers/updateTransactionController');

// Get the latest transactions
route.put('/:id', transactions.updateTransaction);

//Unsecred routes

module.exports = route;
