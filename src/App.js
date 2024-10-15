
// FILE: /mnt/data/ai-ide/src/App.js

import React from 'react';
import CodeEditor from './components/CodeEditor/CodeEditor';
import FileExplorer from './components/FileExplorer/FileExplorer';
import RealTimeCollab from './components/RealTimeCollab/RealTimeCollab';
import VoiceControl from './components/VoiceControl/VoiceControl';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="sidebar">
        <FileExplorer />
      </div>
      <div className="main-editor">
        <CodeEditor />
        <RealTimeCollab roomId="default-room" />
      </div>
      <div className="voice-control-section">
        <VoiceControl />
      </div>
    </div>
  );
}

export default App;
