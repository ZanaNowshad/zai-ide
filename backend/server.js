
// FILE: /mnt/data/ai-ide/backend/server.js

const express = require('express');
const http = require('http');
const { initializeCollaboration } = require('./services/realTimeCollabService');
const { getLearningSuggestion } = require('./services/aiLearningService');
const { deployCode } = require('./services/cloudDeploymentService');
const app = express();
const server = http.createServer(app);

// Middleware
app.use(express.json());

// Adding Collaboration Support
initializeCollaboration(server);

// AI Learning Route
app.post('/api/ai/learning', async (req, res) => {
  try {
    const { codeContext } = req.body;
    const suggestion = await getLearningSuggestion(codeContext);
    res.json({ suggestion });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Cloud Deployment Route
app.post('/api/deploy', async (req, res) => {
  try {
    const { projectPath } = req.body;
    const deploymentResult = await deployCode(projectPath);
    res.json({ message: deploymentResult });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

// Sample API Endpoint
app.get('/api', (req, res) => {
  res.send('API is running');
});

// Starting the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
