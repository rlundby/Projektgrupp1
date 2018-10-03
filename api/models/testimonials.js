const db = require('mongoose');

const testimonialSchema = db.Schema({
    _id: db.Schema.Types.ObjectId,
    name: { type: String, required: true },
    quote: { type: String, required: true },
    jobTitle: { type: String, required: true },
});


module.exports = db.model('Testimonial', testimonialSchema);