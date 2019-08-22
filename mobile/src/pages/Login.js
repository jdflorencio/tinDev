import React from 'react'
import logo from '../../assets/logo.png'
import { View, KeyboardAvoidingView, Platform,StyleSheet, Image, TextInput, TouchableOpacity, Text} from 'react-native'


function Login({ navigation }) {
  function handleLogin() {
    navigation.navigate('Main')
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
        />
        <TouchableOpacity 
        style={styles.button}
        onPress={handleLogin}>
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