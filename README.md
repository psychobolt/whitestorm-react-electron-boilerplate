# React Electron Boilerplate

[![Build Status](https://travis-ci.org/psychobolt/electron-boilerplate.svg?branch=master)](https://travis-ci.org/psychobolt/electron-boilerplate)
[![Dependencies Status](https://david-dm.org/psychobolt/electron-boilerplate.svg)](https://david-dm.org/psychobolt/electron-boilerplate)
[![codecov](https://codecov.io/gh/psychobolt/electron-boilerplate/branch/master/graph/badge.svg)](https://codecov.io/gh/psychobolt/electron-boilerplate)

The essential framework for React-Electron development.

## Included

- [Webpack](https://webpack.js.org/) + [Babel-loader](https://webpack.js.org/loaders/babel-loader/) with presets:
  - [Env](https://babeljs.io/docs/plugins/preset-env/) with [stage-3](http://babeljs.io/docs/plugins/preset-stage-3/) features 
  - [Flow](https://flow.org/) Type support
  - [Hot Module Reloading](https://webpack.js.org/guides/hot-module-replacement/) enabled
- Packaging support: [electron-builder](https://github.com/electron-userland/electron-builder)
- Test runner: [Jest](https://facebook.github.io/jest)
- e2e runner: [Spectron](https://electron.atom.io/spectron/) + [EVA](https://github.com/avajs/ava)
- Code Coverage reporter: [Codecov](https://codecov.io/)
- ES Linting: [ESLint](http://eslint.org/) using [AirBnb style guide](https://github.com/airbnb/javascript)

## Setup

1. Clone the repository
2. Install the latest [Node JS](https://nodejs.org/) and [Yarn](https://yarnpkg.com) and simply run ```yarn``` or ```yarn install``` command in the project directory.
3. ```git remote add base https://github.com/psychobolt/electron-boilerplate```

## Local development

During development, run watch task:
```sh
yarn watch # compile new code changes and reloads the app
```

> Alternatively, you can run watch task (npm: watch) in Visual Studio Code.

Then, in another terminal, launch Electron:
```sh
yarn dev # same as 'yarn start'
```

> Alternatively, you can launch in Visual Studio Code in debug mode.

Tesing only with production code (watch and debug unnecessary):

```sh
yarn prod
```

## Adding dependencies (libraries)

This project uses two package.json structure. For more details, see [here](https://github.com/electron-userland/electron-builder/wiki/Two-package.json-Structure).

### Default -- <root_dir>/package.json

```sh
yarn add [package-name] --dev # for dev tools
yarn add [package-name] # for app
```

### Native libraries -- <root_dir>/src/package.json

```sh
cd src/
yarn add [package-name]
```

## Merging from base project

This project is a fork from psychobolt's [electron-boilerplate](https://github.com/psychobolt/electron-boilerplate). Merge, ```git merge base/master```, and fix any conflicts before commit.

## Static Types

```sh
yarn flow # performs type checking on files
```

See [official documentation](https://flow.org/) for a usage guide.

Yarn will usually run postinstall for updating flowtype definitions when new packages are added. To manually update typed definitions yourself:

```sh
yarn flow-typed-install:dev # installs development flowtypes
yarn flow-typed-install:app # installs app flowtypes
```

See additional [documentation](https://github.com/flowtype/flow-typed) for adding type definitions.

## Lint

The watch task will automatically lint on file changes. However, you can invoke the linter directly:

```sh
yarn lint # runs linter to detect any style issues
yarn lint -- --fix # tries to fix lint issues
```

See [official documentation](https://eslint.org/) for a usage guide.

## Test

```sh
yarn test # runs functional/unit tests using Jest
yarn test -- --coverage # with coverage
yarn test-e2e # run end-to-end tests
```

## Build

```sh
yarn build
```

For configuration details, see [electron-builder](https://github.com/electron-userland/electron-builder).
