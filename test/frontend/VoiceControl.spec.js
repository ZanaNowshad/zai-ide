
// FILE: /mnt/data/ai-ide/test/frontend/VoiceControl.spec.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import VoiceControl from '../../src/components/VoiceControl/VoiceControl';

describe('VoiceControl Component - Enhanced Test with Media API Mocks', () => {
    let originalGetUserMedia;
    let mediaRecorderMock;

    beforeAll(() => {
        // Mocking MediaRecorder API
        mediaRecorderMock = jest.fn().mockImplementation(() => {
            return {
                start: jest.fn(),
                stop: jest.fn(),
                ondataavailable: jest.fn(),
                state: 'inactive',
                addEventListener: jest.fn(),
            };
        });
        global.MediaRecorder = mediaRecorderMock;

        // Mocking getUserMedia
        originalGetUserMedia = navigator.mediaDevices.getUserMedia;
        navigator.mediaDevices.getUserMedia = jest.fn().mockResolvedValue({
            getTracks: jest.fn().mockReturnValue([{ stop: jest.fn() }]),
        });
    });

    afterAll(() => {
        // Restore the original getUserMedia function
        navigator.mediaDevices.getUserMedia = originalGetUserMedia;
    });

    it('renders the Start Voice Command button', () => {
        render(<VoiceControl />);
        const buttonElement = screen.getByText('Start Voice Command');
        expect(buttonElement).toBeInTheDocument();
    });

    it('shows Recording... when the button is clicked', async () => {
        render(<VoiceControl />);
        const buttonElement = screen.getByText('Start Voice Command');
        fireEvent.click(buttonElement);

        // Check if button text changes to "Recording..."
        expect(buttonElement).toHaveTextContent('Recording...');
    });

    it('shows an error message if access to microphone fails', async () => {
        // Mocking mediaDevices.getUserMedia to throw an error
        navigator.mediaDevices.getUserMedia.mockImplementationOnce(() => {
            return Promise.reject(new Error('Failed to access microphone.'));
        });

        render(<VoiceControl />);
        const buttonElement = screen.getByText('Start Voice Command');
        fireEvent.click(buttonElement);

        // Check if error message is shown
        const errorElement = await screen.findByText('Failed to access microphone.');
        expect(errorElement).toBeInTheDocument();
    });
});
