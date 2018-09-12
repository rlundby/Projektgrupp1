const db = require('mongoose');

const transactionSchema = db.Schema({
    _id: db.Schema.Types.ObjectId,
    name: { type: String, required: true },
    status: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
});

module.exports = db.model('Transaction', transactionSchema);