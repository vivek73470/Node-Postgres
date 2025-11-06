const mongoose = require('mongoose');

const registerSchems = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    }

},
    { timestamps: true });

module.exports = mongoose.model("Register", registerSchems);


