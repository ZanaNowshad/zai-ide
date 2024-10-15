
// FILE: /mnt/data/ai-ide/src/App.js
import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import CodeEditor from './components/CodeEditor/CodeEditor';
import Terminal from './components/Terminal/Terminal';
import AIChatPopup from './components/AIChatPopup/AIChatPopup';
import VoiceControl from './components/VoiceControl/VoiceControl';
import './App.css';

function App() {
  const handleVoiceCommand = (command) => {
    console.log('Voice command received:', command);
    // Further integration logic to execute commands in the editor
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="editor-terminal-container">
        <CodeEditor />
        <Terminal />
      </div>
      <AIChatPopup />
      <VoiceControl onCommand={handleVoiceCommand} />
    </div>
  );
}

export default App;
