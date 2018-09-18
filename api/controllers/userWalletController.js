const db = require('mongoose');
const Wallet = require('../models/wallet');

exports.getUserWallet = (req, res) => {
    Wallet.find()
        .exec()
        .then()
        .catch(error => {
            console.log(error);
            res.status(500).json({ error })
        })
};