const route = require('express').Router();
const yearlyGraphController = require('../controllers/yearlyGraphController');

route.get('/', yearlyGraphController.getYearlyGraph);

module.exports = route ;