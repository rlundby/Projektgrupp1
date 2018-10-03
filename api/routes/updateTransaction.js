const route = require('express').Router();
const transactions = require('../controllers/updateTransactionController');
const checkAuth = require('../auth/check-auth');

// Get the latest transactions
route.put('/:id', checkAuth, transactions.updateTransaction);

//Unsecred routes

module.exports = route;
