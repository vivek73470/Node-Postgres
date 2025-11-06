const express = require('express');
const router = express.Router();

const registerRoutes = require('./registerRoutes/registerRoutes')
const loginRoutes = require('./loginRoutes/loginRoutes')

router.use('/admin', registerRoutes)
router.use('/admin', loginRoutes)

module.exports = router ;