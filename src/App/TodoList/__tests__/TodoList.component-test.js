import React from 'react';
import { shallow } from 'enzyme';


import TodoList from '../TodoList.component';
import TodoItem from '../TodoItem';

describe('components <TodoList />', () => {
  it('TodoList should render correctly -- completed', () => {
    const props = {
      todos: [{
        id: 1,
        completed: true,
        text: 'TodoItem',
      }],
      onTodoClick: jest.fn(),
    };
    const wrapper = shallow(<TodoList {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('TodoList should render correctly -- not completed', () => {
    const props = {
      todos: [{
        id: 1,
        completed: false,
        text: 'TodoItem',
      }],
      onTodoClick: jest.fn(),
    };
    const wrapper = shallow(<TodoList {...props} />);
    expect(wrapper).toMatchSnapshot();
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
    const wrapper = shallow(<TodoList {...props} />);
    wrapper.find(TodoItem).at(0).simulate('click');
    expect(props.onTodoClick.mock.calls.length).toBe(1);
  });
});
