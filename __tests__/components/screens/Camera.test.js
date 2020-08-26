import React from 'react';
import renderer from 'react-test-renderer';
import Camera from '../../../src/components/screens/Camera';

it('Camera component renders without crashing', async () => {
  const rendered = renderer.create(<Camera />).toJSON
  expect(rendered).toBeTruthy();
});