const express = require('express');
const { userLogin, registerUser } = require('../../controllers/userController/authUser/authUser');

const router = express.Router();

router.post('/register', registerUser)
router.post('/login', userLogin)

module.exports = router