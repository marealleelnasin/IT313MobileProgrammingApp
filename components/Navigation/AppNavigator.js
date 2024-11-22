import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from '../LoginScreen'; 
import ProfilePage from '../ProfilePage'; 
import SignUpScreen from '../SignUpScreen';
import PasswordRecovery from '../PasswordRecovery';

const Stack = createStackNavigator();
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfilePage"
          component={ProfilePage}
          options={{ title: 'Profile' ,
            headerStyle: {
              backgroundColor: '#EFE9E2',
              borderBottomColor: '#EFE9E2',
              headerTintColor: '#000',
            }}}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ title: 'Sign Up' ,
            headerStyle: {
              backgroundColor: '#ffe6e6',
              borderBottomColor: '#ffe6e6',
              headerTintColor: '#000',
            }
          }}
        />
        <Stack.Screen
          name="PasswordRecovery"
          component={PasswordRecovery}
          options={{ title: 'Password Recovery',
            headerStyle: {
              backgroundColor: '#EFE9E2',
              borderBottomColor: '#EFE9E2',
              headerTintColor: '#000',
            }
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
