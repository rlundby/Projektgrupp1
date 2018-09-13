const route = require('express').Router();
const orders = require('../controllers/ordersController');

// Get the sum of all orders
route.get('/', orders.getSumOfOrders);

//Unsecred routes

module.exports = route;