import React from 'react';
import { Alert, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'; 

import LoginScreen from '../LoginScreen';
import ProfilePage from '../ProfilePage';
import SignUpScreen from '../SignUpScreen';
import PasswordRecovery from '../PasswordRecovery';

const SettingsScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EFE9E2' }}>
    <Text style={{ fontSize: 18, color: '#333' }}>Settings Page (Coming Soon)</Text>
  </View>
);

const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#ff6b81',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={ProfilePage} />
      <Tab.Screen name="Profile" component={ProfilePage} />
      <Tab.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{
          tabBarLabelStyle: {
            backgroundColor: 'rgb(239, 233, 226)', 
            borderBottomColor: 'rgb(239, 233, 226)', 
            borderBottomWidth: 2, 
          },
        }}
      />
    </Tab.Navigator>
  );
}

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
              routes: [{ name: 'LoginScreen' }], 
            });
          },
        },
      ]
    );
  };

  return (
    <Drawer.Navigator
      initialRouteName="Dashboard" 
      screenOptions={{
        headerStyle: { backgroundColor: '#EFE9E2' },
        headerTintColor: '#000',
      }}
    >
      <Drawer.Screen 
        name="Dashboard"  
        component={TabNavigator}  
        options={{ title: 'Dashboard' }}  
      />

      <Drawer.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{
          title: 'Settings',
          headerStyle: {
            backgroundColor: '#EFE9E2',  
            borderBottomColor: '#EFE9E2', 
            borderBottomWidth: 1,  
          },
        }}
      />

      <Drawer.Screen 
        name="Logout" 
        component={LoginScreen} 
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


const Stack = createStackNavigator();
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />


        <Stack.Screen
          name="ProfilePage"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />


        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{
            title: 'Sign Up',
            headerStyle: { backgroundColor: '#ffe6e6', borderBottomColor: '#ffe6e6' },
            headerTintColor: '#000',
          }}
        />

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
