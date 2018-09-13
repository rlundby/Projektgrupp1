const db = require('mongoose');

const orderSchema = db.Schema({
    _id: db.Schema.Types.ObjectId,
    name: { type: String, required: true },
    status: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
});

module.exports = db.model('Order', orderSchema);