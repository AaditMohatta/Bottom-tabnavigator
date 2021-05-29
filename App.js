import React from 'react';
import {Stylesheet,Text,View}from 'react-native';
import {createAppContainer}from 'react-navigation';





const TabNavigator=createBottonTabNavigator({
    fbscreen:{screen:fbscreen},
    instascreen:{screen:instascreen},
    Search:{screen:SearchScreen}
});
const AppContainer=createAppContainer(TabNavigator);

const styles=StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"red",
      alignItems:"center",
      justifyContent:"center"

    }
});