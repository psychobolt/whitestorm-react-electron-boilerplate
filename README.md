# React Electron Boilerplate

[![Build Status](https://travis-ci.org/psychobolt/electron-boilerplate.svg?branch=master)](https://travis-ci.org/psychobolt/electron-boilerplate)
[![Dependencies Status](https://david-dm.org/psychobolt/electron-boilerplate.svg)](https://david-dm.org/psychobolt/electron-boilerplate)
[![codecov](https://codecov.io/gh/psychobolt/electron-boilerplate/branch/master/graph/badge.svg)](https://codecov.io/gh/psychobolt/electron-boilerplate)

The essential framework for React-Electron development.

## Included

- [electron-builder](https://github.com/electron-userland/electron-builder)
- [Jest](https://facebook.github.io/jest)
- [Spectron](https://electron.atom.io/spectron/) + [EVA](https://github.com/avajs/ava)
- [Codecov](https://codecov.io/)
- [ESLint](http://eslint.org/)

## Setup

1. Clone the repository
2. Install the latest [Node JS](https://nodejs.org/) and [Yarn](https://yarnpkg.com) and simply run ```yarn``` or ```yarn install``` command in the project directory.
3. ```git remote add base https://github.com/psychobolt/electron-boilerplate```

## Local development

```sh
yarn dev # running development code, same as 'yarn start'
yarn prod # running production code
```

> It may be preferred to launch with debug on main process. Visual Studio Code configuration is provided in the project.

## Adding dependencies (libraries)

```sh
yarn add [package-name]
yarn add [package-name] --dev # dev dependencies
```

## Merging from base project

This project is a fork from psychobolt's [electron-boilerplate](https://github.com/psychobolt/electron-boilerplate). Merge, ```git merge base/master```, and fix any conflicts before commit.

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
