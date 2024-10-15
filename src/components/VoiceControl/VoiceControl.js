
// FILE: /mnt/data/ai-ide/src/components/VoiceControl/VoiceControl.js

import React, { useEffect, useState } from 'react';
import './VoiceControl.css';

function VoiceControl({ onCommand }) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) {
      console.error('Voice recognition not supported in this browser.');
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      let interimTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          const finalTranscript = event.results[i][0].transcript.trim();
          setTranscript(finalTranscript);
          onCommand(finalTranscript);
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }
    };

    recognition.onerror = (event) => {
      console.error('Voice recognition error:', event.error);
    };

    if (isListening) {
      recognition.start();
    } else {
      recognition.stop();
    }

    return () => {
      recognition.stop();
    };
  }, [isListening, onCommand]);

  const toggleListening = () => {
    setIsListening(!isListening);
  };

  return (
    <div className="voice-control-container">
      <button className="voice-control-button" onClick={toggleListening}>
        {isListening ? 'Stop Listening' : 'Start Voice Control'}
      </button>
      <div className="voice-transcript">
        {transcript && <p>Command: {transcript}</p>}
      </div>
    </div>
  );
}

export default VoiceControl;
