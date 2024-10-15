
// FILE: /mnt/data/ai-ide/src/components/FileExplorer/FileExplorer.js
import React, { useState, useEffect } from 'react';
import './FileExplorer.css';

function FileExplorer() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    // Fetch the project files on load
    async function fetchFiles() {
      try {
        const response = await fetch('/api/files');
        const responseData = await response.json();
        setFiles(responseData.files);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    }
    fetchFiles();
  }, []);

  return (
    <div className="file-explorer-container">
      <h4>File Explorer</h4>
      <ul className="file-list">
        {files.map((file) => (
          <li key={file.path}>
            {file.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FileExplorer;
