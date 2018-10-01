const db = require('mongoose');

const ActivitySchema = db.Schema({
    _id: {type: db.Schema.Types.ObjectId , ref: "User"},
    _id: {type: db.Schema.Types.ObjectId, ref: 'User'}
})

module.exports = db.model('Activity', ActivitySchema)
