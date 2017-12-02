import app from '../app';

let log;
const logger = global.console.log;
beforeEach(() => {
  log = '';
  global.console.log = jest.fn(message => {
    log = message;
  });
});

test('app console log', () => {
  require('../index'); // eslint-disable-line global-require
  return app().then(() => expect(log).toBe('App started'));
});

afterEach(() => {
  global.console.log = logger;
});
