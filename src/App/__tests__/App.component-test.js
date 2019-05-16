import React from 'react';
import { shallow } from 'enzyme';

import App from '../App.component';

jest.mock('../World/Scene/Scene.component');

test('component <App /> should render without crashing', () => {
  shallow(<App />);
});
