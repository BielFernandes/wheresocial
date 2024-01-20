import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { PrivateStackParamList } from '../../routes/PrivateRoutes/types';
import Posts from "../../mocks/posts.json"
import { PostComponent } from '../../components/Post/PostComponent';
import { Comment } from '../../components/Comment/Comment';
import { ScrollView } from 'react-native-gesture-handler';

type PostDetailsRouteProp = RouteProp<PrivateStackParamList, 'CommentScreen'>;

interface CommentScreenProps {
  route: PostDetailsRouteProp;
}

const CommentScreen: React.FC<CommentScreenProps> = ({ route }) => {
  const postId = route.params?.postId

  let post = Posts.find( post => post.id == postId )

  const [commentModal, setCommentModal] = useState(false)

  return (
    <>
    
    <View style={{width: '100%', flex: 1, flexDirection: 'column', alignItems: 'center', padding: 20}}>
      <PostComponent 
        id={post?.id} 
        nickname={post?.nickname} 
        username={post?.username} 
        content={post?.content} 
        likesCount={post?.like_count} 
        tags={post?.tags}
        endBorderRadius={false}
      />
      <ScrollView>
      {
        post?.comments.map(comment => (
          <View key={comment.id}>
          <Comment nickname={comment.author} content={comment.content} />
          </View>
        ))
      }
      </ScrollView>
      <TouchableOpacity
        style={{
          width: 62,
          height: 62,
          backgroundColor: '#5C80BC',
          position: 'absolute',
          bottom: 20,
          right: 20,
          borderRadius: 100,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => setCommentModal(true)}
      >
        <Image
          style={{ width: 30, height: 25, resizeMode:'contain' }}
          source={require('../../screens/PostDetails/message.png')}
        />
      </TouchableOpacity>

    </View>
        {
          commentModal && 
          <>
            <View style={{width: '100%', height: '100%', position: 'absolute', flexDirection: 'row', justifyContent: 'center'}}>
              <View style={{width: '100%',     height: '100%', backgroundColor: 'background: rgba(0, 0, 0, 0.40);', position: 'absolute'}}/>
              <View style={{width: '90%', height: 150, backgroundColor: 'white', position: 'absolute', top: 300, borderRadius: 8}}>

                  <TouchableOpacity  onPress={() => setCommentModal(false)} style={{backgroundColor:'red', width: 100}}><Text>Fechar</Text></TouchableOpacity>

                <Text style={{fontSize: 20}}> Modal para escrever comentário </Text>
              </View>
            </View>
          </>
        }
    </>
  );
};

export { CommentScreen };

const styles = StyleSheet.create({
  userPicture:{width:40, height: 40, borderRadius: 200},
  contentView:{flexDirection: 'row', width: 365, height: 90, padding:15,alignItems:'flex-start' , borderWidth: 1, borderColor:'rgba(0, 0, 0, 0.20)', gap: 10},
})