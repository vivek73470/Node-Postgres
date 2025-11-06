const express = require('express');
const { RegisterUser } = require('../../controllers/registerController/registerController');
const authentication = require('../../middleware/middleware')

const router = express.Router();

router.post('/register',authentication, RegisterUser)

module.exports =router;
