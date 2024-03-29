import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  GestureResponderEvent,
  ImageBackground,
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { PostComponent } from '../../components/Post/PostComponent';
import { ShareComponent } from '../../components/Share/ShareComponent';
import { LikeComponent } from '../../components/Like/LikeComponent';
import PostsMocked from '../../mocks/posts.json'
import { FeedProps } from './types';
import { styles } from './styles';


type ToggleModalFunction = (closeModalBtn?: boolean) => void;

const EditProfileIcon = () => {
  const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/></svg>`;

  return <SvgXml xml={svgMarkup} width="20" height="20" />;
};

export function Feed({navigation}: FeedProps) {
  const profilePicture = require('../../assets/profile.png');
  const bannerPicture = require('../../assets/coverbanner.png');

  const [isModalVisible, setModalVisible] = useState(false);

  const [username, setUsername] = useState('Edit');
  const [nickname, setNickname] = useState('Edit');
  const [location, setLocation] = useState('Edit');
  const [bio, setBio] = useState(
    '013, amante da natureza, etc. 013, amante da natureza, etc013, amante da natureza, etc. 013, amante da natureza, etc'
  );

  const [prevUsername, setPrevUsername] = useState(username);
  const [prevNickname, setPrevNickname] = useState(nickname);
  const [prevLocation, setPrevLocation] = useState(location);
  const [prevBio, setPrevBio] = useState(bio);

  const toggleModal: ToggleModalFunction = (closeModalBtn = false) => {
    setModalVisible(!isModalVisible);
    if (closeModalBtn) {
      const updatedUserData = {
        username: prevUsername,
        nickname: prevNickname,
        location: prevLocation,
        bio: prevBio,
      };
      putUserData(updatedUserData);
    }
  };

  function putUserData(updatedUserData: any) {
    if (updatedUserData.username !== username) {
      setUsername(updatedUserData.username);
    }
    if (updatedUserData.nickname !== nickname) {
      setNickname(updatedUserData.nickname);
    }
    if (updatedUserData.location !== location) {
      setLocation(updatedUserData.location);
    }
    if (updatedUserData.bio !== bio) {
      setBio(updatedUserData.bio);
    }
  }

  const [showFullText, setShowFullText] = useState(false);

  const displayedText = showFullText ? bio : bio.slice(0, 50) + '...';

  const [activeIndex, setActiveIndex] = useState('post');

  const renderTabContent = () => {
    if (activeIndex === 'post') {
      return PostsMocked.map((post, index) => 
        <View key={post.id}>
          <PostComponent 
            id={post.id} 
            nickname={post.nickname} 
            username={post.username} 
            content={post.content} 
            likesCount={post.like_count} 
            tags={post.tags}   
            endBorderRadius={true}
            onPress={() => navigation.navigate('CommentScreen', {postId: post.id})}
            />
        </View>);
    } else if (activeIndex === 'share') {
      // return yourObject.Likes.map((likedPost, index) => <ShareComponent key={index} />);
    } else if (activeIndex === 'like') {
      // return yourObject.Likes.map((likedPost, index) => <LikeComponent key={index} />);
    }

    return null;
  };

  return (
      <ScrollView contentContainerStyle={{ flexGrow:1, alignItems: 'center' }}>
        <ImageBackground source={bannerPicture} style={styles.backgroundImage}/>
        <Image source={profilePicture} style={styles.profilePic} />
        <Text style={styles.userName}>{username}</Text>
        <View style={styles.nicknameView}>
          <Text style={styles.nicknameFont}>@{nickname}</Text>
          <View
            style={{ height: 20, width: 1.5, backgroundColor: '#888888', marginHorizontal: 5 }}
          />
          <Text style={styles.nicknameFont}>{location}</Text>
          <TouchableOpacity
            style={{ width: 0, marginHorizontal: 10 }}
            onPress={(event: GestureResponderEvent) => toggleModal()}
          >
            <EditProfileIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.relationshipsConn}>
          <View style={styles.statsLabelView}>
            <Text style={styles.statsLabel}>Conexões: </Text>
            <Text style={{ fontSize: 14 }}>1.240</Text>
          </View>
          <View style={styles.statsLabelView}>
            <Text style={styles.statsLabel}>Seguindo: </Text>
            <Text style={{ fontSize: 14 }}>540</Text>
          </View>
          <View style={styles.statsLabelView}>
            <Text style={styles.statsLabel}>Seguidores: </Text>
            <Text style={{ fontSize: 14 }}>6.960</Text>
          </View>
        </View>
        <View style={styles.bioView}>
          <Text style={styles.statsLabel}>Biografia: </Text>
          <Text style={{width: '80%'}}>{displayedText}</Text>
        </View>
        {bio.length > 45 && (
          <TouchableOpacity onPress={() => setShowFullText(!showFullText)}>
            <Text style={{ fontSize: 12, color: '#5C80BC' }}>
              {showFullText ? 'Mostrar menos' : 'Ver biografia completa'}
            </Text>
          </TouchableOpacity>
        )}
        <View>
          <View style={{ flexDirection: 'row', marginTop: 24, width: '100%' }}>
            <View>
              <TouchableOpacity onPress={() => setActiveIndex('post')} style={{ padding: 10, width:120, alignItems: 'center', flexDirection:'column' }}>
                <Text style={{ fontSize: 16, color: '#30323D' }}>Posts</Text>
              </TouchableOpacity>
              <View style={{
                backgroundColor: activeIndex == 'post' ? '#5C80BC' : 'rgba(217, 217, 217, 1)', 
                height: 2.5, 
                width: 120}}/>
            </View>
            <View>
              <TouchableOpacity onPress={() => setActiveIndex('share')} style={{ padding: 10, width:120, alignItems: 'center' }}>
                <Text style={{ fontSize: 16, color: '#30323D' }}>Re-posts</Text>
              </TouchableOpacity>
              <View style={{
                backgroundColor: activeIndex == 'share' ? '#5C80BC' : 'rgba(217, 217, 217, 1)', 
                height: 2.5, 
                width: 120}}/>
            </View>
            <View>
              <TouchableOpacity onPress={() => setActiveIndex('like')} style={{ padding: 10, width:120, alignItems: 'center' }}>
                <Text style={{ fontSize: 16, color: '#30323D' }}>Likes</Text>
              </TouchableOpacity>
              <View style={{
                backgroundColor: activeIndex == 'like' ? '#5C80BC' : 'rgba(217, 217, 217, 1)', 
                height: 2.5, 
                width: 120}}/>
            </View>
          </View>
          <View style={{width: '100%', marginTop: 16, marginBottom:16, gap: 16}}>
            {renderTabContent()}
          </View>
        </View>
        {isModalVisible && (
          <>
            <View style={styles.modalBackground} />
            <View style={styles.modal}>
              <TouchableOpacity
                style={{ position: 'absolute', left: 330, bottom: 390 }}
                onPress={(event: GestureResponderEvent) => toggleModal(false)}
              >
                <Text style={{ color: 'black', fontSize: 24 }}>X</Text>
              </TouchableOpacity>
              <View>
                <Text style={styles.inputModalLabels}>Nome</Text>
                <TextInput
                  value={prevUsername}
                  onChangeText={(text) => setPrevUsername(text)}
                  style={styles.input}
                />
              </View>
              <View>
                <Text style={styles.inputModalLabels}>Nome de usuário</Text>
                <TextInput
                  value={prevNickname}
                  onChangeText={(text) => setPrevNickname(text)}
                  style={styles.input}
                />
              </View>
              <View>
                <Text style={styles.inputModalLabels}>Localização</Text>
                <TextInput
                  value={prevLocation}
                  onChangeText={(text) => setPrevLocation(text)}
                  style={styles.input}
                />
              </View>
              <View>
                <Text style={{ ...styles.inputModalLabels }}>Biografia</Text>
                <TextInput
                  value={prevBio}
                  onChangeText={(text) => setPrevBio(text)}
                  style={styles.inputBio}
                />
              </View>
              <TouchableOpacity onPress={(event: GestureResponderEvent) => toggleModal(true)} style={{height: 50, backgroundColor: '#5C80BC', marginTop: 12, borderRadius: 8, justifyContent: 'center', alignItems: 'center'}}><Text style={{color: 'white'}}>Salvar</Text></TouchableOpacity>
            </View>
          </>
        )}
      </ScrollView>
      
  );
}
