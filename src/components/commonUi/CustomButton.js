import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({bg,title,onClick,color}) => {
  return (
    <TouchableOpacity activeOpacity={1} style={[styles.btn,{backgroundColor:bg}]}
    onPress={onClick}
    >
      <Text style={{color:color,fontSize:18,fontWeight:'600'}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton
const styles = StyleSheet.create({
    btn:{
        width : '70%',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        marginTop:10,
        borderRadius:10
    }
})