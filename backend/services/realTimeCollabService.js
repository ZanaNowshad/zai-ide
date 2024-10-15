
// FILE: /mnt/data/ai-ide/backend/services/realTimeCollabService.js

const { Server } = require('socket.io');

// Function to initialize real-time collaboration with Socket.IO
function initializeCollaboration(server) {
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });

  // Handling collaboration events
  io.on('connection', (socket) => {
    console.log('A user connected: ', socket.id);

    // Joining a room for collaboration
    socket.on('joinRoom', (room) => {
      socket.join(room);
      console.log(`User ${socket.id} joined room ${room}`);
    });

    // Broadcasting changes to other users in the room
    socket.on('editorChange', ({ room, content }) => {
      socket.to(room).emit('receiveChange', content);
    });

    // Handling disconnection
    socket.on('disconnect', () => {
      console.log('User disconnected: ', socket.id);
    });
  });
}

module.exports = { initializeCollaboration };
