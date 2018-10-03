const db = require('mongoose');

const solditemSchema = db.Schema({
    _id: db.Schema.Types.ObjectId,
    month: { type: Number, required: true },
    year: { type: Number, required: true },
    instore: { type: Number, required: true },
    download: { type: Number, required: true },
    marketplace: { type: Number, required: true }
});

module.exports = db.model('Solditem', solditemSchema);