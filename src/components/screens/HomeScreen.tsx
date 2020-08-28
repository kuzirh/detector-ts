import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Camera"
        onPress={() => navigation.navigate('Camera')}
      />
      <Button
        title="Go to Results"
        onPress={() => navigation.navigate('Results')}
      />
      <Button
        title="Go to Tensorflow"
        onPress={() => navigation.navigate('Tensorflow')}
      />
    </View>
  );
}
