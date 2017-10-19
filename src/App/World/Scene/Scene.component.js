// @flow
import React from 'react';
import {
  SceneModule,
  DefineModule,
  PerspectiveCamera,
  RenderingModule,
  OrbitControlsModule,
  ResizeModule,
} from 'whs/build/whs';
import { App } from 'react-whs';
import * as THREE from 'three';

type Props = {
  container: HTMLDivElement,
  width: number,
  height: number,
  style: {},
  children: any
};

export default class Scene extends React.Component<Props> {
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
        aspect: width / height,
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
    const { style, container, children } = this.props;
    return (
      <App
        modules={this.modules}
        parentStyle={style}
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
