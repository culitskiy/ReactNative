import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Welcome from './src/components/Welcome';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import Game from './src/components/Game.js';

const Navigator = createStackNavigator ({
  Welcome: Welcome,
  Game: Game
});

const AppContainer = createAppContainer(Navigator);

export default class App extends React.Component {
 render () {
   return(
     <View style={{flex:1, flexWrap: 'wrap'}} >
       <AppContainer/>
     </View>
    
   )
 }
}