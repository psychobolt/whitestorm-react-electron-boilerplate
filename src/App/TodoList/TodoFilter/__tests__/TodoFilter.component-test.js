import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../TodoFilter.component';

test('TodoFilter should render correctly', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper).toMatchSnapshot();
});
