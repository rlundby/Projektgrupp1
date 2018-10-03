const route = require('express').Router();
const checkAuth = require('../auth/check-auth');
const testimonial = require('../controllers/testimonialsController');



route.get('/', checkAuth, testimonial.getTestimonial);




module.exports = route;