
// FILE: /mnt/data/ai-ide/backend/services/securityAssistantService.js

const axios = require('axios');

// Function to audit code for vulnerabilities
async function auditCodeForSecurity(code) {
  try {
    // Placeholder URL for a security analysis service
    const SECURITY_SERVICE_URL = 'https://api.openai.com/v1/chat/completions';

    const response = await axios.post(SECURITY_SERVICE_URL, {
      model: "gpt-3.5-turbo",
      messages: [
        { "role": "system", "content": "You are a security auditor. Analyze the given code for vulnerabilities." },
        { "role": "user", "content": `Please audit the following code for security vulnerabilities:
${code}` }
      ],
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      }
    });

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Failed to audit code for security:', error);
    throw new Error('Failed to analyze code for security vulnerabilities.');
  }
}

module.exports = { auditCodeForSecurity };
