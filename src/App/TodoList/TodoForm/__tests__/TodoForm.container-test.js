import React from 'react';
import { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import TodoForm from '../TodoForm.container';
import { Actions } from '../TodoForm.actions';

const mockStore = configureMockStore([]);

const todos = { present: [] };

describe('container <TodoForm />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<TodoForm />, {
      context: { store: mockStore({}) },
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should not add Todo if input value is undefined', () => {
    const store = mockStore({ todos });
    const wrapper = mount(<TodoForm />, {
      context: { store },
    });
    wrapper.find('x-button').simulate('click');
    expect(store.getState()).toEqual({ todos });
  });

  it('should not add Todo if input value is a empty string', () => {
    const store = mockStore({ todos });
    const wrapper = mount(<TodoForm inputValue=" " />, {
      context: { store },
    });
    wrapper.find('x-button').simulate('click');
    expect(store.getState()).toEqual({ todos });
  });

  it('should add Todo if input value is not empty', () => {
    const store = mockStore({ todos });
    const text = 'Item';
    const wrapper = mount(<TodoForm inputValue={text} />, {
      context: { store },
    });
    wrapper.find('x-button').simulate('click');
    expect(store.getActions()).toEqual([{
      type: Actions.ADD_TODO,
      payload: {
        id: 0,
        text,
      },
    }]);
  });
});
