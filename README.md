# Electron Boilerplate

[![Build Status](https://travis-ci.org/psychobolt/electron-boilerplate.svg?branch=master)](https://travis-ci.org/psychobolt/electron-boilerplate)
[![Dependencies Status](https://david-dm.org/psychobolt/electron-boilerplate.svg)](https://david-dm.org/psychobolt/electron-boilerplate)
[![codecov](https://codecov.io/gh/psychobolt/electron-boilerplate/branch/master/graph/badge.svg)](https://codecov.io/gh/psychobolt/electron-boilerplate)

A minimalistic Electron boilerplate based on the official [quick start](https://electron.atom.io/docs/tutorial/quick-start/) tutorial.

## Included

- ES6 support: [Webpack](https://webpack.js.org/) + [Babel-loader](https://webpack.js.org/loaders/babel-loader/)
- Packaging support: [electron-builder](https://github.com/electron-userland/electron-builder)
- Test runner: [Jest](https://facebook.github.io/jest)
- e2e runner: [Spectron](https://electron.atom.io/spectron/) + [EVA](https://github.com/avajs/ava)
- Code Coverage reporter: [Codecov](https://codecov.io/)
- ES6 Linting: [ESLint](http://eslint.org/) using [AirBnb style guide](https://github.com/airbnb/javascript)

## Setup

Install the latest [Node JS](https://nodejs.org/) and [Yarn](https://yarnpkg.com) and simply run ```yarn``` or ```yarn install``` command in the project directory.

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

### Dev dependencies (native libraries), for <root_dir>/package.json

```sh
yarn add [package-name] --dev 
```

### App only dependencies, for <root_dir>/src/package.json

```sh
cd src/
yarn add [package-name]
```

## Lint

```sh
yarn lint # runs linter to detect any style issues
yarn lint -- --fix # tries to fix lint issues
```

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
