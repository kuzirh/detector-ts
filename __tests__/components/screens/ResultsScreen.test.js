import React from 'react';
import renderer from 'react-test-renderer';
import ResultsScreen from '../../../src/components/screens/ResultsScreen';

it('Results component renders without crashing', async () => {
  const rendered = renderer.create(<ResultsScreen />).toJSON;
  expect(rendered).toBeTruthy();
});
