const db = require('mongoose');
const User = require('../models/user');

exports.addUserAction = (req, res) => {
    const userAction = new User ({
        
        name: req.body.name,
        action: req.body.action,
    })

    userAction.save()
    .then(action => {
        console.log(action);
        res.status(201).json({
            message: "Product was created successfully.",
            product: {
               
                name: action.name,
                action: action.action,
                created: action.created
            }
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({ error: err });
    });

};