
// FILE: /mnt/data/ai-ide/backend/services/aiService.js
const axios = require('axios');

// Function to generate a code snippet using OpenAI API
exports.generateCodeSnippet = async (prompt) => {
    try {
        const response = await axios.post('https://api.openai.com/v1/completions', {
            prompt: prompt,
            model: 'text-davinci-003',
            max_tokens: 150
        });
        return response.data.choices[0].text;
    } catch (error) {
        throw new Error('Failed to generate code.');
    }
};

// Function to refactor code using OpenAI API
exports.refactorCodeSnippet = async (code) => {
    try {
        const response = await axios.post('https://api.openai.com/v1/completions', {
            prompt: `Refactor the following code for better readability and performance: ${code}`,
            model: 'text-davinci-003',
            max_tokens: 150
        });
        return response.data.choices[0].text;
    } catch (error) {
        throw new Error('Failed to refactor code.');
    }
};
