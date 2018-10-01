const db = require('mongoose');   

const yearlygraphSchema = db.Schema({
    _id: db.Schema.Types.ObjectId,
    y: { type: String, required: true },
    a: { type: Number, required: true },
    b: { type: Number, required: true },
    c: { type: Number, required: true },
});

module.exports = db.model('Yearlygraph', yearlygraphSchema)