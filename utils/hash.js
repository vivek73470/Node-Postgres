const bcrypt = require('bcrypt');

const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS || 10);

const hashPassword = async (plain) => {
    return await bcrypt.hash(plain, saltRounds)
}

const comparePassword = async (plain, hashed) => {
    return bcrypt.compare(plain, hashed)
}

module.exports = {
    hashPassword,
    comparePassword
}