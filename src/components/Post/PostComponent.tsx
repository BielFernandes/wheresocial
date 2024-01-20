import {  useState } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
type PostComponentProps = {
  id: any
  username: any
  likesCount: any;
  content: any
  nickname: any
  tags: any
  endBorderRadius: any
  onPress?: () => void;
};

export function PostComponent(props:PostComponentProps){
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(props.likesCount);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked)
    if(!isLiked){
      setLikeCount(likeCount + 1)
    } else {
      setLikeCount(likeCount - 1)
    }
  }
  

    return(
      <>
        <View style={styles.container}>
          <View style={styles.contentView}>
            <View style={styles.userInfoView}>
              <Image source={require('../../screens/Feed/profile.png')} style={styles.userPicture} />
              <Text style={{fontSize: 16}}>@{props.nickname} · 3 h</Text>
            </View>
              <Text style={styles.content}>{props.content}</Text>
              <View style={styles.tagsContainer}>
                {
                    props.tags.map((tag:any, index: number) => (
                        <Text key={index} style={styles.tag}>{tag}</Text>
                    ))
                }
              </View>
          </View>
          <View style={{ ...styles.postActions, borderBottomEndRadius: props.endBorderRadius ? 8 : 0 , borderBottomStartRadius: props.endBorderRadius ? 8: 0}}>
          {
            !isLiked ? 
            <TouchableOpacity style={{width: 100, flexDirection: 'row', gap: 5}} onPress={()=> toggleLike()}>
              <Image source={require('../../screens/Feed/unlike.png')} style={styles.actionBtn}/> 
              <Text style={{color: 'white', fontSize: 12}}> Curtir </Text>
            </TouchableOpacity>
            :
            <TouchableOpacity style={{width: 100, flexDirection: 'row', gap: 5}} onPress={()=> toggleLike()}>
              <Image source={require('../../screens/Feed/like.png')} style={styles.actionBtn}/>
              <Text style={{color: 'red', fontSize: 12}}> { likeCount } </Text>
            </TouchableOpacity>
          }
        <TouchableOpacity style={{width: 100, flexDirection: 'row', gap: 5}} onPress={props.onPress}>
          {
            !props.endBorderRadius ?
            <Image source={require('../../screens/CommentScreen/message.png')} style={styles.actionBtn}/> :
            <Image source={require('../../screens/Feed/comment.png')} style={styles.actionBtn}/> 
            

          }
          <Text style={{color:'white', fontSize: 12}}>Comentar</Text>
        </TouchableOpacity>
          <TouchableOpacity style={{width: 100, flexDirection: 'row', gap: 5}}>
            <Image source={require('../../screens/Feed/share.png')} style={{...styles.actionBtn, marginTop: 3}}/> 
            <Text style={{color:'white', fontSize: 12}}>Compartilhar</Text>
          </TouchableOpacity>
        </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
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