const Message = require('../models/message');


//only gets 6 latest messages
exports.getLatestMessages = (req, res) => {
    Message.find()
        .exec()
        .then(messages => {

            if(messages.length > 6){
                messages.pop();
                res.status(200).json(messages);
            } else {
                res.status(200).json(messages);
            }
            
        })
        .catch(err => res.status(500).json({ errorcode: '500',  errorMessage: err}))
};


