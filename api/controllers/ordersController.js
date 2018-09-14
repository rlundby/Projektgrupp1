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

// exports.getProductWithId = (req, res) => {
//     Order.findById(req.params.id)
//         .select('_id name price')
//         .exec()
//         .then(product => res.status(200).json(product))
//         .catch(() => {
//             res.status(500).json({
//                 errorCode: '500',
//                 message: 'Something went wrong, please try again later'
//             })
//         });
// };