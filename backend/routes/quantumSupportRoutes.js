
// FILE: /mnt/data/ai-ide/backend/routes/quantumSupportRoutes.js
const express = require('express');
const router = express.Router();
const quantumSupportController = require('../controllers/quantumSupportController');

// POST /api/quantum/assist
router.post('/assist', quantumSupportController.quantumCodingSupport);

module.exports = router;
