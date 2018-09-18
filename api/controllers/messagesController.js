const Message = require('../models/message');

//only gets 6 latest messages
exports.getLatestMessages = (req, res) => {
    Message.find()
        .exec()
        .then(messages => {
            if(messages.length > 6){
                messages.shift();
                res.status(200).json(messages);
                console.log(messages)
            } else {
                res.status(200).json(messages);
            }
        })
        .catch(err => res.status(500).json({ errorcode: '500',  errorMessage: err}))
};


exports.getMessage = (req, res) => {
    Message.find({_id: req.params.id}) // hitta bara ett meddelande med rätt id
        .exec()
        .then(message => res.status(200).json(message))
        .catch(err => res.status(500).json({errorcode: '500', errorMessage: err}))
};