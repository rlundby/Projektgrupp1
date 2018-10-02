const route = require('express').Router();
const yearlyGraphController = require('../controllers/yearlyGraphController');
const checkAuth = require('../auth/check-auth');

route.get('/', checkAuth, yearlyGraphController.getYearlyGraph);

module.exports = route ;