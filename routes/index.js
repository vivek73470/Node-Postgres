const express = require('express');
const router = express.Router();

const superRoutes = require('./superAdminRoutes/superAdminRoutes');
const adminRoutes = require('./adminRoutes/adminRoutes')

router.use('/superAdmin', superRoutes)
router.use('/admin', adminRoutes)


module.exports = router ;