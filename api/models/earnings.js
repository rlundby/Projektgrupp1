const db = require('mongoose');

const earningsSchema = db.Schema({
    _id: db.Schema.Types.ObjectId,
    month: { type: Number, required: true },
    year: { type: Number, required: true },
    marketplace: { type: Number, required: true },
    instore: { type: String, required: true },
    total: { type: Number, required: true }
});

module.exports = db.model('Earnings', earningsSchema);