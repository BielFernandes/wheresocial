import React, { useState } from 'react';
import { styles } from "./styles";
import { View, Text, Image, TouchableOpacity } from 'react-native';
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

  let post = Posts.find(post => post.id == postId)

  const [commentModal, setCommentModal] = useState(false)

  return (
    <>
      <View style={styles.container}>
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
          {post?.comments.map(comment => (
            <View key={comment.id}>
              <Comment nickname={comment.author} content={comment.content} />
            </View>
          ))}
        </ScrollView>
        <TouchableOpacity
          style={styles.commentButton}
          onPress={() => setCommentModal(true)}
        >
          <Image
            style={styles.commentIcon}
            source={require('../../screens/CommentScreen/message.png')}
          />
        </TouchableOpacity>
      </View>
      {commentModal && (
        <>
          <View style={styles.modalContainer}>
            <View style={styles.modalBackground} />
            <View style={styles.modalContent}>
              <TouchableOpacity
                onPress={() => setCommentModal(false)}
                style={styles.closeButton}
              >
                <Text>Fechar</Text>
              </TouchableOpacity>
              <Text style={styles.modalText}>Modal para escrever comentário</Text>
            </View>
          </View>
        </>
      )}
    </>
  );
};

export { CommentScreen };


