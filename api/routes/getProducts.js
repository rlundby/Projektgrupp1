const route = require('express').Router();
const products = require('../controllers/productsController');
const checkAuth = require('../auth/check-auth');

// Get all products
route.get('/', checkAuth, products.getProducts);

// Get product from id
route.get('/:id', products.getProductWithId);

module.exports = route;