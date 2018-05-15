import { app, Menu } from 'electron';

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
        click: () => win.webContents.goBack(),
      },
      {
        label: 'Forward',
        accelerator: 'Alt+Right',
        click: () => win.webContents.goForward(),
      },
    ],
  });

  const template = [
    { role: 'editMenu' },
    viewMenu(),
    ...(process.env.NODE_ENV === 'development' ? [goMenu()] : []),
    { role: 'windowMenu' },
  ];

  if (process.platform === 'darwin') {
    template.unshift({
      label: app.getName(),
      submenu: [
        { role: 'about' },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideothers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' },
      ],
    });
  }

  const menu = Menu.buildFromTemplate(template);

  return menu;
};
