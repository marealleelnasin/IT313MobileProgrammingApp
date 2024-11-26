import React from 'react';
import { Alert, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Icon for Logout button

// Import screens
import LoginScreen from '../LoginScreen';
import ProfilePage from '../ProfilePage';
import SignUpScreen from '../SignUpScreen';
import PasswordRecovery from '../PasswordRecovery';


// Placeholder for Settings Screen
const SettingsScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EFE9E2' }}>
    <Text style={{ fontSize: 18, color: '#333' }}>Settings Page (Coming Soon)</Text>
  </View>
);

// Drawer Navigator
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  const handleLogout = (navigation) => {
    Alert.alert(
      "Logout",
      "Are you sure you want to log out?",
      [
        { text: "No", style: "cancel" },
        {
          text: "Yes",
          onPress: () => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'Login' }], // Navigate to Login and reset stack
            });
          },
        },
      ]
    );
  };

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#EFE9E2' },
        headerTintColor: '#000',
      }}
    >
      {/* Home Screen */}
      <Drawer.Screen 
        name="Home" 
        component={ProfilePage} 
        options={{ title: 'Home' }} 
      />

      {/* Settings Screen */}
      <Drawer.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{
          title: 'Settings',
          headerStyle: {
            backgroundColor: '#EFE9E2',
            borderBottomColor: 'rgb(239, 233, 226)',
            borderBottomWidth: 1,
          },
        }}
      />

      {/* Logout Screen */}
      <Drawer.Screen 
        name="Logout" 
        component={LoginScreen} // No actual screen needed
        options={{

          drawerIcon: ({ color }) => (
            <Ionicons name="log-out-outline" size={24} color={color} />
          ),
        }}
        listeners={({ navigation }) => ({
          press: () => handleLogout(navigation),
        })}
      />
    </Drawer.Navigator>
  );
}

// Stack Navigator
const Stack = createStackNavigator();
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Login Screen */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        {/* Drawer Navigator */}
        <Stack.Screen
          name="ProfilePage"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />

        {/* Sign Up Screen */}
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{
            title: 'Sign Up',
            headerStyle: { backgroundColor: '#ffe6e6', borderBottomColor: '#ffe6e6' },
            headerTintColor: '#000',
          }}
        />

        {/* Password Recovery Screen */}
        <Stack.Screen
          name="PasswordRecovery"
          component={PasswordRecovery}
          options={{
            title: 'Password Recovery',
            headerStyle: { backgroundColor: '#ffe6e6', borderBottomColor: '#ffe6e6' },
            headerTintColor: '#000',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
