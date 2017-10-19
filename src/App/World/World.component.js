// @flow
import React from 'react';
import { type Location } from 'react-router-dom';
import {
  Box,
  Sphere,
  Plane,
  PointLight,
  AmbientLight,
} from 'react-whs';
import * as THREE from 'three';

import withResizableContainer from 'Framework/ReactResizableContainer';
import Scene from './Scene';
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
  <Scene
    container={containerEl}
    width={containerWidth}
    height={containerHeight}
    style={styles.container}
  >
    {location && location.pathname === '/sphere' ?
      <Sphere
        key="1"
        geometry={{
          radius: 5,
          widthSegments: 32,
          heightSegments: 32,
        }}
        material={new THREE.MeshPhongMaterial({ color: 0xF2F2F2 })}
        position={{
          y: 5,
        }}
      /> :
      <Box
        key="2"
        geometry={{
          width: 10,
          height: 10,
          depth: 10,
        }}
        material={new THREE.MeshPhongMaterial({ color: 0xF2F2F2 })}
        position={{
          y: 5,
        }}
      />}
    <Plane
      key="3"
      geometry={{
        width: 100,
        height: 100,
      }}
      material={new THREE.MeshPhongMaterial({ color: 0x447F8B })}
      rotation={{
        x: -Math.PI / 2,
      }}
    />
    <PointLight
      key="4"
      intensity={0.5}
      distance={100}
      shadow={{
        fow: 90,
      }}
      position={new THREE.Vector3(0, 10, 10)}
    />
    <AmbientLight
      key="5"
      intensity={0.4}
    />
  </Scene>
);

export default withResizableContainer(World);
