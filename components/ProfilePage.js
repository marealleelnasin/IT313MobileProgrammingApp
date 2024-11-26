import React, { useState, useEffect } from 'react';
import { View, Text, Image, Switch, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ProfilePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigation = useNavigation(); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Set header styles based on dark mode
  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: isDarkMode ? '#333' : '#EFE9E2',  // Dark mode: #333, Light mode: #EFE9E2
        borderBottomColor: isDarkMode ? '#333' : '#EFE9E2',
        borderBottomWidth: 2,
      },
      headerTintColor: isDarkMode ? '#FFF' : '#000',  // Dark mode: white text, Light mode: black text
    });
  }, [isDarkMode, navigation]);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ffafb8" />
      </View>
    );
  }

  return (
    <View style={[styles.container, isDarkMode ? styles.containerDark : null]}>
      <View style={styles.toggleButtonContainer}>
        <Text style={styles.toggleText}></Text>
        <Switch
          value={isDarkMode}
          onValueChange={(value) => setIsDarkMode(value)} 
          thumbColor={isDarkMode ? '#ffafb8' : '#333'}
          trackColor={{ false: '#ccc', true: '#888' }}
        />
        <Ionicons
          name={isDarkMode ? 'moon' : 'sunny'}
          size={24}
          color={isDarkMode ? '#ffafb8' : '#333'}
          style={styles.icon}
        />
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/Marealle.jpg')} 
          style={styles.profileImage}
        />
      </View>

      <Text style={[styles.nameText, isDarkMode ? styles.nameTextDark : null]}>
        Marealle G. Elnasin
      </Text>

      <View style={styles.socialIconsContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Ionicons name="logo-facebook" size={24} color={isDarkMode ? '#fff' : '#3b5998'} />
          <Text style={styles.socialText}>Add me on Facebook.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Ionicons name="logo-instagram" size={24} color={isDarkMode ? '#fff' : '#E1306C'} />
          <Text style={styles.socialText}>Follow me on Instagram.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Ionicons name="logo-github" size={24} color={isDarkMode ? '#fff' : '#333'} />
          <Text style={styles.socialText}>View my GitHub.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Ionicons name="mail" size={24} color={isDarkMode ? '#fff' : '#1DA1F2'} />
          <Text style={styles.socialText}>Email me.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: { 
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#efe9e2', 
  },
  container: {
    flex: 1,
    backgroundColor: '#EFE9E2',  // Light mode background
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    position: 'relative', 
  },
  containerDark: {
    backgroundColor: '#333',  // Dark mode background
  },
  toggleButtonContainer: {
    position: 'absolute',
    top: 40,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleText: {
    color: '#333',
    marginRight: 10,
    fontSize: 16,
    fontWeight: '500',
  },
  imageContainer: {
    borderWidth: 4,
    borderColor: '#ffafb8',
    borderRadius: 100,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, 
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#887a7a',  // Light mode text color
    marginBottom: 5,
  },
  nameTextDark: {
    color: '#fff',  // Dark mode text color
  },
  socialIconsContainer: {
    flexDirection: 'column',
    marginTop: 20,
    width: '100%', 
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#ffafb8', 
    justifyContent: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  socialText: {
    color: '#fff',
    marginLeft: 5,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default ProfilePage;
