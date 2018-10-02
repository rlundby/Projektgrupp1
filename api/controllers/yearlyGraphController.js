const db = require('mongoose');
const model = require('../models/yearlygraph.js')

exports.getYearlyGraph = (req, res) => {
    model.find()
    .exec()
    .then(result => res.status(200).json({ result }))
    .catch( error => {
        console.log( error );
        res.status(500).json({ error })
    })
};
