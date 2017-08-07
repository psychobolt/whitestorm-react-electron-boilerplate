# Electron Boilerplate

A minimalistic Electron boilerplate based on the official [quick start](https://electron.atom.io/docs/tutorial/quick-start/) tutorial. Includes [electron-builder](https://github.com/electron-userland/electron-builder), [Jest](https://facebook.github.io/jest), and more coming soon.

## Setup

Install the latest [Node JS](https://nodejs.org/) and [Yarn](https://yarnpkg.com) and simply run ```yarn``` or ```yarn install``` command in the project directory.

## Local development

```sh
yarn dev # running development code, same as 'yarn start'
yarn prod # running production code
```

> It may preferred to launch with debug on main process. Visual Studio Code configuration is provided in the project.

## Adding dependencies (libraries)

```sh
yarn add [package-name]
yarn add [package-name] --dev # dev dependencies
```

## Test

```sh
yarn test
yarn test -- --coverage # with coverage
```

## Build

```sh
yarn build
```

For configuration details, see [electron-builder](https://github.com/electron-userland/electron-builder).
