const route = require('express').Router();
const yearlyController = require('../controllers/yearlyController');
const checkAuth = require('../auth/check-auth');

route.get('/', checkAuth, yearlyController.getYearly);  // when requesting route use checkAuth for authentication
                                                            // and  go to yearlyController.getYearly
module.exports = route ;