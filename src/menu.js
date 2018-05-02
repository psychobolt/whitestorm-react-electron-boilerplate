import { app, Menu } from 'electron';

import { undoTodo, redoTodo } from './App/TodoList/TodoList.actions';

export default (win, store) => {
  let todos = store.getState();

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

  const todoMenu = () => ({
    label: 'Todos',
    submenu: [
      {
        label: 'Undo',
        accelerator: `CommandOrControl+Shift+${process.platform === 'darwin' ? 'U' : 'Z'}`,
        click: () => store.dispatch(undoTodo()),
        enabled: todos.past.length > 0,
      },
      {
        label: 'Redo',
        accelerator: 'CommandOrControl+Shift+Y',
        click: () => store.dispatch(redoTodo()),
        enabled: todos.future.length > 0,
      },
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
    todoMenu(todos),
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

  const [undoTodoItem, redoTodoItem] = menu.items[process.platform === 'darwin' ? 3 : 1].submenu.items;
  store.subscribe(() => {
    todos = store.getState();
    undoTodoItem.enabled = todos.past.length > 0;
    redoTodoItem.enabled = todos.future.length > 0;
  });

  return menu;
};
