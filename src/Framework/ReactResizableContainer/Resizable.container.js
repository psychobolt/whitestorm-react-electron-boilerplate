// @flow
import React, { type ComponentType } from 'react';
import onElementResize, { unbind as offElementResize } from 'element-resize-event';

type Props = {};

type State = {
  width: number,
  height: number,
  mounted: boolean
};

const styles = {
  container: {
    width: '100%',
    height: '100%',
  },
};

const ResizableContainer = (WrappedComponent: ComponentType<any>) =>
  class extends React.Component<Props, State> {
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

    componentWillUnmount() {
      /* istanbul ignore else */
      if (this.element) {
        offElementResize(this.element.parentNode);
      }
    }

    onMount = (callback: () => mixed) => {
      callback();
    }

    onResize() {
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

    registerResizeListener = () => {
      /* istanbul ignore else */
      if (this.element) {
        onElementResize(this.element.parentNode, this.onResize);
      }
    }

    element: ?HTMLDivElement;

    render() {
      const { width, height, mounted } = this.state;
      const props = {
        containerEl: this.element,
        containerWidth: width,
        containerHeight: height,
        registerResizeListener: this.registerResizeListener,
      };
      return (
        <div style={styles.container} ref={ref => { this.element = ref; }}>
          {mounted && <WrappedComponent {...this.props} {...props} />}
        </div>
      );
    }
  };

export default ResizableContainer;
