# Electron Boilerplate

[![Build Status](https://travis-ci.org/psychobolt/electron-boilerplate.svg?branch=master)](https://travis-ci.org/psychobolt/electron-boilerplate) [![Dependencies Status](https://david-dm.org/psychobolt/electron-boilerplate.svg)](https://david-dm.org/psychobolt/electron-boilerplate)

A minimalistic Electron boilerplate based on the official [quick start](https://electron.atom.io/docs/tutorial/quick-start/) tutorial.

## Included

- [electron-builder](https://github.com/electron-userland/electron-builder)
- [Jest](https://facebook.github.io/jest)
- [Spectron](https://electron.atom.io/spectron/) + [EVA](https://github.com/avajs/ava)

## Setup

Install the latest [Node JS](https://nodejs.org/) and [Yarn](https://yarnpkg.com) and simply run ```yarn``` or ```yarn install``` command in the project directory.

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
