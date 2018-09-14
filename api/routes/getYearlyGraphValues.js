const route = require('express').Router();
const yearlyGraphValues = require('../controllers/yearlyGraphValuesController');

// Get the GraphValues
route.get('/', yearlyGraphValues.getYearlyGraphValues);

//Unsecred routes

module.exports = route;
