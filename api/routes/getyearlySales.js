const route = require('express').Router();
const getyearlySalesFromCon = require('../controllers/getYearlySalesController');


route.get('/', getyearlySalesFromCon.getYearlySales);


module.exports = route;