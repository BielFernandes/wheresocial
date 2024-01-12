import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
Feed
} from '../../screens';
import { PrivateStackParamList } from './types';

// Imports End

const Stack = createStackNavigator<PrivateStackParamList>();

export default function PrivateRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Feed"
    >
      <Stack.Screen name="Feed" component={Feed} />
    </Stack.Navigator>
  );
}