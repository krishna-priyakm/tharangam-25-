const express = require('express');
const router = express.Router();
const Participant = require('../models/Participant');

router.post('/register', async (req, res) => {
  const { name, email, department, year, phone, singleEvents, groupEvents } = req.body;

  try {
    const newParticipant = new Participant({
      name,
      email,
      department,
      year,
      phone,
      singleEvents,
      groupEvents,
    });

    await newParticipant.save();
    res.status(201).json({ message: 'Registration successful!' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Server error during registration' });
  }
});

module.exports = router;
