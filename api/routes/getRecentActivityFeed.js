const route = require('express').Router();
const recentActivityFeedController = require('../controllers/recentActivityFeedController');

route.get('/', recentActivityFeedController.getRecentActivityFeed);

module.exports = route;