const db = require('mongoose');     //used by yearlyController

const graphSchema = db.Schema({
    _id: db.Schema.Types.ObjectId,
    market: { type: Number, required: true },
    income: { type: Number, required: true },
    year: { type: Number, required: true },
    month: { type: Number, required: true },
});

module.exports = db.model('Graph', graphSchema)