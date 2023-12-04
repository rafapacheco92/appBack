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
  Button,
} from 'react-native';
import Register from '../Register';
import { api } from '../../lib/axios';

export default function App() {
  const [isMaiorIdade, setIsMaiorIdade] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: ""
  })


  const handleOnSubmit = () => {
    console.log("entrou")
    api.post("/user/cadastro", {
      name: values.name,
      email: values.email,
      pass: values.password
    }).then(() => console.log("cadastrou")).catch((erro) => console.log(JSON.stringify(erro, null, 4)))
  }


  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <StatusBar backgroundColor="#fff" translucent={false} />
          {/* <Image source={require('./src/img/color_transparent_name_png.png')} style={styles.logo} /> */}
          <TextInput
            placeholder='Nome'
            value={values.name}
            style={styles.input}
            onChangeText={(text) => setValues({
              ...values,
              name: text
            })} />
          <TextInput
            placeholder='Email'
            value={values.email}
            style={styles.input}
            onChangeText={(text) => setValues({
              ...values,
              email: text
            })} />
          <TextInput
            value={values.password}
            placeholder='Senha'
            style={styles.input}
            onChangeText={(text) => setValues({
              ...values,
              password: text
            })} />
          {/* <View style={styles.labelCheckbox}>
            <Checkbox
              value={isMaiorIdade}
              onValueChange={(newValue) => setIsMaiorIdade(newValue)}
            />
            <Text style={styles.checkboxText}>Declaro que sou maior de 18 anos.</Text>
          </View> */}
          <TouchableOpacity style={styles.loginButton} onPress={handleOnSubmit}>
            <Text style={styles.loginText} >Cadastr</Text>
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