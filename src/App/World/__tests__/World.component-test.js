import React from 'react';
import { shallow } from 'enzyme';

import { World } from '../World.component';

describe('component <World />', () => {
  it('should render with Box by default, without crashing', () => {
    shallow(<World />);
  });

  it('should render with Sphere, without crashing', () => {
    const props = {
      location: {
        pathname: '/sphere',
      },
    };
    shallow(<World {...props} />);
  });
});
