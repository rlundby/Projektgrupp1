const route = require('express').Router();
const orders = require('../controllers/getTotalOrdersController');

// Get sum of all products
route.get('/', orders.getTotalOrders);

module.exports = route;