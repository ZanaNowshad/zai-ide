
// FILE: /mnt/data/ai-ide/test/backend/aiPairService.test.js
const { pairProgrammingAssist } = require('../../backend/services/aiPairService');

describe('AI Pair Programming Assistance', () => {
    it('should provide pair programming suggestions', async () => {
        const codeContext = 'function add(a, b) { return a + b; }';
        const prompt = 'Suggest improvements to this function';
        
        const response = await pairProgrammingAssist(codeContext, prompt);
        expect(response).toBeTruthy();
    });

    it('should throw error on invalid input', async () => {
        try {
            await pairProgrammingAssist(null, null);
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
});
