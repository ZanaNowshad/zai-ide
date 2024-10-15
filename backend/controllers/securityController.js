
// FILE: /mnt/data/ai-ide/backend/controllers/securityController.js
const { auditCodeSecurity } = require('../services/securityService');

// Provides security audit suggestions for the code
exports.auditCodeSecurity = async (req, res) => {
    try {
        const { codeContext } = req.body;
        const securitySuggestion = await auditCodeSecurity(codeContext);
        res.json({ suggestion: securitySuggestion });
    } catch (error) {
        res.status(500).json({ error: 'Error auditing code security.' });
    }
};
