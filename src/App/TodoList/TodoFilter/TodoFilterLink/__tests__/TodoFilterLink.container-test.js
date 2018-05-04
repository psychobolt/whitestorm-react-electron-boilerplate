import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import renderTest from 'Framework/ReactRouterRenderTest';
import TodoFilterLink, { ROOT } from '../TodoFilterLink.container';
import Filters from '../../TodoFilter.filters';

const mockStore = configureMockStore([]);

describe('container <TodoFilterLink />', () => {
  it('should render correctly without crashing', () => {
    shallow(<TodoFilterLink filter={Filters.ALL}>{Filters.ALL}</TodoFilterLink>, {
      context: { store: mockStore({}) },
    });
  });

  it('should go to / when ALL filter is clicked', () => {
    const props = {
      store: mockStore({}),
      filter: Filters.ALL,
    };
    const pathname = `/${Filters.ACTIVE}`;
    const wrapper = renderTest(<TodoFilterLink {...props}>{props.filter}</TodoFilterLink>, {
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
    });
    wrapper.find('x-tab').simulate('click');
  });

  it('should go to /active when ACTIVE filter is clicked', () => {
    const props = {
      store: mockStore({}),
      filter: Filters.ACTIVE,
    };
    const pathname = `/${props.filter}`;
    const wrapper = renderTest(<TodoFilterLink {...props}>{props.filter}</TodoFilterLink>, {
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
    });
    wrapper.find('x-tab').simulate('click');
  });
});
