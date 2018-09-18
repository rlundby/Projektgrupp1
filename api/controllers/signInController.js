
const encrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// const checkAuth = require('../auth/check-auth');

const User = require('../models/user');


// Sign in user route
exports.signIn = (req, res) => {
    console.log('signin: ', req.body)
    User.find({ username: req.body.username })
        .exec()
        .then( user => {
            console.log('user', user)
            if(user.length === 0) {
                return res.status(401).json({ message: 'Username or password is incorrect or empty'})
            } else {
                encrypt.compare(req.body.password, user[0].password, (err, result) => {
                    if(err) {
                        return res.status(401).json({ message: 'Username or password is incorrect or empty' })
                    }

                    if(result) {
                        const token = jwt.sign(
                            {
                                userId: user[0]._id,
                                username: user[0].username,
                            },
                            process.env.PRIVATE_SECRET_KEY,
                            {
                                expiresIn: '1h'
                            }
                        );
                        return res.status(200).json({ message: 'Authentication was successful', token: token})
                    }

                    res.status(401).json({ message: 'Username or password is incorrect or empty' })
                })
            }
        })
        .catch(err => {
            console.log('error: ', err);
            res.status(500).json({error: err})
        })
};



