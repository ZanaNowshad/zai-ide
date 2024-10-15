
// FILE: /mnt/data/ai-ide/backend/routes/userInsightsRoutes.js
const express = require('express');
const router = express.Router();
const userInsightsController = require('../controllers/userInsightsController');

// POST /api/user/insights
router.post('/insights', userInsightsController.analyzeUserBehavior);

module.exports = router;
