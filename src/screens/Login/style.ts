import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
      flex:1,
      paddingHorizontal: 15,
      paddingVertical: 20,
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#FFFFFF'
    },
    title:{
      fontSize: 35,
      color: "#30323D",
      marginBottom: 20
    },
    image:{
      width:157,
      height:206
    },
    welcomeTitle:{
      fontSize: 25,
      color: "#30323D",
      marginTop: 20,
      marginBottom: 15
    },
    googleLoginView:{
      backgroundColor: '#CDD1C4',
      flexDirection: 'row',
      paddingHorizontal: 15,
      justifyContent:'space-between',
      alignItems: 'center',
      width:'100%',
      height: 48,
      borderRadius: 8,
      padding: 6,
      marginBottom: 10
    },
    loginContainer:{
      width: "100%", 
      gap: 10,
      marginTop: 15
    },
    input:{
      borderWidth: 1,
      width: '100%',
      borderRadius: 8,
      height: 48,
      paddingHorizontal: 15 
    },
    buttonLogin:{
      width: '100%',
      height: 48,
      backgroundColor: '#CDD1C4',
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 15,
      marginBottom: 30
    },
    enableButtonLogin:{
      width: '100%',
      height: 48,
      backgroundColor: "#EAEAEA",
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 15,
      marginBottom: 30
    }
  })

  export default styles