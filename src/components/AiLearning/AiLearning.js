
// FILE: /mnt/data/ai-ide/src/components/AiLearning/AiLearning.js

import React, { useState } from 'react';
import './AiLearning.css';

function AiLearning({ codeContext }) {
  const [learningSuggestion, setLearningSuggestion] = useState('');
  const [error, setError] = useState('');

  // Function to fetch learning suggestions
  const fetchLearningSuggestion = async () => {
    setError('');
    try {
      const response = await fetch('/api/ai/learning', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ codeContext }),
      });
      const responseData = await response.json();
      setLearningSuggestion(responseData.suggestion);
    } catch (error) {
      setError('Failed to get learning suggestion');
    }
  };

  return (
    <div className="ai-learning-container">
      <button onClick={fetchLearningSuggestion}>
        Get Learning Suggestion
      </button>
      {learningSuggestion && (
        <div className="learning-suggestion">
          <h4>AI Learning Suggestion:</h4>
          <p>{learningSuggestion}</p>
        </div>
      )}
      {error && (
        <div className="learning-error">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default AiLearning;
