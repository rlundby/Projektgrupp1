const route = require('express').Router();
const solditems = require('../controllers/solditemsController');

// Get sold items
route.get('/', solditems.getSoldItems);

//Unsecred routes

module.exports = route;
