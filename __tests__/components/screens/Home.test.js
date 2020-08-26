import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from '../../../src/components/screens/HomeScreen';

it('Home component renders without crashing', async () => {
  const rendered = renderer.create(<HomeScreen />).toJSON
  expect(rendered).toBeTruthy();
});