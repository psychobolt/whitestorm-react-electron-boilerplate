import React from 'react';
import { shallow, mount } from 'enzyme';

import World from '../World.component';

describe('component <World />', () => {
  it('should render correctly with Box by default', () => {
    const wrapper = mount(<World />);
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
