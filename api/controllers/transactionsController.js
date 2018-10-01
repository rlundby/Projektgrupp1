const db = require('mongoose');
const Transaction = require('../models/transaction');

/*
*  This function returns the 5 latest transactions from the database.
*  No paramater or body needed.
* */
exports.getLatestTransactions = (req, res) => {
    Transaction.find()
        .sort({ date: -1 })
        .limit(5)
        .exec()
        .then(transactions => {
            const results = {
                count: transactions.length,
                transactions: transactions
            };
            res.status(200).json(results.transactions);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error })
        })
};