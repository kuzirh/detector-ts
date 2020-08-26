import React from 'react';
import renderer from 'react-test-renderer';
import CameraScreen from '../../../src/components/screens/CameraScreen';

it('Camera component renders without crashing', async () => {
  const rendered = renderer.create(<CameraScreen />).toJSON
  expect(rendered).toBeTruthy();
});