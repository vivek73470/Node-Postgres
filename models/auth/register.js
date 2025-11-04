const mongoose = require('mongoose');

const registerSchems = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
},
    { timestamps: true });

module.exports = mongoose.model("Register", registerSchems);


