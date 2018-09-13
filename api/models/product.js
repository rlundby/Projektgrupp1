const db = require('mongoose');

const productSchema = db.Schema({
    _id: db.Schema.Types.ObjectId,
    name: { type: String, required: true },
    price: { type: Number, required: true },
});

module.exports = db.model('Product', productSchema);