
// FILE: /mnt/data/ai-ide/backend/controllers/aiBugController.js
const { detectAndHealBugs } = require('../services/aiBugService');

// Provides AI-powered bug detection and healing suggestions
exports.detectAndHealBugs = async (req, res) => {
    try {
        const { codeContext } = req.body;
        const bugFixSuggestion = await detectAndHealBugs(codeContext);
        res.json({ suggestion: bugFixSuggestion });
    } catch (error) {
        res.status(500).json({ error: 'Error detecting and healing bugs.' });
    }
};
