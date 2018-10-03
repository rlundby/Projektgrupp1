const route = require('express').Router();
const solditems = require('../controllers/solditemsController');

// Get the latest transactions
route.get('/', solditems.getSoldItems);

//Unsecred routes

module.exports = route;
