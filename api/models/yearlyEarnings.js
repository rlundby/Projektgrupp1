const db = require('mongoose');

const yearlyearningsSchema = db.Schema({
    _id: db.Schema.Types.ObjectId,
    year: { type: Number, required: true },
    download: { type: Number, required: true },
    instore: { type: Number, required: true },
    total: { type: Number }
});

module.exports = db.model('Yearlyearnings', yearlyearningsSchema);