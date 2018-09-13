const db = require('mongoose');
const Order = require('../models/order');

exports.getSumOfOrders = (req, res) => {
    Transaction.find()
        .exec()
        .then(transactions => {
            const results = {
                count: transactions.length,
                transactions: transactions
            };
            res.status(200).json(results);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error })
        })
};