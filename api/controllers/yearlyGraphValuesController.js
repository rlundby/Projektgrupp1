const db = require('mongoose');
const YearlyGraphValues = require('../models/yearlyGraphValues');

exports.getYearlyGraphValues = (req, res) => {
    YearlyGraphValues.find()
        .exec()
        .then(graphValues =>  res.status(200).json(graphValues))
        .catch(error => {
            console.log(error);
            res.status(500).json({ error })
        })
};