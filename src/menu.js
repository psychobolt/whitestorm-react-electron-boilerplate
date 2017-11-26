import { Menu } from 'electron';

export default () => {
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

  const menu = Menu.buildFromTemplate([
    { role: 'editMenu' },
    viewMenu(),
    { role: 'windowMenu' },
  ]);

  return menu;
};
