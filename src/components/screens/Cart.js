import {View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity,Image} from 'react-native';
import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../commonUi/Header';
import { addItemToCart, reduceItemFromCart, removeItemFromCart } from '../../store/cart/CartSlice';
import CheckoutLayout from '../commonUi/CheckoutLayout';

const Cart = ({navigation}) => {
  const items = useSelector(state => state.cart);
  const dispatch =useDispatch()
  const [cartListItems,setCartListItems] = useState([])
  console.log(JSON.stringify(items) + ' ' + items.data.length);

  useEffect(()=>{

    setCartListItems(items.data)
  }
  ,[items])

  const getTotal= ()=>{
    let total = 0;
    cartListItems.map(item=>{
      total =total+ item.qty*item.price;
    })
    return total.toFixed(0);
  }
  return (
    <View style={styles.container}>
      <Header title={'Cart'} leftIcon={require('../../assests/back.png')} onClickLeftIcon={()=>{navigation.goBack()}}/>
    { cartListItems.length >0 &&
     <FlatList 
      data={cartListItems } 
      keyExtractor={item => String(item.id)}

      renderItem={({item,index})=> {
        return(
          <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                navigation.navigate('ProductDetail', {
                  data: item,
                });
              }}
              style={styles.productItem}>
              <Image source={{uri: item.image}} style={styles.item} />
              <View style={{flexDirection: 'row', marginTop: 10}}>
                {/* <Image
            source={require('../../assests/star.png')}
            style={styles.star}
          /> */}
              </View>
              <View style={styles.detail}>
                <Text style={styles.name}>
                  {item.title}
                </Text>
                <Text style={styles.desc}>
                  {item.description}
                  {/* .length > 30
                    ? item.description.substring(0, 30) + '...'
                    : item.description} */}
                </Text>
                <View style={styles.qtyView}>
                <Text style={styles.price}> {'\u20B9' + item.price}</Text>
                <TouchableOpacity style={styles.btn} onPress={()=>{
                    if(item.qty > 1){
                        dispatch(reduceItemFromCart(item))
                    }else{
                        dispatch(removeItemFromCart(index))
                    }
                }}>
                    <Text style={{color:'#000',fontSize:16,fontWeight:'400'}}>-</Text>
                </TouchableOpacity>
                <Text style={styles.qty}>{item.qty}</Text>
                <TouchableOpacity style={styles.btn} 
                onPress={()=>{
                    dispatch(addItemToCart(item))
                    console.log(item.qty)
                }}
                >
                    <Text style={{color:'#000',fontSize:16,fontWeight:'400'}}>+</Text>
                </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
        )
      }}/>}
      {cartListItems.length < 1 &&
      <View style={{width:'100%',height:"100%",justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'#000'}}>No Items in the cart</Text>
        </View>
        }
      {cartListItems.length > 0 &&
      <CheckoutLayout 
      items={cartListItems.length} total={getTotal()}
      navigation={navigation}/>
    }
    </View>
  );
};

export default Cart;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  detail: {
    marginTop: 15,
    justifyContent: 'flex-start',
  },
  productItem: {
    width: Dimensions.get('window').width-300,
    backgroundColor: '#fff',
    marginTop: 5,
    marginHorizontal: 5,
    padding: 15,
  },
  item: {
    width: '60%',
    height: 250,
    justifyContent:'center',
    resizeMode:'contain'
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 0,
    color: '#000',
  },
  desc: {
    marginLeft: 0,
    color: '#000',
  },
  price: {
    color: 'black',
    fontSize: 18,
    fontWeight: '800',
    marginLeft: 0,
    marginTop: 5,
    color: '#000',
  },
  filterContainer: {
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  btn: {
   padding:5,
   borderWidth:0.5,
   width:30,
   justifyContent: 'center',
   alignItems:'center',
   borderWidth:0.5,
   borderRadius:10,
   marginLeft:10

  },
  qtyView:{
    flexDirection:"row",
    alignItems:'center',
    marginTop:20
  },
  qty:{
    marginLeft:10,
    fontSize:18,
    fontWeight:'800',color:'#000'
  }
});
