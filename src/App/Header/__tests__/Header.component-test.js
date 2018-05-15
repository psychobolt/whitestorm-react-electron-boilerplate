import React from 'react';
import { shallow } from 'enzyme';

import Header from '../Header.component';

test('component <Header /> should render without crashing', () => {
  shallow(<Header />);
});
