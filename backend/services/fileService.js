
// FILE: /mnt/data/ai-ide/backend/services/fileService.js

const fs = require('fs').promises;
const path = require('path');

// Function to create a new file
exports.createFile = async (filePath, content) => {
    try {
        await fs.writeFile(path.resolve(filePath), content);
        return 'File created successfully.';
    } catch (error) {
        throw new Error('Failed to create file.');
    }
};

// Function to read a file
exports.readFile = async (filePath) => {
    try {
        const content = await fs.readFile(path.resolve(filePath), 'utf-8');
        return content;
    } catch (error) {
        throw new Error('Failed to read file.');
    }
};

// Function to update a file
exports.updateFile = async (filePath, content) => {
    try {
        await fs.writeFile(path.resolve(filePath), content);
        return 'File updated successfully.';
    } catch (error) {
        throw new Error('Failed to update file.');
    }
};

// Function to delete a file
exports.deleteFile = async (filePath) => {
    try {
        await fs.unlink(path.resolve(filePath));
        return 'File deleted successfully.';
    } catch (error) {
        throw new Error('Failed to delete file.');
    }
};
