
// FILE: /mnt/data/ai-ide/src/components/Terminal/Terminal.js
import React, { useEffect, useRef } from 'react';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css';
import './Terminal.css';

function TerminalComponent() {
  const terminalRef = useRef(null);
  const terminalInstance = useRef(null);

  useEffect(() => {
    if (terminalRef.current && !terminalInstance.current) {
      const fitAddon = new FitAddon();
      const terminal = new Terminal({
        theme: {
          background: '#1e1e1e',
        },
        cursorBlink: true,
      });
      terminal.loadAddon(fitAddon);
      terminal.open(terminalRef.current);
      fitAddon.fit();

      // Example initial message
      terminal.writeln('Welcome to ZAI-IDE Terminal');

      // Store the terminal instance for future use
      terminalInstance.current = terminal;
    }
  }, []);

  return <div className="terminal" ref={terminalRef}></div>;
}

export default TerminalComponent;
