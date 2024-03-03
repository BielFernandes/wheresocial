import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Navbar from '../Navbar';
import { PostComponent } from '../Post';
import { ShareComponent } from '../Share';
import { useNavigation } from '@react-navigation/native';
import PostsMocked from '../../mocks/posts.json';
import SharesMocked from '../../mocks/shares.json';

export function ContentProfileOption({ navigation }: any) {
  const [activeIndex, setActiveIndex] = useState('post');

  const renderTabContent = () => {
    if (activeIndex === 'post') {
      return PostsMocked.map((post) => (
        <View key={post.id}>
          <PostComponent
            id={post.id}
            nickname={post.nickname}
            username={post.username}
            content={post.content}
            likesCount={post.like_count}
            tags={post.tags}
            endBorderRadius={true}
            onPress={() => navigation.navigate('CommentScreen', { postId: post.id, type: 'post' })}
          />
        </View>
      ));
    } else if (activeIndex === 'share') {
      return SharesMocked.map((share) => (
        <View key={share.id}>
          <ShareComponent
            id={share.id}
            nickname={share.nickname}
            username={share.username}
            content={share.content}
            likesCount={share.like_count}
            post={share.post}
            tags={share.tags}
            endBorderRadius={true}
            onPress={() => navigation.navigate('CommentScreen', { postId: share.id, type: 'share' })}
            onPressToPost={() => navigation.navigate('CommentScreen', { postId: share.post.id, type: 'post' })}
          />
        </View>
      ));
    } else if (activeIndex === 'like') {
      // return yourObject.Likes.map((likedPost, index) => <LikeComponent key={index} />);
    }

    return null;
  };

  const renderTabButton = (tabName: string) => (
    <View>
      <TouchableOpacity
        onPress={() => setActiveIndex(tabName)}
        style={{ padding: 10, width: 120, alignItems: 'center', flexDirection: 'column' }}
      >
        <Text style={{ fontSize: 16, color: '#30323D' }}>{tabName}</Text>
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: activeIndex === tabName ? '#5C80BC' : 'rgba(217, 217, 217, 1)',
          height: 2.5,
          width: 120,
        }}
      />
    </View>
  );

  return (
    <View>
      <View style={{ flexDirection: 'row', marginTop: 24, width: '100%' }}>
        {renderTabButton('post')}
        {renderTabButton('share')}
        {renderTabButton('like')}
      </View>
      <View style={{ width: '100%', marginTop: 16, marginBottom: 16, gap: 16 }}>
        {renderTabContent()}
      </View>
    </View>
  );
}
