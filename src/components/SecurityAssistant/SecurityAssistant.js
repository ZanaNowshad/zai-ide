
// FILE: /mnt/data/ai-ide/src/components/SecurityAssistant/SecurityAssistant.js

import React, { useState } from 'react';
import './SecurityAssistant.css';

function SecurityAssistant({ codeContext }) {
  const [securityReport, setSecurityReport] = useState('');
  const [error, setError] = useState('');

  // Function to fetch security audit report
  const fetchSecurityReport = async () => {
    setError('');
    try {
      const response = await fetch('/api/security/audit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: codeContext }),
      });
      const responseData = await response.json();
      setSecurityReport(responseData.report);
    } catch (error) {
      setError('Failed to get security audit report');
    }
  };

  return (
    <div className="security-assistant-container">
      <button onClick={fetchSecurityReport}>
        Audit Code for Security
      </button>
      {securityReport && (
        <div className="security-report">
          <h4>Security Audit Report:</h4>
          <p>{securityReport}</p>
        </div>
      )}
      {error && (
        <div className="security-error">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default SecurityAssistant;
