const db = require('mongoose');

const ActivitySchema = db.Schema({
    _id: {type: db.Schema.Types.ObjectId , ref: "UserAction"},
    _id: {type: db.Schema.Types.ObjectId, ref: 'UserAction'}
})

module.exports = db.model('Activity', ActivitySchema)