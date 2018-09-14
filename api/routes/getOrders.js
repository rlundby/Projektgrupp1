const route = require('express').Router();
const orders = require('../controllers/ordersController');

// Get all products
route.get('/', orders.getTotalOrders);



module.exports = route;