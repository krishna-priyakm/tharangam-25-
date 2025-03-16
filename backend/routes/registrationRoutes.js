const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');

// Register participant
router.post('/register', async (req, res) => {
    try {
        const newRegistration = new Registration(req.body);
        await newRegistration.save();
        res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Fetch all registrations (for admin)
router.get('/admin/registrations', async (req, res) => {
    try {
        const registrations = await Registration.find();
        res.json(registrations);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
