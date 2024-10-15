
// FILE: /mnt/data/ai-ide/test/frontend/AIChatPopup.spec.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AIChatPopup from '../../src/components/AIChatPopup/AIChatPopup';

describe('AIChatPopup Component - Simplified Test', () => {
    it('renders the AI chat input field', () => {
        render(<AIChatPopup />);
        const inputElement = screen.getByPlaceholderText('Ask something...');
        expect(inputElement).toBeInTheDocument();
    });
});
