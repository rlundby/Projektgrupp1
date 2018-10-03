const route = require('express').Router();
const sales = require('../controllers/addyearlySalesController');

route.post('/', sales.addNewInf);

module.exports = route;