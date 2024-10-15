
// Updating FILE: /mnt/data/ai-ide/backend/server.js to include Qiskit Support routes
const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const PORT = process.env.PORT || 3001;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/ai', require('./routes/aiRoutes'));
app.use('/api/files', require('./routes/fileRoutes'));
app.use('/api/ai/pair', require('./routes/aiPairRoutes'));
app.use('/api/ai/bug-detect', require('./routes/aiBugRoutes'));
app.use('/api/security', require('./routes/securityRoutes'));
app.use('/api/user', require('./routes/userInsightsRoutes'));
app.use('/api/language', require('./routes/multiLanguageRoutes'));
app.use('/api/quantum', require('./routes/quantumSupportRoutes'));
app.use('/api/cloud', require('./routes/cloudDeploymentRoutes'));
app.use('/api/learning', require('./routes/learningModulesRoutes'));
app.use('/api/collaboration', require('./routes/collaborationMetricsRoutes'));
app.use('/api/qiskit', require('./routes/qiskitSupportRoutes'));  // Added Qiskit Support routes
app.use('/api/terminal', require('./routes/terminalRoutes'));

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
