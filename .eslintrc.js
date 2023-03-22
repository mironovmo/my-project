module.exports = {
    'env': {
        node: true,
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        '@typescript-eslint',
        'i18next',
    ],
    'overrides': [
        {
            files: ['**/src**/*.test.{ts.tsx}'],
            rules: {
                'i18next/no-literal-string': 0,
            }
        }
    ],
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'windows'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/ban-ts-comment': 'warn',
        'i18next/no-literal-string': ['error', { markupOnly: true }],
        'object-curly-spacing': ['error', 'always'],
    }
};
