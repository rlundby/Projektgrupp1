const route = require('express').Router();
const products = require('../controllers/productsController');

// Get all products
route.get('/', products.getProducts);

// Get product from id
route.get('/:id', products.getProductWithId);

module.exports = route;