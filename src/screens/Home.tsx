import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={()=>navigation.navigate('Reminder')}>
        <Text style={{color:'#000000'}}>Reminder</Text>
      </Pressable>
    </View>
  )
}

export default Home
const styles =StyleSheet.create({
  container:{
    flex:1,
    padding:10
  }
})