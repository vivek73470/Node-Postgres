const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;
const expiresIn = process.env.JWT_EXPIRES_IN || '7d';

const signToken = (payload) => {
    return jwt.sign(payload, secret, { expiresIn })
}

const verifytoken = (token) => {
    return jwt.verify(token, secret)
}

module.exports = {
    signToken,
    verifytoken
}