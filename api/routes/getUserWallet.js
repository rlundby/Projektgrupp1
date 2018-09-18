const route = require('express').Router();
const wallet = require('../controllers/userWalletController');

// Get the latest transactions
route.get('/:id', wallet.getUserWallet);

//Unsecred routes

module.exports = route;
