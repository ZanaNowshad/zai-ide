
// FILE: /mnt/data/ai-ide/backend/routes/securityRoutes.js
const express = require('express');
const router = express.Router();
const securityController = require('../controllers/securityController');

// POST /api/security/audit
router.post('/audit', securityController.auditCodeSecurity);

module.exports = router;
