import React from 'react';
import { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import TodoList from '../TodoList.container';
import { toggleTodo } from '../TodoList.actions';
import TodoItem from '../TodoItem';

const mockStore = configureMockStore([]);

const completedTodo = {
  id: 0,
  text: 'Completed Item',
  completed: true,
};
const activeTodo = {
  id: 1,
  text: 'Active Item',
  completed: false,
};
const todos = { present: [completedTodo, activeTodo] };

describe('container <TodoList />', () => {
  it('TodoList should render without crashing', () => {
    shallow(<TodoList />, {
      context: { store: mockStore({ todos }) },
    });
  });

  it('TodoList should dispatch action on TodoItem click', () => {
    const id = 0;
    const store = mockStore({ todos });
    const wrapper = mount(<TodoList />, {
      context: { store },
    });
    wrapper.find(TodoItem).at(0).find('x-checkbox').simulate('click');
    expect(store.getActions()).toEqual([toggleTodo(id)]);
  });
});
