
// FILE: /mnt/data/ai-ide/src/components/VoiceControl/VoiceControl.js

import React, { useState } from 'react';
import './VoiceControl.css';

function VoiceControl() {
  const [recording, setRecording] = useState(false);
  const [voiceCommand, setVoiceCommand] = useState('');
  const [error, setError] = useState('');

  // Start recording function
  const startRecording = async () => {
    setRecording(true);
    setError('');

    // Logic for starting audio recording using the browser's MediaRecorder API
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      const audioChunks = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        const formData = new FormData();
        formData.append('audio', audioBlob);

        // Sending audio data to the backend for ASR processing
        try {
          const response = await fetch('/api/voice-control', {
            method: 'POST',
            body: formData,
          });
          const responseData = await response.json();
          setVoiceCommand(responseData.command);
        } catch (error) {
          setError('Failed to recognize the audio input');
        }
      };

      mediaRecorder.start();

      setTimeout(() => {
        mediaRecorder.stop();
        setRecording(false);
      }, 5000); // Recording for 5 seconds
    } catch (error) {
      setError('Failed to access microphone.');
      setRecording(false);
    }
  };

  return (
    <div className="voice-control-container">
      <button onClick={startRecording} disabled={recording}>
        {recording ? 'Recording...' : 'Start Voice Command'}
      </button>
      {voiceCommand && (
        <div className="voice-command-output">
          <h4>Recognized Command:</h4>
          <p>{voiceCommand}</p>
        </div>
      )}
      {error && (
        <div className="voice-command-error">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default VoiceControl;
