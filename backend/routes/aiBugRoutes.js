
// FILE: /mnt/data/ai-ide/backend/routes/aiBugRoutes.js
const express = require('express');
const router = express.Router();
const aiBugController = require('../controllers/aiBugController');

// POST /api/ai/bug-detect
router.post('/bug-detect', aiBugController.detectAndHealBugs);

module.exports = router;
