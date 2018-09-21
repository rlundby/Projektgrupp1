const db = require('mongoose');
const Yearlyearnings = require('../models/yearlyEarnings');

exports.getYearlyEarnings = (req, res) => {
    Yearlyearnings.find()
        .exec()
        .then(earnings => {
            res.status(200).json( earnings )
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error })
        })
};