const db = require('mongoose');
const Product = require('./product');

const orderSchema = db.Schema({
    _id: db.Schema.Types.ObjectId,
    status: { type: String, required: true },
    date: { type: Date, required: true },
    totalcost: { type: Number, required: true },
    customer: { type: Object },
    products: { type: Array }
});

module.exports = db.model('Order', orderSchema);