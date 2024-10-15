
// FILE: /mnt/data/ai-ide/backend/services/aiPairService.js

const axios = require('axios');

// Function to assist with AI Pair Programming
exports.pairProgrammingAssist = async (codeContext, prompt) => {
    try {
        const response = await axios.post('https://api.openai.com/v1/completions', {
            prompt: \`\${codeContext}\n\n\${prompt}\`,
            model: 'text-davinci-003',
            max_tokens: 150
        });
        return response.data.choices[0].text;
    } catch (error) {
        throw new Error('Failed to provide AI pair programming assistance.');
    }
};
