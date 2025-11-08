const { findSuperAdminByEmail, createSuperAdmin } = require('../../../services/superAdminService/superAdminService')
const { hashPassword, comparePassword } = require("../../../utils/hash");
const { signToken } = require("../../../utils/jwt");

const registerSuperAdmin = async (req, res) => {
    const { email, firstName, lastName, password } = req.body;
    try {
        const extingUser = await findSuperAdminByEmail(email);
        if (extingUser) {
            return res.status(400).json({ message: 'Email already Registered' })
        }
        const securePassword = await hashPassword(password);
        const user = await createSuperAdmin({ email, firstName, lastName, password: securePassword })
        res.status(201).json({
            status: true,
            message: "User registered successfully",
            data: user,
        });

    } catch (err) {
        console.log("Error registering user:", err);
        res.status(500).json({ message: "Error registering SuperAdmin", error });
    }
}


const superAdminLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const loginData = await findSuperAdminByEmail(email);
        if (!loginData) {
            return res.status(400).json({ message: "User not found" })
        }
        const isMatch = await comparePassword(password, loginData.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid Password' })
        }
        res.status(200).json({
            status: true,
            message: "Login successful",
            data: loginData,
            token: signToken({ id: loginData._id, email: loginData.email })
        });
    } catch (err) {

    }
}

module.exports = {
    registerSuperAdmin,
    superAdminLogin
}