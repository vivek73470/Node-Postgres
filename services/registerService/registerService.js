const  Register  = require("../../models/register/register");

const createUser = async (userData) => {
    const user = await Register.create(userData)
    // await user.save();
    return user;
}

const findUserByEmail = async (email) => {
    return await Register.findOne({ email });

}
module.exports = {
    createUser,
    findUserByEmail
}