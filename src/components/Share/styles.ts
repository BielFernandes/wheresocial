import { StyleSheet } from "react-native"
import { Color, Spacing } from "../../styles"

export const styles = StyleSheet.create({
    container:{flexDirection: 'column', width: 365},
    contentView:{gap: 8, flexDirection: 'column', width: '100%', padding:Spacing.Alternative, justifyContent: 'space-between', borderWidth: 1, borderColor:Color.LightGray, borderTopEndRadius:Spacing.ExtraSmall,borderTopStartRadius:Spacing.ExtraSmall},
    userInfoView:{flexDirection: 'row', alignItems:'center', gap: Spacing.Base},
    userPicture:{width:Spacing.TripleExtraLarge, height: Spacing.TripleExtraLarge, borderRadius: 200},
    content:{fontSize:16, color: Color.Dark},
    tagsContainer:{width: '100%', flexDirection: 'row', gap: Spacing.ExtraSmall},
    tag:{fontSize:12, color: Color.LightGray},
    postActions:{width: '100%', height: Spacing.TripleExtraLarge + 8, backgroundColor: '#5C80BC', borderWidth: 1, borderColor:Color.LightGray, paddingHorizontal:Spacing.ExtraLarge, flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'},
    actionBtn:{width: Spacing.Alternative, height: Spacing.Alternative},
    userPostInfoView:{flexDirection: 'row', alignItems:'center', gap: Spacing.Base},
    contentPostView:{gap:6, flexDirection: 'column', width: '100%', padding:Spacing.Alternative, justifyContent: 'space-between', borderWidth: 1, borderColor:Color.LightGray, borderRadius: Spacing.ExtraSmall},
    userPostPicture:{width: 30, height: 30, borderRadius: 200},
  })