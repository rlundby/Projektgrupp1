const db = require('mongoose');

const userModel = db.Schema({
    _id: db.Schema.Types.ObjectId,
    activity: { type: String, required: false },
    created: { type: Date, default: Date.now },
});

module.exports = db.model('UserAction', userModel);