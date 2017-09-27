import React from 'react';
import { shallow } from 'enzyme';

import XTab from '../XTab.component';

describe('components <XTab />', () => {
  it('should render correctly -- active tab', () => {
    const props = {
      active: true,
      children: <span>Link</span>,
    };
    const wrapper = shallow(<XTab {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly -- inactive tab', () => {
    const props = {
      children: <span>Link</span>,
    };
    const wrapper = shallow(<XTab {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
