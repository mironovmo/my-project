export default {
    clearMocks: true,
    testEnvironment: 'jsdom',
    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\'
    ],
    modulePaths: [
        '<rootDir>/src'
    ],
    setupFilesAfterEnv: [
        '<rootDir>/config/jest/setupTests.ts'
    ],
    rootDir: '../../',
    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'
    ],
    moduleDirectories: [
        'node_modules'
    ],
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node'
    ],
    moduleNameMapper: {
        '\\.s?css$': 'identity-obj-proxy',
        '^.+\\.svg$': '<rootDir>/config/jest/jestEmptyComponent.tsx',
    },
};
