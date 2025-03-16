const express = require('express');
const router = express.Router();

const adminCredentials = {
    email: "amalv61@gmail.com",
    password: "Thadi@gecwyd"
};

router.post("/admin/login", (req, res) => {
    const { email, password } = req.body;

    if (email === adminCredentials.email && password === adminCredentials.password) {
        res.status(200).json({ message: "Login successful", token: "admin-token-123" });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});

module.exports = router;
