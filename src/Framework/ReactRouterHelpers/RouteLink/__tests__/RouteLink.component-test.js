import React from 'react';
import { shallow } from 'enzyme';

import renderTest from 'Framework/ReactRouterRenderTest';
import RouteLink from '../RouteLink.component';

const ROOT = '/';

describe('component <RouteLink />', () => {
  it('should render for no path, without crashing', () => {
    const props = {
      to: [],
    };
    shallow(
      <RouteLink {...props}>
        {() => <div />}
      </RouteLink>,
    );
  });

  it('should render for a single path, without crashing', () => {
    const props = {
      to: '/path',
    };
    shallow(
      <RouteLink {...props}>
        {() => <div />}
      </RouteLink>,
    );
  });

  it('should render for multiple paths with a default, without crashing', () => {
    const props = {
      to: [{
        to: '/',
      }, {
        to: '/path',
        default: true,
      }],
    };
    shallow(
      <RouteLink {...props}>
        {() => <div />}
      </RouteLink>,
    );
  });

  it('should render for multiple paths with no default, without crashing', () => {
    const props = {
      to: [{
        to: '/',
      }, {
        to: '/path',
      }],
    };
    shallow(
      <RouteLink {...props}>
        {() => <div />}
      </RouteLink>,
    );
  });

  it('should go to path on click', () => {
    const to = '/path';
    const props = { to };
    const wrapper = renderTest(
      <RouteLink {...props}>
        {routeProps => <div {...routeProps} />}
      </RouteLink>,
      {
        initialEntires: [ROOT],
        initialIndex: 0,
        steps: [
          ({ location }) => expect(location.pathname).toBe(ROOT),
          ({ location }) => expect(location.pathname).toBe(to),
        ],
      },
    );
    wrapper.find('div').simulate('click');
  });
});
