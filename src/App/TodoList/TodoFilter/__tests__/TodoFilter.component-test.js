import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../TodoFilter.component';

it('TodoFilter should render without crashing', () => {
  shallow(<Footer />);
});
