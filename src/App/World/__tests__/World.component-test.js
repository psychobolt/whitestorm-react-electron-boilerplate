import React from 'react';
import { shallow } from 'enzyme';

import { World } from '../World.component';

describe('component <World />', () => {
  it('should render correctly with Box by default', () => {
    const wrapper = shallow(<World />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with Sphere', () => {
    const props = {
      location: {
        pathname: '/sphere',
      },
    };
    const wrapper = shallow(<World {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
