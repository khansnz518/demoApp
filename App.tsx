import {SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import MyStack from './src/navigator/StackNavigation'
import {NavigationContainer} from '@react-navigation/native';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
    <NavigationContainer>
    <MyStack />
    </NavigationContainer>
    </SafeAreaView>
  )
}

export default App
const styles = StyleSheet.create({
  container:{
    flex:1
  }
})