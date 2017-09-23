import React from 'react';
import { shallow } from 'enzyme';

import TodoFilterLink from '../TodoFilterLink.component';
import Filters from '../../TodoFilter.filters';

describe('components <TodoFilterLink />', () => {
  it('TodoFilterLink should render correctly -- active link', () => {
    const props = {
      active: true,
      children: <span>Link</span>,
      filter: Filters.ALL,
    };
    const wrapper = shallow(<TodoFilterLink {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('TodoFilterLink should render correctly -- completed filter', () => {
    const props = {
      children: <span>Link</span>,
      filter: Filters.COMPLETED,
    };
    const wrapper = shallow(<TodoFilterLink {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('TodoFilterLink should render correctly -- all filter', () => {
    const props = {
      children: <span>Link</span>,
      filter: Filters.ALL,
    };
    const wrapper = shallow(<TodoFilterLink {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
