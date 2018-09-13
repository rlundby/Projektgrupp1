const db = require('mongoose');
const Transaction = require('../models/transaction');

exports.addTransaction = (req, res) => {
    let transaction = new Transaction({
        _id: new db.Types.ObjectId,
        name: req.body.name,
        status: req.body.status,
        amount: req.body.amount,
    });
    transaction.save()
        .then(() => res.status(200).json({ message: "The new transaction has been added" }))
        .catch(err => res.status(500).json({ message: 'An error has occured', error: err }));
};