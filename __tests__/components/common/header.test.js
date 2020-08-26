import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../../../src/components/common/header';

it('Header component renders without crashing', () => {
  const rendered = renderer.create(<Header />).toJSON();
  expect(rendered).toBeTruthy();
});
