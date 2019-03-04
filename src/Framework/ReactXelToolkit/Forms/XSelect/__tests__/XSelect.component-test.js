import React from 'react';
import { shallow, mount } from 'enzyme';

import XSelect from '../XSelect.component';

describe('components <XSelect />', () => {
  it('should render without crashing', () => {
    shallow(<XSelect />);
  });

  it('should trigger change event', () => {
    const wrapper = mount(
      <XSelect>
        <x-menu>
          <x-menuitem id="value_1" value="0" toggled />
          <x-menuitem id="value_2" value="1" />
        </x-menu>
      </XSelect>,
    );
    wrapper.instance().ref.current.dispatchEvent(new Event('change'));
  });
});
