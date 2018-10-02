const route = require('express').Router();
const wallet = require('../controllers/userWalletController');
const checkAuth = require('../auth/check-auth');

// Get the latest transactions
route.get('/:id', checkAuth, wallet.getUserWallet);

//Unsecred routes

module.exports = route;
