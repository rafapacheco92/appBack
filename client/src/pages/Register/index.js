import { Checkbox } from 'expo-checkbox';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import Axios from 'axios';

export default function Register() {
  const [isMaiorIdade, setIsMaiorIdade] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  function cadastraFunc() {
    Axios.post("http://localhost:3000/user/cadatro", {
      name: { name },
      email: { email },
      pass: { pass }
    }).then(() => console.log(response))
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <StatusBar backgroundColor="#fff" translucent={false} />
          <Image source={require('./src/img/color_transparent_name_png.png')} style={styles.logo} />
          <TextInput placeholder='Nome' style={styles.input} onChange={value => setName(value)} />
          <TextInput placeholder='Email' style={styles.input} onChange={value => setEmail(value)} />
          <TextInput placeholder='Senha' style={styles.input} onChange={value => setPass(value)} />
          <View style={styles.labelCheckbox}>
            <Checkbox
              value={isMaiorIdade}
              onValueChange={(newValue) => setIsMaiorIdade(newValue)}
            />
            <Text style={styles.checkboxText}>Declaro que sou maior de 18 anos.</Text>
          </View>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText} onPress={cadastraFunc}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 350,
  },
  logo: {
    width: '110%',
    height: '20%',
    paddingTop: '50%',
    marginTop: Platform.OS === 'android' ? '13%' : '20%',
    marginBottom: Platform.OS === 'android' ? '13%' : '15%',
  },
  input: {
    width: '87%',
    height: 46,
    backgroundColor: '#999',
    marginBottom: 20,
    padding: 8,
    borderRadius: 5,
  },
  labelCheckbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxText: {
    color: '#c4c4c4',
    marginLeft: 8,
  },
  loginButton: {
    marginTop: '5%',
    backgroundColor: '#8a08bb',
    width: '87%',
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  loginText: {
    color: '#fff',
    fontSize: 17,
  },
});