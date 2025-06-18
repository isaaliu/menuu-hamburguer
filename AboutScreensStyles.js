// Tela principal com a barra de navegação inferior
import { StyleSheet } from 'react-native';  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    loginButton: {
      marginTop: 20,
      padding: 10,
      backgroundColor: '#007bff',
      borderRadius: 5,
    },
    loginButtonText: {
      color: '#fff',
      fontSize: 16,
    },
    link: {
      color: '#007bff',
      marginTop: 10,
    },
  });
  
  export default styles;