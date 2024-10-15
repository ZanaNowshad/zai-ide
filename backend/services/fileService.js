
// FILE: /mnt/data/ai-ide/backend/services/fileService.js
const fs = require('fs').promises;
const path = require('path');

// Function to list files and directories in the given path
exports.listFiles = async (dirPath) => {
    try {
        const fullPath = path.resolve(__dirname, '../../', dirPath);
        const entries = await fs.readdir(fullPath, { withFileTypes: true });
        return entries.map(entry => ({
            name: entry.name,
            isDirectory: entry.isDirectory(),
        }));
    } catch (error) {
        throw new Error('Failed to list files.');
    }
};
