const express = require('express');
const { registerAdmin, adminLogin } = require('../../controllers/admincontroller/authAdmin/authAdmin');

const router = express.Router();

router.post('/register', registerAdmin)
router.post('/login', adminLogin)

module.exports = router