import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { PublicStackParamList } from './types';

import { Login } from '../../screens';

const Stack = createStackNavigator<PublicStackParamList>();

export function PublicRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ cardStyle: { backgroundColor: '#fff' } }}
    >
      {/* Routes Start */}
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      {/* Routes End */}
    </Stack.Navigator>
  );
}