
// FILE: /mnt/data/ai-ide/backend/routes/aiPairRoutes.js
const express = require('express');
const router = express.Router();
const aiPairController = require('../controllers/aiPairController');

// POST /api/ai/pair
router.post('/pair', aiPairController.pairProgrammingAssist);

module.exports = router;
