import React from 'react';
import { mount } from 'enzyme';

import { Scene } from '../Scene.component';

test('component <Scene /> should render without crashing', () => {
  mount(<Scene />);
});
