import React from 'react';
import { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import TodoList, { mapStateToProps } from '../TodoList.container';
import { Filters } from '../';
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
  it('TodoList should render correctly', () => {
    const wrapper = shallow(<TodoList />, {
      context: { store: mockStore({ todos }) },
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('mapStateToProps -- completed', () => {
    expect(mapStateToProps({ todos }, { filter: Filters.COMPLETED }))
      .toEqual({ todos: [completedTodo] });
  });

  it('mapStateToProps -- active', () => {
    expect(mapStateToProps({ todos }, { filter: Filters.ACTIVE }))
      .toEqual({ todos: [activeTodo] });
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
