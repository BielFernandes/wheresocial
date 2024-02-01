import {

    Text, View
  } from 'react-native';
import { styles } from './styles';

export function Divisor(){
    return(
        <View style={styles.parentContainer}>
        <View style={styles.divise}></View>
        <Text style={{fontSize: 16, fontWeight: "500"}}>ou</Text>
        <View style={styles.divise}></View>
      </View>
    )
}

