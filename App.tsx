import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/routes/Navigator';
import {

  StyleSheet, Text, View,
} from 'react-native';

function App(): React.JSX.Element {

  return (
    <View style={{ flex: 1, width: '100%' }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </View>
  );
}
export default App;
