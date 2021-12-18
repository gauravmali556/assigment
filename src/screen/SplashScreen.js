import React, { useState, useEffect } from 'react';
import { View, Image, ImageBackground, Text, StyleSheet } from 'react-native'

const SplashScreen = props => {

  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate("LoginScreen")
    }, 500)

  });
  return (
    <View style={{ flex: 1 }}>
      <Text>Hello SplashScreen</Text>
    </View>
  );
};



export default SplashScreen;