
// FILE: /mnt/data/ai-ide/test/frontend/CodeEditor.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CodeEditor from '../../src/components/CodeEditor/CodeEditor';

describe('CodeEditor Component', () => {
    it('renders code editor successfully', () => {
        render(<CodeEditor />);
        const editorElement = screen.getByText('// Start coding here...');
        expect(editorElement).toBeInTheDocument();
    });

    it('calls AI Assist when button is clicked', async () => {
        render(<CodeEditor />);
        const aiButton = screen.getByText('Get AI Suggestion');
        fireEvent.click(aiButton);

        // Verify if AI response field becomes available
        const suggestionField = await screen.findByText('AI Suggestion:');
        expect(suggestionField).toBeInTheDocument();
    });

    it('calls bug detection when button is clicked', async () => {
        render(<CodeEditor />);
        const bugButton = screen.getByText('Detect & Heal Bugs');
        fireEvent.click(bugButton);

        // Verify if bug fix response becomes available
        const bugField = await screen.findByText('Bug Fix Suggestion:');
        expect(bugField).toBeInTheDocument();
    });
});
