const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    superAdminId: { type: mongoose.Schema.Types.ObjectId, ref: 'superAdmin', required: true },
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    isActive: { type: Boolean, default: true }
})

module.exports = mongoose.model('Admin', adminSchema)