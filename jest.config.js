
module.exports = {
  moduleNameMapper: {
    '\\.(css|less|scss)$': '<rootDir>/test/__mocks__/styleMock.js', // Mock CSS imports using an empty object
    'monaco-editor': '<rootDir>/test/__mocks__/monacoMock.js' // Mock Monaco Editor
  },
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.js'],
  testEnvironment: 'jsdom'
}
