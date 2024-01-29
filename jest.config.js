module.exports = {
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    testEnvironment: 'jsdom',
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
};