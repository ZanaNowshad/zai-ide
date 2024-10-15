
// FILE: /mnt/data/ai-ide/backend/services/aiPairService.js

const axios = require('axios');

// Function to assist with pair programming
exports.pairProgrammingAssist = async (codeContext, prompt) => {
    try {
        const response = await axios.post('https://api.openai.com/v1/completions', {
            prompt: \`Provide suggestions for improving the following code:\n\n\${codeContext}\n\nPrompt:\n\${prompt}\`,
            model: 'text-davinci-003',
            max_tokens: 300
        });
        return response.data.choices[0].text;
    } catch (error) {
        throw new Error('Failed to provide pair programming assistance.');
    }
};
