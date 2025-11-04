const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes/authRoutes')

router.use('/admin', authRoutes)

module.exports = router ;