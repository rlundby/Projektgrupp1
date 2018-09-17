const db = require('mongoose');

const yearlyGraphValuesSchema = db.Schema({
    _id: db.Schema.Types.ObjectId,
    marketPlace: { type: Number, required: true },
    income: { type: Number, required: true },
    year: { type: Number, required: true },
    month: { type: Number, required: true }
});

module.exports = db.model('YearlyGraphValues', yearlyGraphValuesSchema);