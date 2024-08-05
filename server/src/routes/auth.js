const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();

const SECRET_KEY = process.env.SECRET_KEY;
const ALLOWED_EMAIL = process.env.ALLOWED_EMAIL;

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // In a real application, you would fetch user details from a database
  if (email === ALLOWED_EMAIL_ONE) {
    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });
    res.cookie('authToken', token, { httpOnly: true, secure: true });
    return res.json({ message: 'Login successful' });
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
