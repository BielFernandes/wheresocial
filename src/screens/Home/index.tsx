// Exemplo de CommentScreen.jsx

import React from 'react';
import { View, Text } from 'react-native';
import Navbar from '../../components/Navbar/Navbar';

export function Home() {
  return (
    <View>
      <Text>Conteúdo da tela de comentários</Text>
      <Navbar/>
    </View>
  );
}
