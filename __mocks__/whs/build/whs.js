import * as WHS from 'whs/build/whs';

export class MockModule {
}

WHS.RenderingModule = MockModule;
WHS.ResizeModule = MockModule;
WHS.OrbitControlsModule = MockModule;

module.exports = {
  ...WHS,
};
