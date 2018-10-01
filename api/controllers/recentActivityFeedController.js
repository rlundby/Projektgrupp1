const db = require('mongoose');
const User = require('../models/user');



exports.getRecentActivityFeed = (req, res) => {

    User.find()
        .exec()
        .then((result) => {
            res.status(200).json({result})
        })
        .catch(error => {
            console.log(error);
            res.status(404).json({ error: error })
        })
}
