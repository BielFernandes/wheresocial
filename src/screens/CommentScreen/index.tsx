import React, { useState } from 'react';
import { styles } from "./styles";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { PrivateStackParamList } from '../../routes/PrivateRoutes/types';
import Posts from "../../mocks/posts.json"
import Shares from "../../mocks/shares.json"
import { PostComponent } from '../../components/Post/PostComponent';
import { Comment } from '../../components/Comment/Comment';
import { ScrollView } from 'react-native-gesture-handler';
import { ShareComponent } from '../../components/Share/ShareComponent';
import Navbar from '../../components/Navbar/Navbar';

type PostDetailsRouteProp = RouteProp<PrivateStackParamList, 'CommentScreen'>;

interface CommentScreenProps {
  route: PostDetailsRouteProp;
}

const CommentScreen: React.FC<CommentScreenProps> = ({ route }) => {
  const postId = route.params?.postId;
  const shareId = route.params?.postId;

  const post = postId ? Posts.find(post => post.id === postId) : undefined;
  const share = shareId ? Shares.find(share => share.id === shareId) : undefined;

  const [commentModal, setCommentModal] = useState(false);

  return (
    <>
    {
      route.params.type == 'post' ?
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
        <ScrollView horizontal={false} contentContainerStyle={{ alignItems: 'center', width:350 }}>
          {post?.comments.map(comment => (
            <View style={{alignItems:'center'}} key={comment.id}>
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
            source={require('../../assets/message.png')}
          />
        </TouchableOpacity>
      </View>
      </>
      :
      <>
      <View style={styles.container}>

        <ShareComponent
          id={share?.id}
          nickname={share?.nickname}
          username={share?.username}
          content={share?.content}
          likesCount={share?.like_count}
          tags={share?.tags}
          post={share?.post}
          endBorderRadius={false}
        />
        <ScrollView
          horizontal={false}
        >
          {share?.comments.map(comment => (
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
            source={require('../../assets/message.png')}
          />
        </TouchableOpacity>
      </View>
      </>
    }
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
      <Navbar/>
    </>
  );
};

export { CommentScreen };


