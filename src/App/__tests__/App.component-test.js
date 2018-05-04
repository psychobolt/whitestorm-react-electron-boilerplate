import React from 'react';
import { shallow } from 'enzyme';

import { Filters } from '../TodoList';
import App from '../App.component';

describe('component <App />', () => {
  [Filters.ALL, undefined].forEach(filter => {
    it(` should render without crashing with filter ${filter}`, () => {
      const props = {
        match: {
          params: { filter },
        },
      };
      shallow(<App {...props} />);
    });
  });
});
