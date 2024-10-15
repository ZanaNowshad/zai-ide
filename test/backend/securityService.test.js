
// FILE: /mnt/data/ai-ide/test/backend/securityService.test.js
const { auditCodeSecurity } = require('../../backend/services/securityService');

describe('Security Assistant', () => {
    it('should provide security improvement suggestions', async () => {
        const codeContext = 'eval(userInput);';
        const response = await auditCodeSecurity(codeContext);
        expect(response).toContain('avoid using eval');
    });

    it('should handle large code inputs gracefully', async () => {
        const largeCodeContext = 'const x = 1;'.repeat(1000);
        const response = await auditCodeSecurity(largeCodeContext);
        expect(response).toBeTruthy();
    });
});
