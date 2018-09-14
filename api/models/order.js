const db = require('mongoose');

const orderSchema = db.Schema({
    _id: db.Schema.Types.ObjectId,
    status: { type: String, required: true },
    date: { type: Date, required: true },
    products: { type: Array, required: true },
    totalPrice: { type: Number, required: true }
});

module.exports = db.model('Order', orderSchema);