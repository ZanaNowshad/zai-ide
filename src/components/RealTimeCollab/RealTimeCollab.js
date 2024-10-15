
// FILE: /mnt/data/ai-ide/src/components/RealTimeCollab/RealTimeCollab.js

import React, { useEffect, useRef } from 'react';
import io from 'socket.io-client';

function RealTimeCollab({ roomId }) {
  const socketRef = useRef(null);
  const editorRef = useRef(null);

  useEffect(() => {
    // Connecting to the server with Socket.IO
    socketRef.current = io('http://localhost:5000');

    // Joining the specified room
    socketRef.current.emit('joinRoom', roomId);

    // Listening for changes from other users
    socketRef.current.on('receiveChange', (content) => {
      if (editorRef.current) {
        editorRef.current.value = content;
      }
    });

    // Clean up on component unmount
    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId]);

  const handleEditorChange = (e) => {
    const content = e.target.value;
    // Emitting changes to other users in the room
    socketRef.current.emit('editorChange', { room: roomId, content });
  };

  return (
    <div className="real-time-collab-container">
      <textarea
        ref={editorRef}
        className="real-time-collab-editor"
        onChange={handleEditorChange}
        placeholder="Collaborate in real-time..."
      />
    </div>
  );
}

export default RealTimeCollab;
