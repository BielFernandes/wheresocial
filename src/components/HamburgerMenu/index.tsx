import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

interface HamburgerMenuProps {
  closeMenu: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ closeMenu }) => {
  return (
    <View style={styles.container}>
      <View style={{width: '100%', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', height: '100%', paddingHorizontal: 15, gap: 10}}>
      <TouchableOpacity onPress={closeMenu}>
        <Text>Fechar Menu</Text>
      </TouchableOpacity>
          <TouchableOpacity style={{flexDirection: 'row', gap: 10, justifyContent: 'flex-start', width: 150, height: 40, alignItems: 'center'}}>
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
