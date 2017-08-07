# React Electron Boilerplate

The essential React-Electron Boilerplate.

## Setup

1. Clone the repository
2. Install the latest [Node JS](https://nodejs.org/) and [Yarn](https://yarnpkg.com) and simply run ```yarn``` or ```yarn install``` command in the project directory.
3. ```git remote add base https://github.com/psychobolt/electron-boilerplate```

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

## Merging from base project

This project is a fork from psychobolt's [electron-boilerplate](https://github.com/psychobolt/electron-boilerplate). Merge, ```git merge base/master```, and fix any conflicts before commit.

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
