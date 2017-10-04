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

import Fragment from './World.fragment';
import styles from './World.styles';

const containerId = 'world-container';

type Props = {
  style: {
    container: {}
  },
  location: Location
};

const World = ({ style = { container: {} }, location }: Props) => (
  <div id={containerId} style={style.container}>
    <App
      modules={[
        new SceneModule(),
        new DefineModule('camera', new PerspectiveCamera({
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
        }, { shadow: true }),
        new OrbitControlsModule(),
      ]}
      parentStyle={styles.parent}
      passAppToView={({ native }) => {
        native.manager.set('container', document.getElementById(containerId));
        native.applyModule(new ResizeModule());
      }}
    >
      {Fragment({ location })}
    </App>
  </div>
);

export default World;
