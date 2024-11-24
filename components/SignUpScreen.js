import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: darkMode ? '#333' : '#ffe6e6',
        borderBottomColor: darkMode ? '#333' : '#ffe6e6',
        borderBottomWidth: 2,
      },
      headerTintColor: darkMode ? '#fff' : '#333',
    });
  }, [darkMode, navigation]);

  const handleSignUp = () => {
    console.log('User signed up with:', { username, fullName, email, password });
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);

  return (
    <View style={[styles.container, darkMode ? styles.darkContainer : styles.lightContainer]}>
      {/* Dark Mode Toggle */}
      <TouchableOpacity style={styles.toggleButton} onPress={toggleDarkMode}>
        <Ionicons name={darkMode ? 'sunny' : 'moon'} size={24} color={darkMode ? '#ffafb8' : '#333'} />
      </TouchableOpacity>

      {/* Robot Icon */}
      <Image
        source={{ uri: 'https://i.pinimg.com/originals/4b/06/e3/4b06e393fd0647c265b1282b0f006486.gif' }}
        style={styles.robotIcon}
      />

      <Text style={[styles.title, darkMode ? styles.darkSignUpText : styles.lightSignUpText]}>Sign Up</Text>

      {/* Username Input */}
      <View style={[styles.inputContainer, darkMode ? styles.darkInputContainer : styles.lightInputContainer]}>
        <Ionicons name="person" size={20} color={darkMode ? '#ccc' : '#666'} style={styles.icon} />
        <TextInput
          style={[styles.input, darkMode ? styles.darkInputText : styles.lightInputText]}
          placeholder="Username"
          placeholderTextColor={darkMode ? '#ccc' : '#666'}
          value={username}
          onChangeText={setUsername}
        />
      </View>

      {/* Full Name Input */}
      <View style={[styles.inputContainer, darkMode ? styles.darkInputContainer : styles.lightInputContainer]}>
        <Ionicons name="person-outline" size={20} color={darkMode ? '#ccc' : '#666'} style={styles.icon} />
        <TextInput
          style={[styles.input, darkMode ? styles.darkInputText : styles.lightInputText]}
          placeholder="Full Name"
          placeholderTextColor={darkMode ? '#ccc' : '#666'}
          value={fullName}
          onChangeText={setFullName}
        />
      </View>

      {/* Email Input */}
      <View style={[styles.inputContainer, darkMode ? styles.darkInputContainer : styles.lightInputContainer]}>
        <Ionicons name="mail" size={20} color={darkMode ? '#ccc' : '#666'} style={styles.icon} />
        <TextInput
          style={[styles.input, darkMode ? styles.darkInputText : styles.lightInputText]}
          placeholder="Email"
          placeholderTextColor={darkMode ? '#ccc' : '#666'}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      {/* Password Input */}
      <View style={[styles.inputContainer, darkMode ? styles.darkInputContainer : styles.lightInputContainer]}>
        <Ionicons name="lock-closed" size={20} color={darkMode ? '#ccc' : '#666'} style={styles.icon} />
        <TextInput
          style={[styles.input, darkMode ? styles.darkInputText : styles.lightInputText]}
          placeholder="Password"
          placeholderTextColor={darkMode ? '#ccc' : '#666'}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!isPasswordVisible}
        />
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity style={[styles.button, darkMode ? styles.darkButton : styles.lightButton]} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Link to Login Screen */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.loginLink}>
        <Text style={[styles.loginText, darkMode ? styles.darkText : styles.lightText]}>
          Already have an account? 
        </Text>
        <Text style={[styles.loginButtonText, darkMode ? styles.darkTextLogin : styles.lightTextLogin]}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  lightSignUpText: {
    color: '#333',
  },
  darkSignUpText: {
    color: '#ffe5e5',
  },
  lightContainer: {
    backgroundColor: '#ffe6e6',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  toggleButton: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  robotIcon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  lightText: {
    color: '#333',
  },
  darkText: {
    color: '#f7f7f5',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 12,
    width: '100%',
    height: 50,
  },
  lightInputContainer: {
    backgroundColor: '#fff',
  },
  darkInputContainer: {
    backgroundColor: '#555',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 8,
  },
  lightInputText: {
    color: '#000',
  },
  darkInputText: {
    color: '#f7f7f5',
  },
  button: {
    paddingVertical: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  lightButton: {
    backgroundColor: '#ff6666',
  },
  darkButton: {
    backgroundColor: '#ff6666',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginLink: {
    marginTop: 15,
    flexDirection: 'row',
  },
  loginButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  loginText: {
    fontSize: 16,
  },
  lightTextLogin: {
    color: '#ffafb8',
  },
  darkTextLogin: {
    color: '#ffafb8',
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -12 }],
  },
});

export default SignUp;
