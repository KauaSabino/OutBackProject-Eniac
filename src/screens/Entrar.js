import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function Entrar({ route, navigation }) {
  const { email, senha } = route.params || {};

  const [emailInput, setEmailInput] = useState('');
  const [senhaInput, setSenhaInput] = useState('');

  const handleLogin = () => {
    if (emailInput == email && senhaInput == senha) {

      navigation.navigate('Home');
    } else {
      
      Alert.alert('Erro', 'Email ou senha incorretos!');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../images/logo-amarelo.png')} style={styles.logo} />
      <View style={styles.legenda}>
        <Text style={styles.title}>Entrar</Text>
        <Text style={styles.span}>Preencha os campos abaixo para entrar em sua conta.</Text>
      </View>

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={emailInput}
        onChangeText={setEmailInput}
      />

      <Text style={styles.label}>Senha:</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        value={senhaInput}
        onChangeText={setSenhaInput}
      />

      <TouchableOpacity style={styles.botao} onPress={handleLogin}>
        <Text style={styles.botaoTexto}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.divCad}>
        <Text>Não possui conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastrar')}>
          <Text style={styles.link}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  logo: {
    width: 170,
    height: 170,
    alignSelf: 'center',
    marginBottom: 30,
  },
  legenda: {
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: '#A00F2D',
  },
  span: {
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'regular',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#D9D9D9',
    marginBottom: 10,
    paddingLeft: 10,
  },
  botao: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    maxHeight: 40,
    width: '100%',
    backgroundColor: '#A00F2D',
    marginTop: 10,
    borderRadius: 10,
  },
  botaoTexto: {
    textAlign: 'center',
    color: '#F9AD33',
    fontSize: 20,
    fontWeight: "bold",
  },
  divCad: {
    marginTop: 10,
    alignItems: 'center',
  },
  link: {
    textDecorationLine: 'underline',
  }
});
