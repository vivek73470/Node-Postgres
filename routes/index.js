const express = require('express');
const router = express.Router();

const superRoutes = require('./superAdminRoutes/superAdminRoutes');
const adminRoutes = require('./adminRoutes/adminRoutes')
const userRoutes = require('./userRoutes/userRoutes')

router.use('/superAdmin', superRoutes)
router.use('/admin', adminRoutes)
router.use('/user', userRoutes)


module.exports = router;