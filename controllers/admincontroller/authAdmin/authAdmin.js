const { findAdminByEmail, createAdmin } = require("../../../services/adminService/adminService");
const { hashPassword, comparePassword } = require("../../../utils/hash");
const { signToken } = require("../../../utils/jwt");


const registerAdmin = async (req, res) => {
    const { superAdminId, email, firstName, lastName, password } = req.body;
    try {
        const extingUser = await findAdminByEmail(email);
        if (extingUser) {
            return res.status(400).json({ message: 'Email already Registered' })
        }
        const securePassword = await hashPassword(password);
        const user = await createAdmin({ superAdminId, email, firstName, lastName, password: securePassword })
        res.status(201).json({
            status: true,
            message: "User registered successfully",
            data: user,
        });

    } catch (err) {
        console.error("Error registering user:", err);
        res.status(500).json({ message: "Error registering SuperAdmin", error });
    }
}

const adminLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const loginData = await findAdminByEmail(email);
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
            token:signToken({ id: loginData._id, email: loginData.email })
        });
    } catch (err) {

    }
}

module.exports = {
    registerAdmin,
    adminLogin
}

