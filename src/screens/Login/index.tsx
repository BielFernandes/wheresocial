import React, { RefObject, useRef, useEffect, useState } from 'react';

import {

 Text, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView, Keyboard
} from 'react-native';
import styles from './style'

import { Divisor } from '../../components/divisor/divisor';

export function Login() {

  const requireImage = require('./../../assets/Ilustra.png')
  const googleIcon = require('./../../assets/google.png')
  const scrollViewRef: RefObject<ScrollView> = useRef<ScrollView>(null);

  const scrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        scrollToBottom();
      }
    );

    return () => {
      keyboardDidShowListener.remove();
    };
  }, []);

  const [emailInputValue, setEmailInputValue] = useState('');
  const [pwdInputValue, setPwdInputValue] = useState('');

  const [toggleLengthInputs, setToggleLengthInputs] = useState(false)

  const [emailBorderColor, setEmailBorderColor] = useState('#888888')

  const [pwdBorderColor, setPwdBorderColor] = useState('#888888')

  function handleEnableBtn(){
    if(emailInputValue.length <= 0){
      setEmailBorderColor('red')
    } else { 
      setEmailBorderColor('#888888')
     }

     if(pwdInputValue.length <= 0){
      setPwdBorderColor('red')
    } else { 
      setPwdBorderColor('#888888')
     }
  }

  useEffect(() => {

    if(emailInputValue.length >= 1 && pwdInputValue.length >= 1){
      setToggleLengthInputs(true)
    }

  }, [emailInputValue, pwdInputValue]);

  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    style={styles.container}
    keyboardVerticalOffset={70}
    >
      <ScrollView
      ref={scrollViewRef}
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
          style={{...styles.input, borderColor: emailBorderColor}}
          onFocus={scrollToBottom}
          onChangeText={(text)=> setEmailInputValue(text)}
        />
        <TextInput
          placeholder='Senha'
          style={{...styles.input, borderColor: pwdBorderColor}}
          onFocus={scrollToBottom}
          onChangeText={(text)=> setPwdInputValue(text)}
        />
        </View>
        <Text style={{textAlign:'left', width: '100%', color: "#4D5061", fontSize: 16, marginTop: 3}}>
          Esqueceu sua senha?
        </Text>
      { !toggleLengthInputs ? 
        <TouchableOpacity 
        style={styles.enableButtonLogin}
        onPress={handleEnableBtn}
        >
          <Text style={{fontSize: 16}}>
            Realizar login
          </Text>
        </TouchableOpacity> : 
        <TouchableOpacity 
        style={styles.buttonLogin}
        onPress={handleEnableBtn}
        >
          <Text style={{fontSize: 16}}>
            Realizar login
          </Text>
        </TouchableOpacity>
        }
        <Text style={{fontSize: 16}}>
          Não tem uma conta? <Text style={{fontSize: 16, color: '#5C80BC'}}>Inscreva-se</Text>
        </Text>
      </ScrollView>
     </KeyboardAvoidingView>
  );
}
