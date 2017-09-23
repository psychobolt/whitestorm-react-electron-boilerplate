import React from 'react';
import { shallow } from 'enzyme';

import TodoItem from '../TodoItem.component';

describe('components <TodoItem />', () => {
  it('TodoItem should render correctly -- completed', () => {
    const props = {
      onClick: jest.fn(),
      completed: true,
      text: 'Item',
    };
    const wrapper = shallow(<TodoItem {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('TodoItem should render correctly -- not completed', () => {
    const props = {
      onClick: jest.fn(),
      completed: false,
      text: 'Item',
    };
    const wrapper = shallow(<TodoItem {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
