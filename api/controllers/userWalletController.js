const db = require('mongoose');
const Wallet = require('../models/wallet');

exports.getUserWallet = (req, res) => {
    Wallet.findOne({userid: req.params.id})
        .exec()
        .then(user => res.status(200).json(user))
        .catch(error => {
            console.log(error);
            res.status(500).json({ error })
        })
};