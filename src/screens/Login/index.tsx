import React from 'react';

import {

 Text, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView
} from 'react-native';
import styles from './style'

import { Divisor } from '../../components/divisor/divisor';

export function Login() {

  const requireImage = require('./../../assets/Ilustra.png')
  const googleIcon = require('./../../assets/google.png')

  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    style={styles.container}
    keyboardVerticalOffset={70}
    >
      <ScrollView
      contentContainerStyle={{ flexGrow:1, alignItems: 'center' }}
      >
      <Text style={styles.title}>
        Where'Social
      </Text>
      <Image
        source={ requireImage }
        style={styles.image}
      />
      <Text style={styles.welcomeTitle}>
        Seja bem-vindo(a)!
      </Text>
      <View style={styles.googleLoginView}>
        <TouchableOpacity>
          <Text style={{fontSize: 16, fontWeight: "500", color: "#30323D"}}>Fazer login como João Henrique</Text>
          <Text style={{fontSize: 14, color: "#30323D"}}>joao.henrique@gmail.com</Text>
        </TouchableOpacity>
        <Image source={googleIcon}/>
      </View>
      <Divisor/>
      <View style={styles.loginContainer}>        
      <TextInput
        placeholder='E-mail ou nome de usuário'
        style={styles.input}
      />
      <TextInput
        placeholder='Senha'
        style={styles.input}
      />
      </View>
      <Text style={{textAlign:'left', width: '100%', color: "#4D5061", fontSize: 16, marginTop: 3}}>
        Esqueceu sua senha?
      </Text>
      <TouchableOpacity style={styles.buttonLogin}>
        <Text style={{fontSize: 16}}>
          Realizar login
        </Text>
      </TouchableOpacity>
      <Text style={{fontSize: 16}}>
        Não tem uma conta? <Text style={{fontSize: 16, color: '#5C80BC'}}>Inscreva-se</Text>
      </Text>
      </ScrollView>
     </KeyboardAvoidingView>
  );
}

