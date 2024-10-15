
// FILE: /mnt/data/ai-ide/src/components/CloudDeployment/CloudDeployment.js

import React, { useState } from 'react';
import './CloudDeployment.css';

function CloudDeployment() {
  const [projectPath, setProjectPath] = useState('');
  const [deploymentStatus, setDeploymentStatus] = useState('');
  const [error, setError] = useState('');

  // Function to handle cloud deployment
  const handleDeploy = async () => {
    setError('');
    setDeploymentStatus('');

    try {
      const response = await fetch('/api/deploy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ projectPath }),
      });
      const responseData = await response.json();
      setDeploymentStatus(responseData.message);
    } catch (error) {
      setError('Deployment failed. Please try again.');
    }
  };

  return (
    <div className="cloud-deployment-container">
      <h4>Deploy to Cloud</h4>
      <input
        type="text"
        placeholder="Enter Project Path"
        value={projectPath}
        onChange={(e) => setProjectPath(e.target.value)}
      />
      <button onClick={handleDeploy}>
        Deploy
      </button>
      {deploymentStatus && (
        <div className="deployment-status">
          <p>{deploymentStatus}</p>
        </div>
      )}
      {error && (
        <div className="deployment-error">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default CloudDeployment;
