import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
Profile, CommentScreen, Home, Configuration, Search, PictureFeed, Notification
} from '../../screens';
import { PrivateStackParamList } from './types';

const Stack = createStackNavigator<PrivateStackParamList>();

export default function PrivateRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
    >
      <Stack.Screen 
        name="Profile" 
        component={Profile} 
        options={{ headerShown: true }} 
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
        options={{ 
          headerShown: true,
          headerTitleStyle: {
            fontWeight: '100',
            fontSize: 18
          },
          headerTitleAlign: 'center',
          headerTitle: 'Feed'
        }} 
      />
      <Stack.Screen 
        name="Search" 
        component={Search} 
        options={{ 
          headerShown: true,
          headerTitleStyle: {
            fontWeight: '100',
            fontSize: 18
          },
          headerTitleAlign: 'center',
          headerTitle: 'Pesquisar'
        }} 
      />
      <Stack.Screen 
        name="PictureFeed" 
        component={PictureFeed} 
        options={{ 
          headerShown: true,
          headerTitleStyle: {
            fontWeight: '100',
            fontSize: 18
          },
          headerTitleAlign: 'center',
          headerTitle: 'Feed Fotos'
        }} 
      />
      <Stack.Screen 
        name="Notification" 
        component={Notification} 
        options={{ 
          headerShown: true,
          headerTitleStyle: {
            fontWeight: '100',
            fontSize: 18
          },
          headerTitleAlign: 'center',
          headerTitle: 'Notificações'
        }} 
      />
      <Stack.Screen 
        name="Configuration" 
        component={Configuration} 
        options={{ 
          headerShown: true,
          headerTitleStyle: {
            fontWeight: '100',
            fontSize: 18
          },
          headerTitleAlign: 'center',
          headerTitle: 'Configurações'
        }} 
      />
    </Stack.Navigator>
  );
}