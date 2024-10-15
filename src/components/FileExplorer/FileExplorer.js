
// FILE: /mnt/data/ai-ide/src/components/FileExplorer/FileExplorer.js
import React, { useState, useEffect } from 'react';
import './FileExplorer.css';

function FileExplorer() {
  const [files, setFiles] = useState([]);
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    // Fetch initial list of files from backend
    fetchFiles(currentPath);
  }, [currentPath]);

  const fetchFiles = async (path) => {
    try {
      const response = await fetch('/api/files/list', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path }),
      });
      const responseData = await response.json();
      setFiles(responseData.files);
    } catch (error) {
      console.error('Error fetching files:', error);
    }
  };

  const handleFileClick = (file) => {
    if (file.isDirectory) {
      setCurrentPath(`${currentPath}${file.name}/`);
    } else {
      // Handle file selection (e.g., open in CodeEditor)
      console.log(`Opening file: ${file.name}`);
    }
  };

  const handleBackClick = () => {
    const newPath = currentPath.split('/').slice(0, -2).join('/') + '/';
    setCurrentPath(newPath);
  };

  return (
    <div className="file-explorer">
      <button onClick={handleBackClick} disabled={currentPath === '/'}>
        Back
      </button>
      <ul>
        {files.map((file, index) => (
          <li key={index} onClick={() => handleFileClick(file)} className={file.isDirectory ? 'directory' : 'file'}>
            {file.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FileExplorer;
