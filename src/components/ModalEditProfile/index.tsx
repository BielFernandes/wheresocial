import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './style';

const ModalComponent = ({
  isVisible,
  toggleModal,
  prevUsername,
  setPrevUsername,
  prevNickname,
  setPrevNickname,
  prevLocation,
  setPrevLocation,
  prevBio,
  setPrevBio,
}:any) => {
  return isVisible ? (
    <>
      <View style={styles.modalBackground} />
      <View style={styles.modal}>
        <TouchableOpacity
          style={{ position: 'absolute', left: 330, bottom: 390 }}
          onPress={toggleModal}
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
        <TouchableOpacity
          onPress={() => toggleModal(true)}
          style={{
            height: 50,
            backgroundColor: '#5C80BC',
            marginTop: 12,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white' }}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </>
  ) : null;
};

export default ModalComponent;