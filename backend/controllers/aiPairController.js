
// FILE: /mnt/data/ai-ide/backend/controllers/aiPairController.js
const { pairProgrammingAssist } = require('../services/aiPairService');

// Provides AI Pair Programming assistance
exports.pairProgrammingAssist = async (req, res) => {
    try {
        const { codeContext, prompt } = req.body;
        const suggestion = await pairProgrammingAssist(codeContext, prompt);
        res.json({ suggestion });
    } catch (error) {
        res.status(500).json({ error: 'Error providing pair programming assistance.' });
    }
};
