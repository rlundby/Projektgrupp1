const db = require('mongoose');
const year = require('../models/yearly.js')

exports.getYearly = (req, res) => {
    year.find()
    .exec()
    .then(result => res.status(200).json({ result }))
    .catch( error => {
        console.log( error );
        res.status(500).json({ error })
    })
};
