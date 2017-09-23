import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import { Filters } from '../TodoList';
import App from '../App.component';

const mockStore = configureMockStore([]);

describe('component <App />', () => {
  [Filters.ALL, undefined].forEach(filter => {
    it(` should render correctly with filter ${filter}`, () => {
      const props = {
        match: {
          params: { filter },
        },
      };
      const store = mockStore({ todos: [] });
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter keyLength={0}>
            <App {...props} />
          </MemoryRouter>
        </Provider>,
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
