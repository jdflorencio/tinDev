import React, { useState, useEffect } from 'react'
import logo from '../../assets/logo.png'
// import AsyncStorage from '@react-native-community/async-storage'
import { 
  KeyboardAvoidingView, 
  Platform,StyleSheet,
  Image,
  TextInput,
  TouchableOpacity, 
  Text, 
  AsyncStorage
} from 'react-native'

import api from '../services/api'

function Login({ navigation }) {
  const [user, setUser] = useState('')
  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      if (user) {
        navigation.navigate('Main', { user })
      }
    })
  }, [])

  async function handleLogin() {
    const response = await api.post('/devs', {username: user})  
    const {_id} = response.data    
    await AsyncStorage.setItem('user', _id)
    navigation.navigate('Main', { _id })
    
  }

  return (
    <KeyboardAvoidingView 
    style={styles.container}
    behavior="padding"
    enabled={Platform.OS == 'android'}
    >
      <Image source={logo} />
      <TextInput 
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Digite seu usuario do GitHub"
        placeholderTextColor="#999"
        style={styles.input}
        value={user}
        onChangeText={setUser}
        />
        <TouchableOpacity 
        style={styles.button}
        onPress={handleLogin}
        >
          <Text style={styles.textButton}>Enviar</Text>
        </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  input: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15,
  }, 
  button: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#ff0000',
    borderRadius: 4,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  }  
})

export default Login