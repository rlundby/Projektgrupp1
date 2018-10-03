const db = require('mongoose');
const Yearlysales = require('../models/yearlySales')

exports.getYearlySales = (req, res) => {
    Yearlysales.find()
    .exec()
    .then(result => {
        res.status(202).json(result)
        console.log(result);
        
   })
    .catch( error => {
        console.log( error );
        res.status(500).json({ error })
        
    })
};
