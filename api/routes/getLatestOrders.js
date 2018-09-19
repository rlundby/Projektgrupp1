const route = require('express').Router();
const orders = require('../controllers/getLatestOrdersController');

// Get sum of all products
route.get('/', orders.getLatestOrders);

module.exports = route;