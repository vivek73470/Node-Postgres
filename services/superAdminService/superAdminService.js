const SuperAdmin = require("../../models/superAdminModel/superAdminModel")
const Admin = require('../../models/adminModel/adminModel')
const User = require('../../models/user/userModel')

const createSuperAdmin = async (data) => {
    return await superAdmin.create(data);
};

const findSuperAdminByEmail = async (email) => {
    return await SuperAdmin.findOne({ email })
}

const getAllAdmins = async () => {
    return await Admin.find().lean(); //.lean() converts data into plain JS objects
}

const getAllUsers = async (filter = {}, options = {}) => {
    const query = User.find(filter)
        .populate('adminId', 'firstName lastName email')
        .sort(options.sort || { createdAt: -1 });

    if (options.skip) query.skip(options.skip);
    if (options.limit) query.limit(options.limit);

    return await query.lean();
};


module.exports = {
    createSuperAdmin,
    findSuperAdminByEmail,
    getAllAdmins,getAllUsers
}