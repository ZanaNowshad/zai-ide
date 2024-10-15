
// FILE: /mnt/data/ai-ide/backend/controllers/userInsightsController.js
const { analyzeUserBehavior } = require('../services/userInsightsService');

// Provides productivity insights and customization suggestions based on user behavior
exports.analyzeUserBehavior = async (req, res) => {
    try {
        const { codeContext, usagePatterns } = req.body;
        const insights = await analyzeUserBehavior(codeContext, usagePatterns);
        res.json({ insights });
    } catch (error) {
        res.status(500).json({ error: 'Error analyzing user behavior.' });
    }
};
