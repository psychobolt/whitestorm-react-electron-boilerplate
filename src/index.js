import app from './app';

app();

if (module.hot) {
  module.hot.accept('./app', () => {
    const nextApp = require('./app').default; // eslint-disable-line global-require
    nextApp();
  });
}
