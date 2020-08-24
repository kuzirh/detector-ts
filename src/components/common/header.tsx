import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

const Container = styled(View)`
  flex: 1;
  backgroundColor: #fff;
  alignItems: center;
  justifyContent: center;
`;

export default function Header() {
  return (
    <Container>
      <Text>I am a header</Text>
    </Container>
  )
}