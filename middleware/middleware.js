const jwt = require('jsonwebtoken');

const authentication = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(400).json({ message: 'Token is required' })
        }
        const removeBearer = token.split(' ')[1]
        const decode = jwt.verify(removeBearer, 'LearnDb')
        if (decode) {
            return next()
        } else {
            return res.status(400).json({ message: 'Invalid token' })
        }
    } catch (err) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = authentication;