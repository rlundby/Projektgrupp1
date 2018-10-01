const db = require('mongoose');

const walletSchema = db.Schema({
    _id: db.Schema.Types.ObjectId,
    userid: { type: String, required: true },
    balance: { type: Number, required: true },
    solditems: { type: Number, required: true }
});

module.exports = db.model('Wallet', walletSchema);