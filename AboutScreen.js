import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../src/styles/AboutScreensStyles';

export default function AboutScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();


  const Register = () => {
    navigation.navigate('Cadastro');
  };

  const ForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      {/* Balão estilizado */}
      <View style={styles.bubbleContainer}>
        <View style={styles.bubble}>
          <Text style={styles.bubbleText}></Text>
          <Text style={styles.bubbleText}></Text>
        </View>
      </View>

      {/* Título */}
      <Text style={styles.title}>Meu Aplicativo</Text>
      
      <Text style={styles.title}>Versão: Versão 1.0.0</Text>

      
      <TouchableOpacity style={styles.loginButton} >
        <Text style={styles.loginButtonText}>Visite meu site</Text>
      </TouchableOpacity>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      <TouchableOpacity style={styles.loginButton} >
        <Text style={styles.loginButtonText}>Entre em contato por email</Text>
      </TouchableOpacity>
    </View>
  );
}
