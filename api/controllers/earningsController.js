const db = require('mongoose');
const Earnings = require('../models/earnings');

exports.getMonthlyEarnings = (req, res) => {
    Earnings.find()
        .exec()
        .then(earnings => res.status(200).json({ earnings }))
        .catch(error => {
            console.log(error);
            res.status(500).json({ error })
        })
};