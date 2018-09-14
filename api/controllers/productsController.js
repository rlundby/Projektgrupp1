const db = require('mongoose');
const Product = require('../models/product');

exports.getProducts = (req, res) => {
    Product.find()
        .exec()
        .then(products => {
            res.status(200).json(products);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error })
        })
};

exports.getProductWithId = (req, res) => {
    Product.findById(req.params.id)
        .select('_id name price')
        .exec()
        .then(product => res.status(200).json(product))
        .catch(() => {
            res.status(500).json({
                errorCode: '500',
                message: 'Something went wrong, please try again later'
            })
        });
};