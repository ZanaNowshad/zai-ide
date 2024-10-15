
// FILE: /mnt/data/ai-ide/backend/server.js

const express = require('express');
const http = require('http');
const { initializeCollaboration } = require('./services/realTimeCollabService');
const app = express();
const server = http.createServer(app);

// Middleware
app.use(express.json());

// Adding Collaboration Support
initializeCollaboration(server);

// Sample API Endpoint
app.get('/api', (req, res) => {
  res.send('API is running');
});

// Starting the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
