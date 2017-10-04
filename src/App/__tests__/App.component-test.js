import React from 'react';
import { shallow } from 'enzyme';

import App from '../App.component';

test('component <App /> should render correctly', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
