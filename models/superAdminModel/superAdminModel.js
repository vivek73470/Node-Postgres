const { mongoose } = require("mongoose");

const superAdminSchema = new mongoose.Schema({
    email: { type: String, unque: true, required: true },
    password: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('SuperAdmin', superAdminSchema)