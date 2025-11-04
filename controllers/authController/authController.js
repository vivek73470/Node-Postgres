const { findUserByEmail, createUser } = require("../../services/authService/authService")



const RegisterUser = async (req, res) => {
    try {
        const { email, firstName, lastName } = req.body;
        const extingUser = await findUserByEmail(email)
        if (extingUser) {
            return res.status(400).json({ message: 'Email already Registered' })
        }
        const user = await createUser({ email, firstName, lastName })
        console.log(user,'created User')
        res.status(201).json({
            status:true,
            message: "User registered successfully",
            data:user,
        });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Error registering user", error });
    }
}

module.exports = { RegisterUser }