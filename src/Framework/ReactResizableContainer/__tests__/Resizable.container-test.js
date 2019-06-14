// @flow
import * as React from 'react';
import { shallow, mount } from 'enzyme';
import onElementResize, { unbind } from 'element-resize-event';

import withResizableContainer from '../Resizable.container';

jest.mock('element-resize-event', () => {
  const module = jest.fn((element, callback) => jest.fn(() => callback()));
  module.unbind = jest.fn();
  return module;
});

type Props = {
  registerResizeListener: () => void
}

class ResizeListenerTest extends React.Component<Props> {
  resized = 0;

  componentWillMount() {
    const { registerResizeListener } = this.props;
    this.unregisterResizeListener = registerResizeListener();
  }

  componentWillUpdate() {
    this.resized += 1;
  }

  componentWillUnmount() {
    this.unregisterResizeListener();
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

  it('should register/unregister listener on mount/unmount', () => {
    const Component = withResizableContainer(ResizeListenerTest);
    const wrapper = mount(<Component />);
    expect(onElementResize.mock.calls.length).toBe(1);
    wrapper.unmount();
    expect(unbind.mock.calls.length).toBe(1);
  });

  it('should calculate new dimensions on resize', () => {
    const Component = withResizableContainer(ResizeListenerTest);
    const wrapper = mount(<Component />);
    wrapper.first().instance().onResize();
    expect(wrapper.find(ResizeListenerTest).instance().resized).toBe(1);
  });
});
