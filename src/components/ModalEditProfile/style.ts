import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    contentContainerStyle: { 
      flexGrow:1, 
      alignItems: 'center' 
    },
    backgroundImage: {
      flex: 1,
      width: '100%',
      height: 120,
      position: 'absolute'
    },
    container: {
      flex: 1,
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
    },
    profilePic: {
      width: 150,
      height: 150,
      borderRadius: 200,
      marginTop: 50,
    },
    userName: {
      marginTop: 9,
      fontSize: 25,
      fontWeight: '500',
      color: '#30323D',
    },
    nicknameView: {
      marginTop: 13,
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'center',
    },
    nicknameFont: {
      fontSize: 16,
    },
    locationView : { 
      height: 20, 
      width: 1.5, 
      backgroundColor: '#888888', 
      marginHorizontal: 5 
    },
    modalBackground: {
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      position: 'absolute',
    },
    modal: {
      width: 361,
      borderRadius: 8,
      padding: 17,
      backgroundColor: 'white',
      position: 'absolute',
      top: '20%',
    },
    inputModalLabels: {
      fontSize: 16,
      color: '#8888',
    },
    input: {
      width: 329,
      height: 48,
      borderWidth: 1,
      borderColor: '#CDD1C4',
      borderRadius: 8,
      paddingHorizontal: 8,
      marginBottom: 10,
    },
    inputBio: {
      width: 329,
      height: 70,
      borderWidth: 1,
      borderColor: '#CDD1C4',
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    relationshipsConn: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      width: '90%',
      justifyContent: 'center',
      marginTop: 21,
      gap:15
    },
    bioView: { flexDirection: 'column', marginTop: 10, width: '90%', justifyContent: 'center', alignItems: 'center' },
    statsLabelView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    statsLabel: {
      fontSize: 15,
      fontWeight: '700',
      color: '#30323D',
    },
    statsBio: {
      width: '100%', 
      textAlign: 'center'
    },
    viewContentTab: {
      width: '100%', 
      marginTop: 16, 
      marginBottom:16, 
      gap: 16
    },
    modalButton: { 
      position: 'absolute', 
      left: 330, 
      bottom: 390 
    },
    closeModalButton: { 
      color: 'black', 
      fontSize: 24 
    },
    contentLabelTab: { 
      fontSize: 16, 
      color: '#30323D' 
    },
    tabView: {
      height: 2.5, 
      width: 120}
  });