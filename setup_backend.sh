#!/bin/bash

# Create project directories
mkdir -p frontend
mkdir -p server/src/routes
mkdir -p server/database

touch server/database/db.js
touch server/database/schema.sql

# Navigate to the server directory
cd server

# Initialize a new Node.js project
npm init -y

# Install necessary packages
npm install express dotenv jsonwebtoken bcrypt cookie-parser

# Create basic project files
touch src/index.js
touch .env
touch .gitignore

# Add .gitignore content
echo "node_modules" >> .gitignore
echo ".env" >> .gitignore

# Add environment variables to .env file
echo "PORT=3000" >> .env
echo "SECRET_KEY=your_secret_key" >> .env
echo "ALLOWED_EMAIL=al3xander.effendy@gmail.com" >> .env

# Add basic Express server setup to index.js
cat <<EOL > src/index.js
const express = require('express');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

const authRoutes = require('./routes/auth');

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
EOL

# Create auth route file
touch src/routes/auth.js

# Add basic auth route setup to auth.js
cat <<EOL > src/routes/auth.js
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();

const SECRET_KEY = process.env.SECRET_KEY;
const ALLOWED_EMAIL = process.env.ALLOWED_EMAIL;

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // In a real application, you would fetch user details from a database
  if (email === ALLOWED_EMAIL) {
    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });
    res.cookie('authToken', token, { httpOnly: true, secure: true });
    return res.json({ message: 'Login successful' });
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
EOL

echo "server setup complete."
