const Register = require('../../models/register/register')

const findUserByEmail = async (email) => {
    return await Register.findOne({ email })
}

module.exports = {
    findUserByEmail
}