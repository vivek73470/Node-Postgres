const express = require('express');
const { RegisterUser } = require('../../controllers/registerController/registerController');
const auth = require('../../middleware/middleware')

const router = express.Router();

router.post('/register',auth, RegisterUser)

module.exports =router;
