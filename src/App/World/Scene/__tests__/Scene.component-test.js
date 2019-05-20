
import React from 'react';
import { mount } from 'enzyme';

import Scene from '../Scene.component'; // eslint-disable-line import/no-named-as-default

jest.mock('../Scene.component');

test('component <Scene /> should render without crashing', () => {
  mount(<Scene />);
});
