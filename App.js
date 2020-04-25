import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './screens/Home';
import Next from  './screens/Next';

const MainNavigator = createStackNavigator({
  Home: { screen:Home},
  Next: { screen:Next}
},
{
  defaultNavigationOptions:{
    headerTintColor:"#00a8ff",
    headerStyle:{backgroundColor:"#00a8ff"},
    headerTitleStyle:{color:"#00a8ff"}

  }
}


);
const App = createAppContainer(MainNavigator);
export default App;
