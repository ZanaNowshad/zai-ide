
// FILE: /mnt/data/ai-ide/backend/controllers/fileController.js
const fileService = require('../services/fileService');

// Lists files in the given directory
exports.listFiles = async (req, res) => {
    try {
        const { path } = req.body;
        const files = await fileService.listFiles(path);
        res.json({ files });
    } catch (error) {
        res.status(500).json({ error: 'Error listing files.' });
    }
};
