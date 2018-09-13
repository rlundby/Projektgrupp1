// const db = require('mongoose');

const Message = require('../models/message');

exports.getLatestMessages = (req, res) => {
    Message.find()
        .exec()
        .then(messages => res.status(200).json(messages))
        // plocka ut bara de 6-7 senaste meddelanden
        .catch(err => res.status(500).json({ errorcode: '500',  errorMessage: err}))
};


exports.getMessage = (req, res) => {
    Message.find({_id: req.params.id}) // hitta bara med rätt id
        .exec()
        .then(message => res.status(200).json(message))
        .catch(err => res.status(500).json({errorcode: '500', errorMessage: err}))
};