import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchScreen from './screens/searchScreen'
import TransactionScreen from './screens/transactionScreens'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component{
  render(){
    return(
      <View>
        <AppContainer/>
      </View>
    )
  }
}
const TabNavigator=createBottomTabNavigator({
  transaction:{screen:TransactionScreen},
  search:{screen:SearchScreen}
})
const AppContainer=createAppContainer(TabNavigator);