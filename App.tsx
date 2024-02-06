import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/routes/Navigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationProvider } from './src/contexts/NavigationContext';
import { HamburgerProvider } from './src/contexts/HamburgerContext';

function App() {
  return (
    <SafeAreaProvider>
      <HamburgerProvider>
        <NavigationProvider>
          <NavigationContainer>
            <Navigator />
          </NavigationContainer>
        </NavigationProvider>
      </HamburgerProvider>
    </SafeAreaProvider>
  );
}

export default App;
