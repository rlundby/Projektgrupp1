const route = require('express').Router();
const products = require('../controllers/productsController');

// Get all products
route.get('/', products.getProducts);

//Unsecred routes

module.exports = route;