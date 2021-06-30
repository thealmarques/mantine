import React from 'react';
import { mount, shallow } from 'enzyme';
import { checkAccessibility } from '@mantine/tests';
import { Autocomplete } from './Autocomplete';

const defaultProps = {
  initiallyOpened: true,
  label: 'Test',
  data: [{ value: 'test-1' }, { value: 'test-2' }],
};

describe('@mantine/core/Autocomplete', () => {
  checkAccessibility([
    mount(<Autocomplete {...defaultProps} />),
    mount(<Autocomplete {...defaultProps} initiallyOpened={false} />),

  ]);

  it('has correct displayName', () => {
    expect(Autocomplete.displayName).toEqual('@mantine/core/Autocomplete');
  });
});
