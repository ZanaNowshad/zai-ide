
// FILE: /mnt/data/ai-ide/test/frontend/AIChatPopup.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AIChatPopup from '../../src/components/AIChatPopup/AIChatPopup';

describe('AIChatPopup Component', () => {
    it('renders AI chat input field', () => {
        render(<AIChatPopup />);
        const inputElement = screen.getByPlaceholderText('Ask something...');
        expect(inputElement).toBeInTheDocument();
    });

    it('calls AI response when button is clicked', async () => {
        render(<AIChatPopup />);
        const inputElement = screen.getByPlaceholderText('Ask something...');
        fireEvent.change(inputElement, { target: { value: 'How to create a loop in JavaScript?' } });

        const askButton = screen.getByText('Ask AI');
        fireEvent.click(askButton);

        // Verify if response field becomes available
        const responseField = await screen.findByText('AI Response:');
        expect(responseField).toBeInTheDocument();
    });
});
