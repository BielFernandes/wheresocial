import React, { RefObject, useRef, useEffect, useState } from 'react';

import {

 Text, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView, Keyboard
} from 'react-native';
import styles from './style'

import { Divisor } from '../../components/divisor/divisor';

export function SignUp() {

  const requireImage = require('./../../assets/signupImage.png')
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

  const [toggleLengthInputs, setToggleLengthInputs] = useState(false)

  const [toggleCreateAccountBtn, setToggleCreateAccountBtn] = useState(false)

  const [emailInputValue, setEmailInputValue] = useState('');
  const [confirmationEmailInputValue, setConfirmationEmailInputValue] = useState('');
  const [temporario, setTemporario] = useState('');
  
  const [nicknameInputValue, setNicknameInputValue] = useState('');
  const [pwdInputValue, setPwdInputValue] = useState('');
  const [confirmPwdInputValue, setConfirmPwdInputValue] = useState('');


  const [emailBorderColor, setEmailBorderColor] = useState('#888888')
  const [confirmEmailBorderColor, setConfirmEmailBorderColor] = useState('#888888')
  const [dateBorderColor, setDateBorderColor] = useState('#888888')

  const [nicknameBorderColor, setNicknameBorderColor] = useState('#888888')
  const [pwdBorderColor, setPwdBorderColor] = useState('#888888')
  const [confirmPwdBorderColor, setConfirmPwdBorderColor] = useState('#888888')
  
  function handleDisableBtn(){
    if(emailInputValue.length <= 0){
      setEmailBorderColor('red')
    } else { 
      setEmailBorderColor('#888888')
     }

     if(confirmationEmailInputValue.length <= 0){
      setConfirmEmailBorderColor('red')
    } else { 
      setConfirmEmailBorderColor('#888888')
     }

     if(temporario.length <= 0){
      setDateBorderColor('red')
    } else { 
      setDateBorderColor('#888888')
     }



     if(nicknameInputValue.length <= 0){
      setNicknameBorderColor('red')
    } else { 
      setNicknameBorderColor('#888888')
     }

     if(pwdInputValue.length <= 0){
      setPwdBorderColor('red')
    } else { 
      setPwdBorderColor('#888888')
     }

     if(confirmPwdInputValue.length <= 0){
      setConfirmPwdBorderColor('red')
    } else { 
      setConfirmPwdBorderColor('#888888')
     }

  }
  
  function handleEnableBtn(){
    setDateBorderColor('#888888')
    setConfirmEmailBorderColor('#888888')
    setEmailBorderColor('#888888')
    setToggleNextStepBtn(true)
  }

  useEffect(() => {
    if(emailInputValue.length && confirmationEmailInputValue.length && temporario.length >= 1){
      setToggleLengthInputs(true)
    } else {
      setToggleLengthInputs(false)
    }
 
  }, [emailInputValue, confirmationEmailInputValue, temporario]);

  useEffect(() => {
    if(nicknameInputValue.length && pwdInputValue.length && confirmPwdInputValue.length >= 1){
      setToggleCreateAccountBtn(true)
    } else {
      setToggleCreateAccountBtn(false)
    }
 
  }, [nicknameInputValue, pwdInputValue, confirmPwdInputValue]);

  const [toggleNextStepBtn, setToggleNextStepBtn] = useState(false)

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
          Realizar cadastro
        </Text>
        <View style={styles.googleLoginView}>
          <TouchableOpacity>
            <Text style={{fontSize: 16, fontWeight: "500", color: "#30323D"}}>Fazer login como João Henrique</Text>
            <Text style={{fontSize: 14, color: "#30323D"}}>joao.henrique@gmail.com</Text>
          </TouchableOpacity>
          <Image source={googleIcon}/>
        </View>
        <Divisor/>
          {
            !toggleNextStepBtn ? 
          <View style={styles.signUpContainer}>        
            <TextInput
              placeholder='Coloque seu melhor e-mail'
              style={{...styles.input, borderColor: emailBorderColor}}
              onFocus={scrollToBottom}
              onChangeText={(text)=> setEmailInputValue(text)}
            />
            <TextInput
              placeholder='Repetir e-mail'
              style={{...styles.input, borderColor: confirmEmailBorderColor}}
              onFocus={scrollToBottom}
              onChangeText={(text)=> setConfirmationEmailInputValue(text)}
            />
            <TextInput
              placeholder='Temporario'
              style={{...styles.input, borderColor: dateBorderColor}}
              onFocus={scrollToBottom}
              onChangeText={(text)=> setTemporario(text)}
            />
          </View>
            :
           <View style={styles.signUpContainer}>        
           <TextInput
             placeholder='Nome de usuário'
             style={{...styles.input, borderColor: nicknameBorderColor}}
             onFocus={scrollToBottom}
             onChangeText={(text)=> setNicknameInputValue(text)}
           />
           <TextInput
             placeholder='Senha'
             style={{...styles.input, borderColor: pwdBorderColor}}
             onFocus={scrollToBottom}
             onChangeText={(text)=> setPwdInputValue(text)}
           />
           <TextInput
             placeholder='Repetir senha'
             style={{...styles.input, borderColor: confirmPwdBorderColor}}
             onFocus={scrollToBottom}
             onChangeText={(text)=> setConfirmPwdInputValue(text)}
           />
           <Text>Eu concordo com os Termos de Serviço e a Política de Privacidade, incluindo o Uso de Cookies.</Text>
           <Text>Privacidade, incluindo o Uso de Cookies.</Text>
         </View>
        }
      { 
      !toggleLengthInputs ? 
        <TouchableOpacity 
        style={styles.enableButtonLogin}
        onPress={handleDisableBtn}
        >
          <Text style={{fontSize: 16}}>
            Avançar
          </Text>
        </TouchableOpacity> : 

        !toggleNextStepBtn ? 
        <TouchableOpacity 
        style={styles.buttonLogin}
        onPress={handleEnableBtn}
        >
          <Text style={{fontSize: 16}}>
            Avançar
          </Text>
        </TouchableOpacity>
        :
        !toggleCreateAccountBtn ?
        <TouchableOpacity 
        style={styles.enableButtonLogin}
        onPress={handleDisableBtn}
        >
          <Text style={{fontSize: 16}}>
            Criar conta
          </Text>
        </TouchableOpacity>
        :
        <TouchableOpacity 
        style={styles.buttonLogin}
        onPress={handleEnableBtn}
        >
          <Text style={{fontSize: 16}}>
            Criar conta
          </Text>
        </TouchableOpacity>
        }
        {
          !toggleNextStepBtn &&
        <Text style={{fontSize: 16}}>
          Não tem uma conta? <Text style={{fontSize: 16, color: '#5C80BC'}}>Inscreva-se</Text>
        </Text>
        }
      </ScrollView>
     </KeyboardAvoidingView>
  );
}

