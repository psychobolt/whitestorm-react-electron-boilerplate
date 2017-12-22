import React from 'react';
import { shallow, mount } from 'enzyme';

import XInput, { EVENT_KEYUP } from '../XInput.container';

class XInputMock extends XInput {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    const input = document.createElement('input');
    this.el.appendChild(input);
    this.el['#input'] = input;
  }

  render() {
    return <div>XInput mocked</div>;
  }
}

describe('components <XInput>', () => {
  it('should render correctly -- with fallback', () => {
    const props = {
      onKeyup: jest.fn(),
    };
    const wrapper = shallow(<XInput {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should trigger on keyup event -- with fallback', () => {
    const props = {
      onKeyup: jest.fn(),
      value: 'value',
    };
    const wrapper = mount(<XInput {...props} />);
    wrapper.find('input').simulate('keyup');
    expect(props.onKeyup.mock.calls.length).toBe(1);
  });

  it('should trigger on keyup event -- without fallback', () => {
    const props = {
      onKeyup: jest.fn(),
      value: 'value',
    };
    const wrapper = mount(<XInputMock {...props} />);
    const keyup = new KeyboardEvent(EVENT_KEYUP);
    const instance = wrapper.instance();
    instance.input.dispatchEvent(keyup);
    expect(props.onKeyup.mock.calls.length).toBe(1);
  });

  it('should update input on state change -- without fallback', () => {
    const props = {
      onKeyup: jest.fn(),
    };
    let value = 'value';
    const wrapper = shallow(<XInputMock {...props} value={value} />, {
      lifecycleExperimental: true,
    });
    const instance = wrapper.instance();
    expect(instance.input.value).toBe(value);
    value = 'new value';
    wrapper.setProps({ value });
    expect(instance.input.value).toBe(value);
  });

  it('should remove event listener on destroy -- without fallback', () => {
    const props = {
      onKeyup: jest.fn(),
    };
    const wrapper = mount(<XInputMock {...props} />);
    const keyup = new KeyboardEvent(EVENT_KEYUP);
    const instance = wrapper.instance();
    wrapper.unmount();
    instance.input.dispatchEvent(keyup);
    expect(props.onKeyup.mock.calls.length).toBe(0);
  });
});
