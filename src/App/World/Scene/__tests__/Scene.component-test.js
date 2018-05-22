import React from 'react';
import { shallow /* , mount */ } from 'enzyme';

import Scene from '../Scene.component';

test('component <Scene /> should render without crashing', () => {
  // mount(<Scene />); // see https://github.com/facebook/react/pull/12725
  const wrapper = shallow(<Scene />);
  wrapper.dive();
});
