// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { Text, View } from 'react-native';
// import styled from 'styled-components';

// const Container = styled(View)`
//   flex: 1;
//   backgroundColor: #fff;
//   alignItems: center;
//   justifyContent: center;
// `;

// export default function App() {
//   return (
//     <Container>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <StatusBar style='auto' />
//     </Container>
//   );
// }

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;