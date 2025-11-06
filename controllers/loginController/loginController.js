const { findUserByEmail } = require("../../services/loginService/loginService");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const token = (loginData) => jwt.sign(
    loginData, 'LearnDb', { expiresIn: '1h' }
)

const LoginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const loginData = await findUserByEmail(email)
        if (!loginData) {
            return res.status(400).json({ message: "User not found" })
        }
        const isMatch = await bcrypt.compare(password, loginData.password)
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid Password' })
        }
        
        res.status(200).json({
            status: true,
            message: "Login successful",
            data: loginData,
            token: token({id:loginData._id,email:loginData.email})
        });

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Server error", error: err.message });
    }
}

module.exports = { LoginUser }