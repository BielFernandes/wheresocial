import {

    StyleSheet, Text, View
  } from 'react-native';

export function Divisor(){
    return(
        <View style={styles.parentContainer}>
        <View style={styles.divise}></View>
        <Text style={{fontSize: 16, fontWeight: "500"}}>ou</Text>
        <View style={styles.divise}></View>
      </View>
    )
}

const styles = StyleSheet.create({
    parentContainer:{
        flexDirection: 'row', 
        alignItems: 'center', 
        gap: 10
    },
    divise:{
        width: '43%', 
        backgroundColor: '#CDD1C4', 
        height: 1
    },
})