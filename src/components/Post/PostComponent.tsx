import { useEffect, useState } from "react";
import { Text, View, Image, StyleSheet, Modal, Button, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export function PostComponent(props:any){
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const toggleLike = () => {
    setIsLiked(!isLiked)
    if(!isLiked){
      setLikeCount(likeCount + 1)
    } else {
      setLikeCount(likeCount - 1)
    }
  }

    return(
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
        <View style={styles.postActions}>
        <View style={{flexDirection: 'row', gap: 8}}>
          {
            !isLiked ? 
            <TouchableOpacity onPress={()=> toggleLike()}>
              <Image source={require('../../screens/Feed/unlike.png')} style={styles.actionBtn}/> 
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={()=> toggleLike()}>
              <Image source={require('../../screens/Feed/like.png')} style={styles.actionBtn}/>
            </TouchableOpacity>
          }
          <Text style={{color: !isLiked ? 'white' : 'red', fontSize: 16}}>{likeCount}</Text>
        </View>
        <View style={{flexDirection: 'row', gap: 8}}>
          <TouchableOpacity>
            <Image source={require('../../screens/Feed/comment.png')} style={styles.actionBtn}/> 
          </TouchableOpacity>
          <Text style={{color:'white', fontSize: 16}}>0</Text>
        </View>
        <View style={{flexDirection: 'row', gap: 8}}>
          <TouchableOpacity>
            <Image source={require('../../screens/Feed/share.png')} style={{...styles.actionBtn, marginTop: 3}}/> 
          </TouchableOpacity>
          <Text style={{color:'white', fontSize: 16}}>0</Text>
        </View>
        </View>
        </View>
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
  postActions:{width: '100%', height: 36, backgroundColor: '#5C80BC', borderBottomEndRadius:8,borderBottomStartRadius:8, borderWidth: 1, borderColor:'rgba(0, 0, 0, 0.20)', paddingHorizontal:25, flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'},
  actionBtn:{width: 25, height: 25}
})