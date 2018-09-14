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