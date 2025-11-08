const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    superAdminId: { type: mongoose.Schema.Types.ObjectId, ref: 'superAdmin', required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
    isActive: { type: Boolean, default: true }
})

module.exports = mongoose.model('Admin', adminSchema)