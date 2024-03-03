import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';


interface HamburgerMenuProps {
  closeMenu: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ closeMenu }) => {
  const navigation = useNavigation();


  const navigateToScreen = (screenName:string) => {
    if (screenName) {
      navigation.navigate(screenName as never);
      closeMenu()
    }
  };

  return (
    <View style={styles.container}>
      <View style={{width: '100%', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', height: '100%', paddingHorizontal: 15, gap: 10}}>
      <TouchableOpacity onPress={closeMenu}>
        <Text>Fechar Menu</Text>
      </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateToScreen("Profile")} style={{flexDirection: 'row', gap: 10, justifyContent: 'flex-start', width: 150, height: 40, alignItems: 'center'}}>
            <Image
              source={require('../../assets/user.png')}
            />
            <Text style={{fontSize: 16}}>Meu perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection: 'row', gap: 10, justifyContent: 'flex-start', width: 150, height: 40, alignItems: 'center'}}>
            <Image
              source={require('../../assets/user-group.png')}
            />
            <Text style={{fontSize: 16}}>Comunidades</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection: 'row', gap: 10, justifyContent: 'flex-start', width: 150, height: 40, alignItems: 'center'}}>
            <Image
              source={require('../../assets/earth.png')}
            />
            <Text style={{fontSize: 16}}>Idioma e localização</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection: 'row', gap: 10, justifyContent: 'flex-start', width: 150, height: 40, alignItems: 'center'}}>
            <Image
              source={require('../../assets/Gear.png')}
            />
            <Text style={{fontSize: 16}}>Configurações</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    width: 283
  },
});

export default HamburgerMenu;
