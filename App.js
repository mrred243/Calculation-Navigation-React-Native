import React, {useState} from 'react';
import { StyleSheet, Text, Keyboard, Button, Alert, TextInput, Image, View, TouchableWithoutFeedback, FlatList} from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './Home';
import HistoryScreen from './Setting';



  const AppNavigator = createStackNavigator(
    { Home: {screen:HomeScreen},
    History: {screen: HistoryScreen}}
  );

  const AppContainer =  createAppContainer(AppNavigator);

  export default function App() {
    return (
  <AppContainer/>
);
}
