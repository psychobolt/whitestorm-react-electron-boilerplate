import React from 'react';
import { mount } from 'enzyme';

import Scene from '../Scene.component';

test('component <Scene /> should render correctly', () => {
  const wrapper = mount(<Scene />);
  expect(wrapper).toMatchSnapshot();
});
