import React from 'react';
import { shallow } from 'enzyme';

import { XTab } from '../XTab.component';

describe('components <XTab />', () => {
  it('should render without crashing -- active tab', () => {
    const props = {
      active: true,
      children: <span>Link</span>,
    };
    shallow(<XTab {...props} />);
  });

  it('should render without crashing -- inactive tab', () => {
    const props = {
      children: <span>Link</span>,
    };
    shallow(<XTab {...props} />);
  });
});
