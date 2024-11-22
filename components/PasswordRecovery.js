import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function PasswordRecovery() {
  const systemColorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(systemColorScheme === 'dark');
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const styles = isDarkMode ? darkStyles : lightStyles;

  const handlePasswordRecovery = () => {
    // Logic for handling password recovery, e.g., API call
    console.log(`Password recovery link sent to: ${email}`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.toggleButton} onPress={() => setIsDarkMode(!isDarkMode)}>
        <Ionicons name={isDarkMode ? 'sunny' : 'moon'} size={24} color={isDarkMode ? '#ffafb8' : '#333'} />
      </TouchableOpacity>

      <Text style={styles.title}>Password Recovery</Text>
      <Text style={styles.subtitle}>Enter your email to receive a recovery link.</Text>

      <View style={styles.iconInput}>
        <Ionicons name="mail" size={24} color={isDarkMode ? '#fff' : '#333'} style={styles.icon} />
        <TextInput
          placeholder="Email"
          placeholderTextColor={isDarkMode ? '#b0b0b0' : '#887a7a'}
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handlePasswordRecovery}>
        <Text style={styles.buttonText}>Send Recovery Link</Text>
      </TouchableOpacity>
    </View>
  );
}

// Shared and Mode-Specific Styles
const commonStyles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  toggleButton: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginBottom: 20,
  },
  iconInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    width: '100%',
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    color: '#333',
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
};

const lightStyles = StyleSheet.create({
  ...commonStyles,
  container: {
    ...commonStyles.container,
    backgroundColor: '#FFE5E5',
  },
  title: {
    ...commonStyles.title,
    color: '#333',
  },
  subtitle: {
    ...commonStyles.subtitle,
    color: '#555',
  },
  iconInput: {
    ...commonStyles.iconInput,
    backgroundColor: '#fff',
  },
  button: {
    ...commonStyles.button,
    backgroundColor: '#ff6b81',
  },
});

const darkStyles = StyleSheet.create({
  ...commonStyles,
  container: {
    ...commonStyles.container,
    backgroundColor: '#333',
  },
  title: {
    ...commonStyles.title,
    color: '#FFE5E5',
  },
  subtitle: {
    ...commonStyles.subtitle,
    color: '#bbb',
  },
  iconInput: {
    ...commonStyles.iconInput,
    backgroundColor: '#555',
  },
  button: {
    ...commonStyles.button,
    backgroundColor: '#ff6b81',
  },
});
