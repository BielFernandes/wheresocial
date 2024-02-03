import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/routes/Navigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationProvider } from './src/contexts/NavigationContext';

function App() {
  return (
    <SafeAreaProvider>
      <NavigationProvider>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </NavigationProvider>
    </SafeAreaProvider>
  );
}

export default App;
