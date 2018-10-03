const route = require('express').Router();
const orders = require('../controllers/getTotalOrdersController');
const checkAuth = require('../auth/check-auth');

// Get sum of all products
route.get('/', checkAuth, orders.getTotalOrders);

module.exports = route;