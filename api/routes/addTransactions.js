const route = require('express').Router();
const transactions = require('../controllers/addTransactionsController');

// Post a new transaction. This option is not live on the site.
route.post('/', transactions.addTransaction);

//Unsecred routes

module.exports = route;
