const db = require('mongoose');
const Order = require('../models/order');

exports.getTotalOrders = (req, res) => {
    Order.find()
        .exec()
        .then(orders => {
            res.status(200).json(orders.length);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error })
        })
};
