
// FILE: /mnt/data/ai-ide/src/components/CodeEditor/CodeEditor.js
import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as monaco from 'monaco-editor';
import './CodeEditor.css';

function CodeEditor() {
  const editorRef = useRef(null);
  const [editorInstance, setEditorInstance] = useState(null);
  const [aiSuggestion, setAiSuggestion] = useState('');
  const [bugFixSuggestion, setBugFixSuggestion] = useState('');
  const [securitySuggestion, setSecuritySuggestion] = useState('');
  const [deploymentMessage, setDeploymentMessage] = useState('');

  // Setting up Monaco Editor
  useEffect(() => {
    if (editorRef.current) {
      const editor = monaco.editor.create(editorRef.current, {
        value: '// Start coding here...',
        language: 'javascript',
        theme: 'vs-dark',
        automaticLayout: true,
        wordWrap: 'on',
        minimap: {
          enabled: true,
        },
        fontSize: 14,
        smoothScrolling: true,
        scrollBeyondLastLine: false,
      });
      setEditorInstance(editor);

      return () => {
        if (editor) {
          editor.dispose();
        }
      };
    }
  }, []);

  // Function to request AI coding assistance
  const handleAIAssist = async () => {
    if (editorInstance) {
      const codeContext = editorInstance.getValue();
      try {
        const response = await fetch('/api/ai/pair/pair', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ codeContext, prompt: 'Suggest improvements' }),
        });

        const responseData = await response.json();
        setAiSuggestion(responseData.suggestion);
      } catch (error) {
        console.error('Error fetching AI suggestion:', error);
      }
    }
  };

  // Function to request bug detection and healing
  const handleBugDetection = async () => {
    if (editorInstance) {
      const codeContext = editorInstance.getValue();
      try {
        const response = await fetch('/api/ai/bug-detect/bug-detect', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ codeContext }),
        });

        const responseData = await response.json();
        setBugFixSuggestion(responseData.suggestion);
      } catch (error) {
        console.error('Error detecting bugs:', error);
      }
    }
  };

  // Function to request security audit
  const handleSecurityAudit = async () => {
    if (editorInstance) {
      const codeContext = editorInstance.getValue();
      try {
        const response = await fetch('/api/security/audit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ codeContext }),
        });

        const responseData = await response.json();
        setSecuritySuggestion(responseData.suggestion);
      } catch (error) {
        console.error('Error performing security audit:', error);
      }
    }
  };

  return (
    <div className="code-editor-container">
      <div className="code-editor" ref={editorRef}></div>
      <button className="ai-assist-button" onClick={handleAIAssist}>
        Get AI Suggestion
      </button>
      <button className="bug-detect-button" onClick={handleBugDetection}>
        Detect & Heal Bugs
      </button>
      <button className="security-audit-button" onClick={handleSecurityAudit}>
        Security Audit
      </button>
      {aiSuggestion && (
        <div className="ai-suggestion">
          <h4>AI Suggestion:</h4>
          <p>{aiSuggestion}</p>
        </div>
      )}
      {bugFixSuggestion && (
        <div className="bug-fix-suggestion">
          <h4>Bug Fix Suggestion:</h4>
          <p>{bugFixSuggestion}</p>
        </div>
      )}
      {securitySuggestion && (
        <div className="security-suggestion">
          <h4>Security Suggestion:</h4>
          <p>{securitySuggestion}</p>
        </div>
      )}
    </div>
  );
}

export default CodeEditor;
