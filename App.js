import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';



import HomeScreen from './components/home';
import StateScreen from './components/state';

//Tarih
import Tar_01 from './components/tarih/Tar_01';




const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    State: StateScreen,
    Tar_01: Tar_01  
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE0B2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  standartText: {
    color: '#795548'
  },
});