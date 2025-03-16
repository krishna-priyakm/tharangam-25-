const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    name: String,
    email: String,
    department: String,
    year: String,
    phone: String,
    singleEvents: [String],
    groupEvents: [String],
    teamMembers: Object
}, { timestamps: true });

module.exports = mongoose.model('Registration', registrationSchema);
