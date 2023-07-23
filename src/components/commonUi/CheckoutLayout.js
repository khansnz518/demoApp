import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const CheckoutLayout
 = ({total,items,navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.tab}>
            <Text style={{color:'#000'}}>{`Number of items : `+items}</Text>
            <Text style={{color:'#000'}}>{'Total price : \u20B9 ' + total}</Text>
        </View>
        <View style={styles.tab}>
            <TouchableOpacity style={styles.checkout} onPress={()=>navigation.navigate('Checkout')}>
                <Text style={{color:"#fff"}}>
                    Checkout
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default CheckoutLayout
const styles = StyleSheet.create({
    container:{
        position:'absolute',
        bottom:0,
        height:70,
        width:'100%',
        backgroundColor:'#fff',
        flexDirection:"row",
        // justifyContent:'space-evenly',
        // alignItems:'center'

    },
    tab:{
        width:'50%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    checkout:{
        width:"80%",
        height:'60%',
        backgroundColor:'#FF8605',
        borderRadius:10,
        justifyContent:'center',
        alignItems:"center"

    }
})
