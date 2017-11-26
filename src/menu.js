import { Menu } from 'electron';

import { undoTodo, redoTodo } from './App/TodoList/TodoList.actions';

export default store => {
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

  const menu = Menu.buildFromTemplate([
    { role: 'editMenu' },
    viewMenu(),
    todoMenu(todos),
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
