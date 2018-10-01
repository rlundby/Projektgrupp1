const db = require('mongoose');

const userSchema = db.Schema(
    {
       name: {type: String},
       action: {type: String},
       created: {type: Date, default: Date.now} 
    },
    {
        collection: 'User'
    });

    module.exports = db.model('User', userSchema);