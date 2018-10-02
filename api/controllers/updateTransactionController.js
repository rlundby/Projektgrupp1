const db = require('mongoose');
const Transaction = require('../models/transaction');

// Updates the selected transaction with new body
exports.updateTransaction = (req, res) => {
   const id = req.params.id;
   const transaction = {
       ...req.body,
       modified: new Date()
   };

   Transaction.updateOne({_id: id}, {$set:  transaction})
       .exec()
       .then(result => res.status(200).json({message: 'The transaction has been updated' }))
       .catch(err => res.status(500).json({ message: 'The transaction could not be updated '}));
};