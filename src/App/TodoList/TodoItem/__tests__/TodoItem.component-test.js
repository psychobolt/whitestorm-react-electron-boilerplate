import React from 'react';
import { shallow } from 'enzyme';

import TodoItem from '../TodoItem.component';

describe('components <TodoItem />', () => {
  it('TodoItem should render with crashing -- completed', () => {
    const props = {
      onClick: jest.fn(),
      completed: true,
      text: 'Item',
    };
    shallow(<TodoItem {...props} />);
  });

  it('TodoItem should render correctly -- not completed', () => {
    const props = {
      onClick: jest.fn(),
      completed: false,
      text: 'Item',
    };
    shallow(<TodoItem {...props} />);
  });
});
