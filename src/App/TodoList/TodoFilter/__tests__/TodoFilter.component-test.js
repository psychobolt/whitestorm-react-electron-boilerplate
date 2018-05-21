import React from 'react';
import { shallow } from 'enzyme';

import TodoFilter from '../TodoFilter.component';

it('TodoFilter should render without crashing', () => {
  const wrapper = shallow(<TodoFilter />);
  wrapper.dive();
});
