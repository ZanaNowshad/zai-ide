
// FILE: /mnt/data/ai-ide/backend/routes/aiRoutes.js
const express = require('express');
const router = express.Router();
const aiController = require('../controllers/aiController');

// POST /api/ai/generate
router.post('/generate', aiController.generateCode);

// POST /api/ai/refactor
router.post('/refactor', aiController.refactorCode);

module.exports = router;
