import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './src/screens/Welcome';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigations/Navigation';

export default function App() {
  return (
    <NavigationContainer>
      <Navigation/>
  </NavigationContainer>
  );
}

