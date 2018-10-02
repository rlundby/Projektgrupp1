const route = require('express').Router();
const orders = require('../controllers/getOrdersController');
const checkAuth = require('../auth/check-auth');

// Get sum of all products
route.get('/', checkAuth, orders.getOrders);

module.exports = route;