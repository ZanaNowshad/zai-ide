
// FILE: /mnt/data/ai-ide/backend/services/aiLearningService.js

const axios = require('axios');

// Function to get AI-driven learning suggestions based on current code context
async function getLearningSuggestion(codeContext) {
  try {
    // Placeholder URL for AI learning service endpoint
    const AI_LEARNING_SERVICE_URL = 'https://api.openai.com/v1/chat/completions';

    const response = await axios.post(AI_LEARNING_SERVICE_URL, {
      model: "gpt-3.5-turbo",
      messages: [
        { "role": "system", "content": "You are a coding tutor that provides concise suggestions based on the given code." },
        { "role": "user", "content": `Please provide a learning suggestion based on the following code:
${codeContext}` }
      ],
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      }
    });

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Failed to get learning suggestion:', error);
    throw new Error('Failed to get learning suggestion from AI.');
  }
}

module.exports = { getLearningSuggestion };
