import React from 'react';
import { shallow } from 'enzyme';

import renderTest from 'Framework/ReactRouterRenderTest';
import { XTab } from 'Framework/ReactXelToolkit';
import Link from '../Link.component';

const ROOT = '/';

describe('component <Link />', () => {
  it('should render correctly for no path', () => {
    const props = {
      to: [],
    };
    const wrapper = shallow(<Link {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly for a single path', () => {
    const props = {
      to: '/path',
    };
    const wrapper = shallow(<Link {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly for multiple paths with a default', () => {
    const props = {
      to: [{
        to: '/',
      }, {
        to: '/path',
        default: true,
      }],
    };
    const wrapper = shallow(<Link {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly for multiple paths with no default', () => {
    const props = {
      to: [{
        to: '/',
      }, {
        to: '/path',
      }],
    };
    const wrapper = shallow(<Link {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should go to path on click', () => {
    const props = {
      to: '/path',
    };
    const wrapper = renderTest(<Link {...props} />, {
      initialEntires: [ROOT],
      initialIndex: 0,
      steps: [
        ({ location }) => expect(location.pathname).toBe(ROOT),
        ({ location }) => expect(location.pathname).toBe(props.to),
      ],
    });
    wrapper.find(XTab).simulate('click');
  });
});
