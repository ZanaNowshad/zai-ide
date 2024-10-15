
// FILE: /mnt/data/ai-ide/backend/controllers/qiskitSupportController.js
const { qiskitCodingSupport, runQiskitCode } = require('../services/qiskitSupportService');

// Provides coding assistance for Qiskit
exports.qiskitCodingSupport = async (req, res) => {
    try {
        const { prompt } = req.body;
        const qiskitAssistance = await qiskitCodingSupport(prompt);
        res.json({ qiskitAssistance });
    } catch (error) {
        res.status(500).json({ error: 'Error providing Qiskit-based quantum coding assistance.' });
    }
};

// Runs Qiskit code for quantum circuit simulation
exports.runQiskitCode = async (req, res) => {
    try {
        const { code } = req.body;
        const result = await runQiskitCode(code);
        res.json({ result });
    } catch (error) {
        res.status(500).json({ error: 'Error running Qiskit code.' });
    }
};
