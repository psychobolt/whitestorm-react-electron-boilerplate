import React from 'react';
import { shallow } from 'enzyme';

import App from '../App.component';

test('component <App /> should render without crashing', () => {
  shallow(<App />);
});
