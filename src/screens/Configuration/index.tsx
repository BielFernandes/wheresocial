import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Navbar from '../../components/Navbar/Navbar';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function Configuration(props:any){
  const profilePicture = require('../../assets/profile.png');

  return (
      <View style={styles.container}>
        <View style={styles.userInfoView}>
          <Image
            style={styles.profilePic}
            source={profilePicture}
          />
          <Text style={styles.userName}>User Name</Text>
          <Text style={styles.nicknameView}>@nickname</Text>
        <View style={{width: '100%', flexDirection: 'column', alignItems: 'center'}}>
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
        <Navbar/>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 200,
    marginTop: 50,
  },
  userInfoView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  userName: {
    fontSize: 25,
    fontWeight: '500',
    color: '#30323D',
  },
  nicknameView: {
    flexDirection: 'row',
  },
  nicknameFont: {
    fontSize: 16,
  }
})