import React from 'react';
import { shallow } from 'enzyme';

import TodoFilter from '../TodoFilter.component';

it('TodoFilter should render without crashing', () => {
  shallow(<TodoFilter />);
});
