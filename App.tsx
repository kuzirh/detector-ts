import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Custom Component Imports
import HomeScreen from './src/components/screens/HomeScreen';
import CameraScreen from './src/components/screens/CameraScreen';
import ResultsScreen from './src/components/screens/ResultsScreen';
import TensorFlowScreen from './src/components/screens/TensorFlowScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="Results" component={ResultsScreen} />
        <Stack.Screen name="Tensorflow" component={TensorFlowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
