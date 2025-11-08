const Admin = require('../../models/adminModel/adminModel')

const createAdmin = async (userData) => {
    return await Admin.create(userData)
}

const findAdminByEmail = async (email) => {
    return await Admin.findOne({ email })
}

module.exports = {
    createAdmin,
    findAdminByEmail
}