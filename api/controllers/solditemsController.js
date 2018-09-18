const db = require('mongoose');
const Solditems = require('../models/solditem');

exports.getSoldItems = (req, res) => {
    Solditems.find()
        .exec()
        .then(items => res.status(200).json( items ))
        .catch(error => {
            console.log(error);
            res.status(500).json({ error })
        })
};