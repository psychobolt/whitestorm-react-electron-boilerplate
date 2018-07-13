// @flow
// $FlowFixMe
import React, { forwardRef } from 'react';
import {
  SceneModule,
  DefineModule,
  PerspectiveCamera,
  RenderingModule,
  OrbitControlsModule,
  ResizeModule,
} from 'whs/build/whs';
import { App } from 'react-whs';
import { defaultMemoize } from 'reselect';
import * as THREE from 'three';
import styled from 'styled-components';

type Props = {
  container: HTMLDivElement,
  width?: number,
  height?: number,
  className: string,
  children: any
};

type ParentProps = {
  className: string,
  children: any
}

const Parent = defaultMemoize(className => forwardRef((
  { children: child, className: defaultClass, ...rest }: ParentProps, ref,
) => (
  <div className={`${defaultClass} ${className}`} ref={ref} {...rest}>
    {child}
  </div>
)));

class Scene extends React.Component<Props> {
  static defaultProps = {
    width: 680,
    height: 420,
  }

  constructor(props: Props) {
    super(props);
    const { width, height } = props;
    this.modules = [
      new SceneModule(),
      new DefineModule('camera', new PerspectiveCamera({
        aspect: (width || Scene.defaultProps.width) / (height || Scene.defaultProps.height),
        position: new THREE.Vector3(0, 10, 50),
      })),
      new RenderingModule({
        bgColor: 0x162129,
        renderer: {
          antialias: true,
          shadowmap: {
            type: THREE.PCFSoftShadowMap,
          },
        },
        width,
        height,
      }, { shadow: true }),
      new OrbitControlsModule(),
    ];
  }

  modules: any[];

  render() {
    const { container, children, className } = this.props;
    return (
      <App
        modules={this.modules}
        parent={Parent(className)}
        passAppToView={({ native }) => {
          native.manager.set('container', container);
          native.applyModule(new ResizeModule());
        }}
      >
        {children}
      </App>
    );
  }
}

export default styled(Scene)`
  /* stylelint-disable-line block-no-empty */
`;
