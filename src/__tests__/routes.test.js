import React from 'react';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import createHistory from 'history/createMemoryHistory';

import Routes from '../routes';

const mockStore = configureMockStore([]);

test('component <Routes /> should render correctly', () => {
  const props = {
    history: createHistory({ keyLength: 0 }),
    store: mockStore({}),
  };
  const wrapper = shallow(<Routes {...props} />);
  expect(wrapper).toMatchSnapshot();
});
