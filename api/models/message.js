const db = require('mongoose');

const messageSchema = db.Schema({
    _id: db.Schema.Types.ObjectId,
    title: { type: String, required: false },
    content: { type: String, required: false },
    sentFrom: { type: String, required: true },
    created: { type: Date, default: Date.now },
});

module.exports = db.model('Message', messageSchema);