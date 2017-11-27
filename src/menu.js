import { Menu } from 'electron';

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
        accelerator: 'CommandOrControl+Shift+Z',
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
    todoMenu(todos),
    ...(process.env.NODE_ENV === 'development' ? [goMenu()] : []),
    { role: 'windowMenu' },
  ]);

  const [undoTodoItem, redoTodoItem] = menu.items[1].submenu.items;
  store.subscribe(() => {
    todos = store.getState();
    undoTodoItem.enabled = todos.past.length > 0;
    redoTodoItem.enabled = todos.future.length > 0;
  });

  return menu;
};
