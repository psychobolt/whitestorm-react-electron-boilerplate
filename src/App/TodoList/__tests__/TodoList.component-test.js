import React from 'react';
import { shallow, mount } from 'enzyme';

import TodoList from '../TodoList.component';

describe('components <TodoList />', () => {
  it('TodoList should render without items', () => {
    const props = {
      todos: [],
      onTodoClick: jest.fn(),
    };
    shallow(<TodoList {...props} />);
  });

  it('TodoList should render without crashing -- completed', () => {
    const props = {
      todos: [{
        id: 1,
        completed: true,
        text: 'TodoItem',
      }],
      onTodoClick: jest.fn(),
    };
    shallow(<TodoList {...props} />);
  });

  it('TodoList should render without crashing -- not completed', () => {
    const props = {
      todos: [{
        id: 1,
        completed: false,
        text: 'TodoItem',
      }],
      onTodoClick: jest.fn(),
    };
    shallow(<TodoList {...props} />);
  });

  it('TodoList should call callback on item click', () => {
    const props = {
      todos: [{
        id: 1,
        completed: false,
        text: 'TodoItem',
      }],
      onTodoClick: jest.fn(),
    };
    const wrapper = mount(<TodoList {...props} />);
    wrapper.find('x-checkbox').first().simulate('click');
    expect(props.onTodoClick.mock.calls.length).toBe(1);
  });
});
