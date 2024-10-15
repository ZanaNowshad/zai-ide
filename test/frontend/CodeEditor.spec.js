
// FILE: /mnt/data/ai-ide/test/frontend/CodeEditor.spec.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CodeEditor from '../../src/components/CodeEditor/CodeEditor';

describe('CodeEditor Component - Simplified Test', () => {
    it('renders the code editor with the initial text', () => {
        render(<CodeEditor />);
        const editorElement = screen.getByText('// Start coding here...');
        expect(editorElement).toBeInTheDocument();
    });
});
