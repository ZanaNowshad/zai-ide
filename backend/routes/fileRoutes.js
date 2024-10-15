
// FILE: /mnt/data/ai-ide/backend/routes/fileRoutes.js
const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController');

// POST /api/files/list
router.post('/list', fileController.listFiles);

module.exports = router;
