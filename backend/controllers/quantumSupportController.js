
// FILE: /mnt/data/ai-ide/backend/controllers/quantumSupportController.js
const { quantumCodingSupport } = require('../services/quantumSupportService');

// Provides quantum algorithm coding support
exports.quantumCodingSupport = async (req, res) => {
    try {
        const { prompt } = req.body;
        const quantumAssistance = await quantumCodingSupport(prompt);
        res.json({ suggestion: quantumAssistance });
    } catch (error) {
        res.status(500).json({ error: 'Error providing quantum coding assistance.' });
    }
};
