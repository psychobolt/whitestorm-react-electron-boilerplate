
import React, { Suspense } from 'react';
import { mount } from 'enzyme';

import Scene from '../Scene.component'; // eslint-disable-line import/no-named-as-default

test('component <Scene /> should render without crashing', () => {
  mount(<Suspense fallback={<div />}><Scene /></Suspense>);
});
