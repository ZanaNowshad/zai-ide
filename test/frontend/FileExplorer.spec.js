
// FILE: /mnt/data/ai-ide/test/frontend/FileExplorer.spec.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FileExplorer from '../../src/components/FileExplorer/FileExplorer';

describe('FileExplorer Component - Simplified Test', () => {
    it('renders the File Explorer title', () => {
        render(<FileExplorer />);
        const titleElement = screen.getByText('File Explorer');
        expect(titleElement).toBeInTheDocument();
    });
});
