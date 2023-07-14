import {SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import MyStack from './src/navigator/StackNavigation'
import {NavigationContainer} from '@react-navigation/native';
import { Provider } from 'react-redux';
import Store from './src/store/Store';


const App = () => {
  return (
    <Provider store={Store}>
    <SafeAreaView style={styles.container}>
    <NavigationContainer>
    <MyStack />
    </NavigationContainer>
    </SafeAreaView>
    </Provider>
  )
}

export default App
const styles = StyleSheet.create({
  container:{
    flex:1
  }
})