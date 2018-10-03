const db = require('mongoose');
const User = require('../models/userActivity');

exports.addUserAction = (req, res) => {
    const userAction = new User ({
        _id: new db.Types.ObjectId(),
        activity: req.body.activity,
        created: req.body.created,
    })

    userAction.save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            action: {
                activity: result.activity,
                created: result.created
            }
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({ error: err });
    });

};