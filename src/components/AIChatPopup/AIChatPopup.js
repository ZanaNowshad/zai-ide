
// FILE: /mnt/data/ai-ide/src/components/AIChatPopup/AIChatPopup.js
import React, { useState } from 'react';
import './AIChatPopup.css';

function AIChatPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (input.trim()) {
      // Display user message
      const newMessages = [...messages, { sender: 'user', text: input }];
      setMessages(newMessages);

      // Mock API call to OpenAI service
      const response = await fetch('/api/ai/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });

      const responseData = await response.json();
      setMessages([...newMessages, { sender: 'ai', text: responseData.code }]);
      setInput('');
    }
  };

  return (
    <div className={`ai-chat-popup ${isOpen ? 'open' : ''}`}>
      <button className="toggle-chat" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close Chat' : 'Ask AI'}
      </button>
      {isOpen && (
        <div className="chat-window">
          <div className="messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="input-bar">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AIChatPopup;
