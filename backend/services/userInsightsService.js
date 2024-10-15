
// FILE: /mnt/data/ai-ide/backend/services/userInsightsService.js

const axios = require('axios');

// Function to analyze user coding habits and provide recommendations
exports.analyzeUserBehavior = async (codeContext, usagePatterns) => {
    try {
        const response = await axios.post('https://api.openai.com/v1/completions', {
            prompt: \`Analyze the following code and usage patterns to provide recommendations for improved productivity:\n\nCode Context:\n\${codeContext}\n\nUsage Patterns:\n\${usagePatterns}\`,
            model: 'text-davinci-003',
            max_tokens: 200
        });
        return response.data.choices[0].text;
    } catch (error) {
        throw new Error('Failed to analyze user behavior.');
    }
};
