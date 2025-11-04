const express = require('express');
const { RegisterUser } = require('../../controllers/authController/authController');

const router = express.Router();

router.post('/register', RegisterUser)

module.exports =router;
