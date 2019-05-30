const isProduction = process.env.NODE_ENV === 'production';
const isTest = process.env.BABEL_ENV === 'test';

module.exports = {
  presets: [
    ['@babel/preset-env', {
      modules: false,
      targets: {
        node: 'current',
      },
      forceAllTransforms: isProduction,
      useBuiltIns: 'entry',
      corejs: '3.0.0',
    }],
    '@babel/preset-flow',
    '@babel/preset-react',
  ],
  plugins: [
    // Stage 1
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-do-expressions',
    // Stage 2
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-throw-expressions',
    // Stage 3
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import',
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true,
      },
    ],
    '@babel/plugin-proposal-json-strings',
    // Custom
    ['module-resolver', {
      root: ['./src'],
      cwd: './',
    }],
    'babel-plugin-styled-components',
    ...(!isTest ? ['react-hot-loader/babel'] : []),
  ],
  env: {
    commonjs: {
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
      ],
    },
    test: {
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
        'dynamic-import-node',
      ],
    },
  },
};
