import React from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const SignUp = ({ navigation }: { navigation: any }): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Logo and Heading */}
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/logo2.jpeg')} style={styles.logo} />
      </View>
      <Text style={styles.heading}>Sign up to your account</Text>

      {/* Input Fields */}
      <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#aaa" />
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#aaa" />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#aaa" secureTextEntry />
      <TextInput
        style={styles.input}
        placeholder="Re-enter Password"
        placeholderTextColor="#aaa"
        secureTextEntry
      />

      {/* Sign-Up Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Login Link */}
      <Text style={styles.loginText}>
        <Text style={styles.loginText}>
          Already have an account?{' '}
        < Text/>
        <Text style={styles.loginLink} onPress={() => navigation.navigate('LogIn')}>
            Log In
        </Text>
     </Text>

      </Text>
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
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#004d4d',
    marginBottom: 10,
  },
  logo: {
    width: 200,  
    height: 200, 
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
  loginText: {
    color: '#253A3D',
    marginTop: 20,
  },
  loginLink: {
    color: '#004d4d',
    fontWeight: 'bold',
  },
});

export default SignUp;
