// @flow
import React, { type ComponentType } from 'react';
import onElementResize from 'element-resize-event';
import styled from 'styled-components';

import * as styles from './Resizable.style';

type Props = {
  className?: string
};

type State = {
  width: number,
  height: number,
  mounted: boolean
};

const Container = styled.div`${styles.container}`;

const ResizableContainer = (WrappedComponent: ComponentType<any>) => class extends
  React.Component<Props, State> {
  static defaultProps = {
    className: null,
  }

  element: ?HTMLDivElement;

  constructor(props: Props) {
    super(props);
    this.state = {
      width: 1,
      height: 1,
      mounted: false,
    };
  }

  componentDidMount() {
    /* istanbul ignore else */
    if (this.element) {
      this.onMount(() => this.setState({
        ...this.getDimensions(),
        mounted: true,
      }));
    }
  }

  onMount = (callback: () => mixed) => {
    callback();
  }

  onResize = () => {
    this.setState({
      ...this.getDimensions(),
    });
  }

  getDimensions() {
    /* istanbul ignore else */
    if (this.element) {
      const box: ClientRect = this.element.getBoundingClientRect();
      return {
        width: box.width,
        height: box.height,
      };
    }
    /* istanbul ignore next */
    return {};
  }

  render() {
    const { className, ...rest } = this.props;
    const { width, height, mounted } = this.state;
    const { element, onResize } = this;
    const props = {
      containerEl: element,
      containerWidth: width,
      containerHeight: height,
      registerResizeListener: () => {
        onElementResize(element, onResize);
      },
    };
    return (
      <Container className={className} ref={ref => { this.element = ref; }}>
        {mounted && <WrappedComponent {...rest} {...props} />}
      </Container>
    );
  }
};

export default ResizableContainer;
