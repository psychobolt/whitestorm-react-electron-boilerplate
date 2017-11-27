import { Menu } from 'electron';

export default win => {
  const viewMenu = () => ({
    label: 'View',
    submenu: [
      { role: 'togglefullscreen' },
      ...(process.env.NODE_ENV === 'development' ? [
        { role: 'reload' },
        { role: 'toggledevtools' },
      ] : []),
    ],
  });

  const goMenu = () => ({
    label: 'Go',
    submenu: [
      {
        label: 'Back',
        accelerator: 'Alt+Left',
        click: self => {
          win.webContents.goBack();
          Object.assign(self, { enabled: win.webContents.canGoBack() });
        },
        enabled: win.webContents.canGoBack(),
      },
      {
        label: 'Forward',
        accelerator: 'Alt+Right',
        click: self => {
          win.webContents.goForward();
          Object.assign(self, { enabled: win.webContents.canGoForward() });
        },
        enabled: win.webContents.canGoForward(),
      },
    ],
  });

  const menu = Menu.buildFromTemplate([
    { role: 'editMenu' },
    viewMenu(),
    ...(process.env.NODE_ENV === 'development' ? [goMenu()] : []),
    { role: 'windowMenu' },
  ]);

  return menu;
};
