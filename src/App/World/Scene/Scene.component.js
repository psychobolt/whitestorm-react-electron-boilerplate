// @flow
import * as React from 'react';
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

const isDevelopment = process.env.NODE_ENV === 'development';

const Parent = defaultMemoize(className => React.forwardRef((
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

  modules: any[];

  constructor(props: Props) {
    super(props);
    const { width = 680, height = 420 } = props;
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

export default React.lazy<Props>(() => new Promise(resolve => {
  const exports = { default: Scene };
  /* istanbul ignore next */
  if (isDevelopment) {
    import('spectorjs').then(SPECTOR => {
      window.spector = new SPECTOR.Spector();
      resolve(exports);
    });
  } else {
    resolve(exports);
  }
}));
