
// FILE: /mnt/data/ai-ide/test/frontend/FileExplorer.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FileExplorer from '../../src/components/FileExplorer/FileExplorer';

describe('FileExplorer Component', () => {
    it('renders file explorer title', () => {
        render(<FileExplorer />);
        const titleElement = screen.getByText('File Explorer');
        expect(titleElement).toBeInTheDocument();
    });

    it('displays a list of files', async () => {
        render(<FileExplorer />);
        const fileList = await screen.findByRole('list');
        expect(fileList).toBeInTheDocument();
    });
});
