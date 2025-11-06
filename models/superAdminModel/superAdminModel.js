const { mongoose } = require("mongoose");

const superAdminSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, unque: true, required: true },
    password: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('SuperAdmin', superAdminSchema)