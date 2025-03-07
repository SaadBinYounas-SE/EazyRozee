import React from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LogIn = ({ navigation }: { navigation: any }): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </View>

      {/* Heading Section */}
      <Text style={styles.heading}>Log in to your account</Text>

      {/* Input Fields */}
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#aaa" />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#aaa" secureTextEntry />

      {/* Login Button - Redirects to SellerTabNavigator */}
<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CustomerTabNavigator')}>
  <Text style={styles.buttonText}>Login</Text>
</TouchableOpacity>

      {/* onPress={() => navigation.replace('SellerTabNavigator')} */}

      {/* Forgot Password Link */}
      <Text style={styles.forgotPassword}>Forgot password?</Text>

      {/* Divider */}
      <Text style={styles.orText}>OR</Text>

      {/* Create Account Button */}
      <TouchableOpacity style={styles.createAccountButton} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.createAccountText}>Create an account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    color: '#333',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#253A3D',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  forgotPassword: {
    color: '#555',
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
  orText: {
    fontSize: 14,
    color: '#aaa',
    marginBottom: 10,
  },
  createAccountButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#253A3D',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  createAccountText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default LogIn;
