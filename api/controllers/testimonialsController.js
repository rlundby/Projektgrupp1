const Testimonial = require('../models/testimonials');


//only gets 1 testimonial
exports.getTestimonial = (req, res) => {
    Testimonial.find()
        .exec()
        .then(testimonials => {
            // randomize testimonial
            let item = testimonials[Math.floor(Math.random()*testimonials.length)];

            res.status(200).json(item);
            // res.status(200).json(testimonials);
        })
        .catch(err => res.status(500).json({ errorcode: '500',  errorMessage: err}))
};


