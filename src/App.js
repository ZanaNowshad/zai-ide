
// FILE: /mnt/data/ai-ide/src/App.js

import React, { useState } from 'react';
import CodeEditor from './components/CodeEditor/CodeEditor';
import FileExplorer from './components/FileExplorer/FileExplorer';
import RealTimeCollab from './components/RealTimeCollab/RealTimeCollab';
import VoiceControl from './components/VoiceControl/VoiceControl';
import AiLearning from './components/AiLearning/AiLearning';
import CloudDeployment from './components/CloudDeployment/CloudDeployment';
import SecurityAssistant from './components/SecurityAssistant/SecurityAssistant';
import './App.css';

function App() {
  const [codeContext, setCodeContext] = useState('// Start coding here...');

  return (
    <div className="app-container">
      <div className="sidebar">
        <FileExplorer />
      </div>
      <div className="main-content">
        <div className="editor-section">
          <CodeEditor />
          <RealTimeCollab roomId="default-room" />
        </div>
        <div className="assistant-section">
          <AiLearning codeContext={codeContext} />
          <SecurityAssistant codeContext={codeContext} />
        </div>
      </div>
      <div className="utilities-section">
        <VoiceControl />
        <CloudDeployment />
      </div>
    </div>
  );
}

export default App;
