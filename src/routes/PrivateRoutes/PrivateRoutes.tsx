import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
Feed, CommentScreen, Home
} from '../../screens';
import { PrivateStackParamList } from './types';

const Stack = createStackNavigator<PrivateStackParamList>();

export default function PrivateRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Feed"
    >
      <Stack.Screen 
        name="Feed" 
        component={Feed} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="CommentScreen" 
        component={CommentScreen} 
        options={{ 
          headerShown: true,
          headerTitleStyle: {
            fontWeight: '100',
            fontSize: 18
          },
          headerTitleAlign: 'center',
          headerTitle: 'Comentários'
        }} 
      />
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
}