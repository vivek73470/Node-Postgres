const express = require('express');
const { registerSuperAdmin, superAdminLogin } = require('../../controllers/superAdminController/authSuperAdmin/authSuperAdmin');

const router = express.Router();

router.post('/register', registerSuperAdmin);
router.post('/login', superAdminLogin);

module.exports = router;
