const db = require('mongoose');
const Yearlyearnings = require('../models/yearlyEarnings');

exports.getYearlyEarningsTotal = (req, res) => {
    Yearlyearnings.find()
        .exec()
        .then(earnings => {

            let total = earnings.reduce((acc, elem) => {
                 return acc + elem.total;
            }, 0);

            let tax = total*0.3;

            const result = {
                total: total,
                tax: tax
            }

            res.status(200).json(result);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error })
        })
};