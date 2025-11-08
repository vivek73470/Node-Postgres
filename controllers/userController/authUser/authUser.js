
const { findUserByEmail, createUser } = require("../../../services/userservice/userService");
const { hashPassword, comparePassword } = require("../../../utils/hash");
const { signToken } = require("../../../utils/jwt");


const registerUser = async (req, res) => {
    const { superAdminId, email, firstName, lastName, password } = req.body;
    try {
        const extingUser = await findUserByEmail(email);
        if (extingUser) {
            return res.status(400).json({ message: 'Email already Registered' })
        }
        const securePassword = await hashPassword(password);
        const user = await createUser({ superAdminId, email, firstName, lastName, password: securePassword })
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

const userLogin = async (req, res) => {
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
    registerUser,
    userLogin
}

