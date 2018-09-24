const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const decoded = jwt.verify(token, process.env.PRIVATE_SECRET_KEY);

        req.userData = decoded;
        next();
    }
    catch (err){
        return res.status(401).json({ message: 'Authorization Failed'})
    }
};