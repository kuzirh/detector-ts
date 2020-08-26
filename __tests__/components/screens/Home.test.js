import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../../src/components/screens/Home';

it('Home component renders without crashing', async () => {
  const rendered = renderer.create(<Home />).toJSON
  expect(rendered).toBeTruthy();
});