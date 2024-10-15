
// FILE: /mnt/data/ai-ide/src/components/AIChatPopup/AIChatPopup.js
import React, { useState } from 'react';
import './AIChatPopup.css';

function AIChatPopup() {
  const [chatInput, setChatInput] = useState('');
  const [chatResponse, setChatResponse] = useState('');

  const handleChatSubmit = async () => {
    if (chatInput.trim()) {
      try {
        const response = await fetch('/api/ai/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt: chatInput }),
        });

        const responseData = await response.json();
        setChatResponse(responseData.response);
      } catch (error) {
        console.error('Error fetching chat response:', error);
      }
    }
  };

  return (
    <div className="ai-chat-popup-container">
      <textarea
        value={chatInput}
        onChange={(e) => setChatInput(e.target.value)}
        placeholder="Ask something..."
      />
      <button onClick={handleChatSubmit}>Ask AI</button>
      {chatResponse && (
        <div className="chat-response">
          <h4>AI Response:</h4>
          <p>{chatResponse}</p>
        </div>
      )}
    </div>
  );
}

export default AIChatPopup;
