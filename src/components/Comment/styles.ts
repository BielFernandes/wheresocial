import { StyleSheet } from "react-native"
import { Spacing, Color } from "../../styles"

export const styles = StyleSheet.create({
    userPicture:{width: Spacing.TripleExtraLarge, height: Spacing.TripleExtraLarge, borderRadius: 200},
    contentView:{flexDirection: 'row', width: 365, height: Spacing.TripleExtraLarge*2 + 10, padding:Spacing.Alternative, alignItems:'flex-start' , borderWidth: 1, borderColor:'rgba(0, 0, 0, 0.20)', gap: Spacing.Base},
    infosView: {width: '100%', flexDirection: 'row', gap: Spacing.Base, alignItems: 'center'},
    nicknameText: {fontSize: Spacing.Alternative, fontWeight: '400'},
    dateText: {color:'#4D5061', fontSize: Spacing.Base},
    content: {width: '100%', color: Color.Black, marginTop: Spacing.ExtraSmall, fontSize: 14}
  })