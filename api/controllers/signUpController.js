const db = require('mongoose');
const encrypt = require('bcrypt');


const User = require('../models/user');


// Sign up user route
exports.signup = (req, res) => {
    User.find({username: req.body.username})
        .exec()
        .then(user => {
            if (user.length > 0) {
                return res.status(409).json({message: "A user with this username already exists."})
            } else {
                encrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({error: err})
                    } else {
                        let user = new User({
                            _id: new db.Types.ObjectId,
                            email: req.body.email,
                            password: hash,
                            username: req.body.username,
                        });

                        user.save()
                            .then(result => {
                                res.status(201).json({message: 'User was created'});
                                console.log('result: ', result)
                            })
                            .catch(err => {
                                console.log('error: ', err);
                                res.status(500).json({error: err})
                            })
                    }
                })
            }
        })
        .catch(err => {
            console.log('error: ', err);
            res.status(500).json({error: err})
        })
};

