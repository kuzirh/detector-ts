import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

const Container = styled(View)`
  flex: 1;
  backgroundColor: #fff;
  alignItems: center;
  justifyContent: center;
`;

export default function App() {
  return (
    <Container>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style='auto' />
    </Container>
  );
}