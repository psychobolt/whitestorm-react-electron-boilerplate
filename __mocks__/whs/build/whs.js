import * as WHS from 'whs/build/whs';

export class RenderingModule {
}

export class ResizeModule {
}

export class OrbitControlsModule {
}

WHS.RenderingModule = RenderingModule;
WHS.ResizeModule = ResizeModule;
WHS.OrbitControlsModule = OrbitControlsModule;

module.exports = {
  ...WHS,
};
