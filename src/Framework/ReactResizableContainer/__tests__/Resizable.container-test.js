import React from 'react';
import { shallow, mount } from 'enzyme';
import onElementResize from 'element-resize-event';

import withResizableContainer from '../Resizable.container';

jest.mock('element-resize-event', () => {
  const module = jest.fn((element, callback) => jest.fn(() => callback()));
  module.unbind = jest.fn();
  return module;
});

type Props = {
  registerResizeListener: () => void
}

// @flow
class ResizeListenerTest extends React.Component<Props> {
  resized = 0;

  componentWillMount() {
    const { registerResizeListener } = this.props;
    registerResizeListener();
  }

  componentWillUpdate() {
    this.resized += 1;
  }

  render() {
    return (
      <div>
        {'test'}
      </div>
    );
  }
}

describe('component <ResizableContainer>', () => {
  it('should render without crashing', () => {
    const Test = () => (
      <div>
        {'test'}
      </div>
    );
    const Component = withResizableContainer(Test);
    shallow(<Component />);
  });

  it('should register listener on mount', () => {
    const Component = withResizableContainer(ResizeListenerTest);
    mount(<Component />);
    expect(onElementResize.mock.calls.length).toBe(1);
  });

  it('should calculate new dimensions on resize', () => {
    const Component = withResizableContainer(ResizeListenerTest);
    const wrapper = mount(<Component />);
    wrapper.childAt(0).instance().onResize();
    expect(wrapper.find(ResizeListenerTest).instance().resized).toBe(1);
  });
});
