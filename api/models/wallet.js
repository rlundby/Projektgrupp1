const db = require('mongoose');

const walletSchema = db.Schema({
    _id: db.Schema.Types.ObjectId,
    userId: { type: String, required: true },
    balance: { type: Number, required: true },
    itemsold: { type: Number, required: true }
});

module.exports = db.model('Wallet', walletSchema);