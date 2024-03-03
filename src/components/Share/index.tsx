import {  useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
type PostComponentProps = {
  id: any
  username: any
  likesCount: any;
  content: any
  nickname: any
  tags: any
  endBorderRadius: any
  post: any
  onPress?: () => void;
  onPressToPost?: () => void;
};

export function ShareComponent(props:PostComponentProps){
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(props.likesCount);

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
              <Image source={require('../../assets/profile.png')} style={styles.userPicture} />
              <View style={{width: '80%', flexWrap: 'wrap'}}>
                <Text style={{fontSize: 14, flexWrap: 'wrap'}}>@{props.post.nickname} <Text style={{fontWeight: "500", color: 'black'}}>Compartilhou de</Text> @{props.post.nickname}</Text>
              </View>
            </View>
              <Text style={styles.content}>{props.content}</Text>
              <View style={styles.tagsContainer}>
                {
                    props.tags.map((tag:any, index: number) => (
                        <Text key={index} style={styles.tag}>{tag}</Text>
                    ))
                }
              </View>
              <TouchableOpacity onPress={props.onPressToPost} style={styles.contentPostView}>
                <View style={styles.userInfoView}>
                  <Image source={require('../../assets/profile.png')} style={styles.userPostPicture} />
                  <Text style={{fontSize: 16}}>@{props.post.nickname}</Text>
                </View>
                <Text style={styles.content}>{props.post.content}</Text>
                <View style={styles.tagsContainer}>
                  {
                      props.tags.map((tag:any, index: number) => (
                          <Text key={index} style={styles.tag}>{tag}</Text>
                      ))
                  }
                </View>
              </TouchableOpacity>

          </View>
          <View style={{ ...styles.postActions, borderBottomEndRadius: props.endBorderRadius ? 8 : 0 , borderBottomStartRadius: props.endBorderRadius ? 8: 0}}>
          {
            !isLiked ? 
            <TouchableOpacity style={{width: 100, flexDirection: 'row', gap: 5}} onPress={()=> toggleLike()}>
              <Image source={require('../../assets/unlike.png')} style={styles.actionBtn}/>
              <Text style={{color: 'white', fontSize: 12}}> Curtir </Text>
            </TouchableOpacity>
            :
            <TouchableOpacity style={{width: 100, flexDirection: 'row', gap: 5}} onPress={()=> toggleLike()}>
              <Image source={require('../../assets/like.png')} style={styles.actionBtn}/>
              <Text style={{color: 'red', fontSize: 12}}> { likeCount } </Text>
            </TouchableOpacity>
          }
        <TouchableOpacity style={{width: 100, flexDirection: 'row', gap: 5}} onPress={props.onPress}>
          {
            !props.endBorderRadius ?
            <Image source={require('../../assets/message.png')} style={styles.actionBtn}/> :
            <Image source={require('../../assets/comment.png')} style={styles.actionBtn}/> 
            

          }
          <Text style={{color:'white', fontSize: 12}}>Comentar</Text>
        </TouchableOpacity>
          <TouchableOpacity style={{width: 100, flexDirection: 'row', gap: 5}}>
            <Image source={require('../../assets/share.png')} style={{...styles.actionBtn, marginTop: 3}}/> 
            <Text style={{color:'white', fontSize: 12}}>Compartilhar</Text>
          </TouchableOpacity>
        </View>
        </View>
        </>
    )
}