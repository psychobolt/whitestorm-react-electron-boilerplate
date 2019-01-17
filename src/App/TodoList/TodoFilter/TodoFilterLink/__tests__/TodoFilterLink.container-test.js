import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import renderTest from 'Framework/ReactRouterRenderTest';
import TodoFilterLink, { ROOT } from '../TodoFilterLink.container';
import Filters from '../../TodoFilter.filters';

const mockStore = configureMockStore([]);

describe('container <TodoFilterLink />', () => {
  it('should render correctly without crashing', () => {
    shallow(
      <TodoFilterLink filter={Filters.ALL}>
        {Filters.ALL}
      </TodoFilterLink>,
    );
  });

  it('should go to / when ALL filter is clicked', () => {
    const filter = Filters.ALL;
    const store = mockStore({});
    const pathname = `/${Filters.ACTIVE}`;
    const wrapper = renderTest(
      <Provider store={store}>
        <TodoFilterLink filter={filter}>
          {filter}
        </TodoFilterLink>
      </Provider>,
      {
        initialEntries: [`/${Filters.ACTIVE}`],
        initialIndex: 0,
        steps: [
          ({ history }) => {
            expect(history.location.pathname).toBe(pathname);
          },
          ({ history }) => {
            expect(history.location.pathname).toBe(ROOT);
          },
        ],
      },
    );
    wrapper.find('x-tab').simulate('click');
  });

  it('should go to /active when ACTIVE filter is clicked', () => {
    const filter = Filters.ACTIVE;
    const store = mockStore({});
    const pathname = `/${filter}`;
    const wrapper = renderTest(
      <Provider store={store}>
        <TodoFilterLink filter={filter}>
          {filter}
        </TodoFilterLink>
      </Provider>,
      {
        initialEntries: [ROOT],
        initialIndex: 0,
        steps: [
          ({ history }) => {
            expect(history.location.pathname).toBe(ROOT);
          },
          ({ history }) => {
            expect(history.location.pathname).toBe(pathname);
          },
        ],
      },
    );
    wrapper.find('x-tab').simulate('click');
  });
});
