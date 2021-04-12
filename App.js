import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { View, StatusBar } from 'react-native';
import firebase from './src/services/firebaseConnection';
import Routes from './src/routes'

const App = () => {
  return (
  <NavigationContainer>
    <StatusBar backgroundColor="#131313" barStyle="light-content"/>
    <Routes/>
  </NavigationContainer>
  );
}

export default App;