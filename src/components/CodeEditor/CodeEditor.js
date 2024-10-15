
// FILE: /mnt/data/ai-ide/src/components/CodeEditor/CodeEditor.js
import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as monaco from 'monaco-editor';
import './CodeEditor.css';

function CodeEditor() {
  const editorRef = useRef(null);
  const [editorInstance, setEditorInstance] = useState(null);
  const [qiskitSuggestion, setQiskitSuggestion] = useState('');
  const [qiskitSimulationResult, setQiskitSimulationResult] = useState('');

  useEffect(() => {
    if (editorRef.current) {
      const editor = monaco.editor.create(editorRef.current, {
        value: '// Start coding here...',
        language: 'javascript',
        theme: 'vs-dark',
        automaticLayout: true,
      });
      setEditorInstance(editor);
    }
  }, []);

  // Function to request Qiskit coding assistance
  const handleQiskitSupport = async () => {
    if (editorInstance) {
      const prompt = editorInstance.getValue();

      try {
        const response = await fetch('/api/qiskit/assist', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt }),
        });

        const responseData = await response.json();
        setQiskitSuggestion(responseData.qiskitAssistance);
      } catch (error) {
        console.error('Error fetching Qiskit coding assistance:', error);
      }
    }
  };

  // Function to run Qiskit code
  const handleQiskitRun = async () => {
    if (editorInstance) {
      const code = editorInstance.getValue();

      try {
        const response = await fetch('/api/qiskit/run', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ code }),
        });

        const responseData = await response.json();
        setQiskitSimulationResult(responseData.result);
      } catch (error) {
        console.error('Error running Qiskit code:', error);
      }
    }
  };

  return (
    <div className="code-editor-container">
      <div className="code-editor" ref={editorRef}></div>
      <button className="qiskit-support-button" onClick={handleQiskitSupport}>
        Get Qiskit Assistance
      </button>
      <button className="qiskit-run-button" onClick={handleQiskitRun}>
        Run Qiskit Code
      </button>
      {qiskitSuggestion && (
        <div className="qiskit-suggestion">
          <h4>Qiskit Suggestion:</h4>
          <p>{qiskitSuggestion}</p>
        </div>
      )}
      {qiskitSimulationResult && (
        <div className="qiskit-simulation-result">
          <h4>Qiskit Simulation Result:</h4>
          <p>{qiskitSimulationResult}</p>
        </div>
      )}
    </div>
  );
}

export default CodeEditor;
