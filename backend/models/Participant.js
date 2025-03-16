// models/Participant.js
const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  department: { type: String, required: true },
  year: { type: Number, required: true },
  phone: { type: String, required: true },
  singleEvents: { type: [String], default: [] },
  groupEvents: {
    type: [
      {
        eventName: { type: String, required: true },
        teamMembers: { type: [String], required: true }
      }
    ],
    default: []
  }
});

module.exports = mongoose.model('Participant', participantSchema);
