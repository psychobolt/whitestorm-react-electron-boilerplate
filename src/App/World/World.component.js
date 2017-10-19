// @flow
import React from 'react';
import { type Location } from 'react-router-dom';
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

import withResizableContainer from 'Framework/ReactResizableContainer';
import Fragment from './World.fragment';
import styles from './World.styles';

type Props = {
  containerEl: HTMLDivElement,
  containerWidth: number,
  containerHeight: number,
  location: Location
};

export const World = ({
  containerEl,
  containerWidth = 680,
  containerHeight = 420,
  location,
}: Props) => (
  <App
    modules={[
      new SceneModule(),
      new DefineModule('camera', new PerspectiveCamera({
        aspect: containerWidth / containerHeight,
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
        width: containerWidth,
        height: containerHeight,
      }, { shadow: true }),
      new OrbitControlsModule(),
    ]}
    parentStyle={styles.parent}
    passAppToView={({ native }) => {
      native.manager.set('container', containerEl);
      native.applyModule(new ResizeModule());
    }}
  >
    {Fragment({ location })}
  </App>
);

export default withResizableContainer(World);
