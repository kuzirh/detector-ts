import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

it('App renders without crashing', async () => {
  const rendered = renderer.create(<App />).toJSON
  expect(rendered).toBeTruthy();
});