const db = require('mongoose');
const model = require('../models/yearly.js')

exports.getYearly = (req, res) => {
    model.find()
    .exec()
    .then(result => res.status(200).json({ result }))
    .catch( error => {
        console.log( error );
        res.status(500).json({ error })
    })
};
