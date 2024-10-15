
// FILE: /mnt/data/ai-ide/test/frontend/jest.config.js

module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.+(js|jsx)', '**/?(*.)+(spec|test).+(js|jsx)'],
  transform: {
    '^.+\.(js|jsx)$': 'babel-jest'
  },
};
