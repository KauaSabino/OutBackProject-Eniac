import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function Cadastrar({ navigation }) {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = () => {

    if (nome && cpf && email && senha) {

      navigation.navigate('Entrar', { email, senha });
    } else {

      Alert.alert("Erro", "Por favor, preencha todos os campos.");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../images/logo-amarelo.png')} style={styles.logo} />
      <View style={styles.legenda}>
        <Text style={styles.title}>Cadastre-se</Text>
        <Text style={styles.span}>Crie sua conta preenchendo os campos abaixo.</Text>
      </View>

      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>CPF:</Text>
      <TextInput
        style={styles.input}
        value={cpf}
        onChangeText={setCpf}
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Senha:</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.botao} onPress={handleCadastro}>
        <Text style={styles.botaoTexto}>Cadastrar</Text>
      </TouchableOpacity>

      <View style={styles.divCad}>
        <Text>Já possui conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Entrar')}>
          <Text style={styles.link}>Entre</Text>
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
    width: '100%',
    height: 40,
    maxHeight: 40,
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
