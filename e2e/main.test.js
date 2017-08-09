import test from 'ava';
import {Application} from 'spectron';
import path from 'path';

let electronPath = path.join(__dirname, '..', 'node_modules', '.bin', 'electron');
if (process.platform === 'win32') {
  electronPath += '.cmd';
}

let appPath = path.join(__dirname, '..');

test.beforeEach(async t => {
  t.context.app = new Application({
    path: electronPath,
    args: [appPath]
  });

  await t.context.app.start();
});

test.afterEach.always(async t => {
  await t.context.app.stop();
});

test(async t => {
  const app = t.context.app;
  await app.client.waitUntilWindowLoaded();

  const win = app.browserWindow;
  t.is(await app.client.getWindowCount(), 1);
  t.false(await win.isMinimized());
  t.false(await win.isDevToolsOpened());
  t.true(await win.isVisible());

  const {width, height} = await win.getBounds();
  t.true(width > 0);
  t.true(height > 0);
});