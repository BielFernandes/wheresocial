import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
      justifyContent: 'space-between',
      marginTop: 21,
    },
    bioView: { flexDirection: 'row', marginTop: 10, width: '90%', justifyContent: 'flex-start', alignItems: 'flex-end' },
    statsLabelView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    statsLabel: {
      fontSize: 16,
      fontWeight: '500',
      color: '#30323D',
    },
  });