const route = require('express').Router();
const orders = require('../controllers/getLatestOrdersController');
const checkAuth = require('../auth/check-auth');

// Get sum of all products
route.get('/', checkAuth, orders.getLatestOrders);

module.exports = route;