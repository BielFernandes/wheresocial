import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { styles } from './styles';

export function Comment(props:any){

  return (
      <View style={styles.contentView}>
          <Image source={require('../../assets/profile-pic.jpg')} style={styles.userPicture} />
          <View style={{width: '100%', height:40}}>
            <View style={styles.infosView}>
              <Text style={styles.nicknameText} >@{props.nickname}</Text>
              <Text style={styles.dateText}>16/01/2024 as 17:00</Text>
            </View>
            <Text style={styles.content}>{props.content}</Text>
          </View>
      </View>
  );
};