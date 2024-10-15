
// FILE: /mnt/data/ai-ide/backend/routes/qiskitSupportRoutes.js
const express = require('express');
const router = express.Router();
const qiskitSupportController = require('../controllers/qiskitSupportController');

// POST /api/qiskit/assist
router.post('/assist', qiskitSupportController.qiskitCodingSupport);

// POST /api/qiskit/run
router.post('/run', qiskitSupportController.runQiskitCode);

module.exports = router;
