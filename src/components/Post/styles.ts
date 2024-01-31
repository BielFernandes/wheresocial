import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container:{flexDirection: 'column', width: 365},
    contentView:{flexDirection: 'column', width: '100%', padding:15, height: 126, justifyContent: 'space-between', borderWidth: 1, borderColor:'rgba(0, 0, 0, 0.20)', borderTopEndRadius:8,borderTopStartRadius:8},
    userInfoView:{flexDirection: 'row', alignItems:'center', gap: 10},
    userPicture:{width:40, height: 40, borderRadius: 200},
    content:{fontSize:16, color: '#30323D'},
    tagsContainer:{width: '100%', flexDirection: 'row', gap: 5},
    tag:{fontSize:12, color: 'rgba(136, 136, 136, 1)'},
    postActions:{width: '100%', height: 48, backgroundColor: '#5C80BC', borderWidth: 1, borderColor:'rgba(0, 0, 0, 0.20)', paddingHorizontal:25, flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'},
    actionBtn:{width: 18, height: 18}
  })