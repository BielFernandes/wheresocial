import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export function Comment(props:any){

  return (
      <View style={styles.contentView}>
          <Image source={require('./profile-pic.jpg')} style={styles.userPicture} />
          <View style={{width: '100%', height:40}}>
            <View style={{width: '100%', flexDirection: 'row', gap: 10, alignItems: 'center'}}>
              <Text style={{fontSize: 14, fontWeight: '400'}} >@{props.nickname}</Text>
              <Text style={{color:'#4D5061', fontSize: 12}}>16/01/2024 as 17:00</Text>
            </View>
            <Text style={{width: '100%', color: '#30323D', marginTop: 6, fontSize: 14}}>{props.content}</Text>
          </View>
      </View>
  );
};

const styles = StyleSheet.create({
  userPicture:{width:40, height: 40, borderRadius: 200},
  contentView:{flexDirection: 'row', width: 365, height: 90, padding:15,alignItems:'flex-start' , borderWidth: 1, borderColor:'rgba(0, 0, 0, 0.20)', gap: 10},
})