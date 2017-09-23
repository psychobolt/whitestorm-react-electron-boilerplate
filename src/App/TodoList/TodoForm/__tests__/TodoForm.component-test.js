import React from 'react';
import { shallow, mount } from 'enzyme';

import TodoForm, { KEYCODE_ENTER } from '../TodoForm.component';

const KEYCODE_1 = 49;

describe('component <TodoForm />', () => {
  it('should render correctly', () => {
    const props = {
      onValueSubmit: jest.fn(),
    };
    const wrapper = shallow(<TodoForm {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state on keyup', () => {
    const props = {
      onValueSubmit: jest.fn(),
    };
    const value = '1';
    const wrapper = mount(<TodoForm {...props} />);
    const input = wrapper.find('input');
    input.node.value = value;
    input.simulate('keyup', {
      keyCode: KEYCODE_1,
    });
    expect(props.onValueSubmit.mock.calls.length).toBe(0);
    expect(wrapper.state().inputValue).toBe(value);
  });

  it('should submit form on key ENTER', () => {
    const props = {
      onValueSubmit: jest.fn(),
    };
    const wrapper = mount(<TodoForm {...props} />);
    wrapper.find('input').simulate('keyup', {
      keyCode: KEYCODE_ENTER,
    });
    expect(props.onValueSubmit.mock.calls.length).toBe(1);
  });
});
