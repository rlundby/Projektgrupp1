const db = require('mongoose');
const Transaction = require('../models/transaction');

exports.getLatestTransactions = (req, res) => {
    Transaction.find()
        .exec()
        .then(transactions => {
            const results = {
                count: transactions.length,
                transactions: transactions
            };
            if (results.count > 5) {
                let numberOfTransactions = results.count;
                while(numberOfTransactions > 5) {
                    results.transactions.shift();
                    numberOfTransactions --;
                }
                res.status(200).json(results.transactions);

            } else {
                res.status(200).json(results.transactions);
            }



        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error })
        })
};