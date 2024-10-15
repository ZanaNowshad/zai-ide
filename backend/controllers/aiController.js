
// FILE: /mnt/data/ai-ide/backend/controllers/aiController.js
const { generateCodeSnippet, refactorCodeSnippet } = require('../services/aiService');

// Generates a code snippet based on a prompt
exports.generateCode = async (req, res) => {
    try {
        const prompt = req.body.prompt;
        const codeSnippet = await generateCodeSnippet(prompt);
        res.json({ code: codeSnippet });
    } catch (error) {
        res.status(500).json({ error: 'Error generating code snippet.' });
    }
};

// Refactors code based on best practices
exports.refactorCode = async (req, res) => {
    try {
        const code = req.body.code;
        const refactoredCode = await refactorCodeSnippet(code);
        res.json({ code: refactoredCode });
    } catch (error) {
        res.status(500).json({ error: 'Error refactoring code.' });
    }
};
