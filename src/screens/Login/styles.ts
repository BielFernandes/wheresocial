import { StyleSheet } from "react-native";
import { Color, Spacing } from "../../styles";

export const styles = StyleSheet.create({
    container:{
      flex:1,
      paddingHorizontal: Spacing.Alternative,
      paddingVertical: Spacing.Medium,
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: Color.Light
    },
    title:{
      fontSize: Spacing.DoubleExtraLarge,
      color: "#30323D",
      marginBottom: Spacing.Medium
    },
    image:{
      width:157,
      height:206
    },
    welcomeTitle:{
      fontSize: Spacing.ExtraLarge,
      color: "#30323D",
      marginTop: Spacing.Medium,
      marginBottom: Spacing.Alternative
    },
    googleLoginView:{
      backgroundColor: '#CDD1C4',
      flexDirection: 'row',
      paddingHorizontal: Spacing.Alternative,
      justifyContent:'space-between',
      alignItems: 'center',
      width:'100%',
      height: 48,
      borderRadius: 8,
      padding: Spacing.ExtraSmall,
      marginBottom: 10
    },
    loginContainer:{
      width: "100%", 
      gap: 10,
      marginTop: Spacing.Alternative
    },
    input:{
      borderWidth: 1,
      width: '100%',
      borderRadius: 8,
      height: 48,
      paddingHorizontal: Spacing.Alternative
    },
    buttonLogin:{
      width: '100%',
      height: 48,
      backgroundColor: '#CDD1C4',
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: Spacing.Alternative,
      marginBottom: 30
    },
    enableButtonLogin:{
      width: '100%',
      height: 48,
      backgroundColor: "#EAEAEA",
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: Spacing.Alternative,
      marginBottom: 30
    }
  })

  export default styles