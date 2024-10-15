
// FILE: /mnt/data/ai-ide/test/backend/quantumSupportService.test.js
const { quantumCodingSupport } = require('../../backend/services/quantumSupportService');

describe('Quantum Coding Support Service', () => {
    it('should provide suggestions for quantum algorithms', async () => {
        const prompt = 'Create a quantum teleportation algorithm';
        const response = await quantumCodingSupport(prompt);
        expect(response).toBeTruthy();
    });
});
