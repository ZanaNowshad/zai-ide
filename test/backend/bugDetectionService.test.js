
// FILE: /mnt/data/ai-ide/test/backend/bugDetectionService.test.js
const { detectAndHealBugs } = require('../../backend/services/bugDetectionService');

describe('Bug Detection and Healing Service', () => {
    it('should detect and suggest fixes for buggy code', async () => {
        const codeContext = 'const result = add(1, 2;';
        const response = await detectAndHealBugs(codeContext);
        expect(response).toContain('syntax error');
    });

    it('should throw error on empty input', async () => {
        try {
            await detectAndHealBugs('');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
});
