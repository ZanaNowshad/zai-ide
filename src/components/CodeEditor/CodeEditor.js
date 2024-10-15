
// FILE: /mnt/data/ai-ide/src/components/CodeEditor/CodeEditor.js
import React, { useEffect, useRef, useState } from 'react';
import * as monaco from 'monaco-editor';
import './CodeEditor.css';

function CodeEditor() {
  const editorRef = useRef(null);
  const [editorInstance, setEditorInstance] = useState(null);
  const [editorContent, setEditorContent] = useState('// Start coding here...');

  // Setting up Monaco Editor
  useEffect(() => {
    if (editorRef.current) {
      const editor = monaco.editor.create(editorRef.current, {
        value: editorContent,
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

      // Save content on every change
      editor.onDidChangeModelContent(() => {
        setEditorContent(editor.getValue());
      });

      return () => {
        if (editor) {
          editor.dispose();
        }
      };
    }
  }, [editorRef]);

  return (
    <div className="code-editor-container">
      <div className="code-editor" ref={editorRef}></div>
    </div>
  );
}

export default CodeEditor;
