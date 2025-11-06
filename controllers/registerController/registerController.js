const { findUserByEmail, createUser } = require("../../services/registerService/registerService");
const { hashPassword } = require("../../utils/hash");


const RegisterUser = async (req, res) => {
    try {
        const { email, firstName, lastName, password } = req.body;
        const extingUser = await findUserByEmail(email)
        if (extingUser) {
            return res.status(400).json({ message: 'Email already Registered' })
        }
        
        const securePassword = await hashPassword(password);
        const user = await createUser({ email, firstName, lastName, password:securePassword })
        res.status(201).json({
            status: true,
            message: "User registered successfully",
            data: user,
        });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Error registering user", error });
    }
}

module.exports = { RegisterUser }