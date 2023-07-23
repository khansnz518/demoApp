import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Header from '../commonUi/Header';
import CustomButton from '../commonUi/CustomButton';
import {useDispatch} from 'react-redux';
import {addItemToWishlist} from '../../store/wishList/wishListSlice';
import {addItemToCart} from '../../store/cart/CartSlice';

const ProductDetail = ({navigation, route}) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  return (
    <ScrollView style={styles.contaainer}>
      <Header
        leftIcon={require('../../assests/back.png')}
        rightIcon={require('../../assests/shopping-bag.png')}
        onClickLeftIcon={() => navigation.goBack()}
        title={'Product Detail'}
        isCart={true}
      />

      <Image source={{uri: route.params.data.image}} style={styles.banner} />
      <Text style={styles.title}>{route.params.data.title}</Text>
      <Text style={styles.desc}>{route.params.data.description}</Text>
      <View style={styles.qtyView}>
      <Text style={styles.price}>
        {'Price : ' + '\u20B9' + route.params.data.price}
      </Text>
        {/* <Text style={styles.price}> {'\u20B9' + item.price}</Text> */}
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            if (qty > 1) {
              setQty(qty - 1);
              //     dispatch(reduceItemFromCart(item))
            } else {
              //     dispatch(removeItemFromCart(index))
            }
          }}>
          <Text style={{color: '#000', fontSize: 16, fontWeight: '400'}}>
            -
          </Text>
        </TouchableOpacity>
        <Text style={styles.qty}>{qty}</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            // dispatch(addItemToCart(item))
            setQty(qty + 1);
          }}>
          <Text style={{color: '#000', fontSize: 16, fontWeight: '400'}}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.wishlistBtn}
        onPress={() => {
          dispatch(addItemToWishlist(route?.params?.data));
        }}>
        <Image
          style={styles.icon}
          source={require('../../assests/heart.png')}
        />
      </TouchableOpacity>

      <CustomButton
        bg={'#FF9A0C'}
        title={'Add to Cart'}
        color={'#fff'}
        onClick={() =>{
            setQty(1)
          // console.log(route.params.data)
          dispatch(
            addItemToCart({
              category: route.params.data.category,
              description: route.params.data.description,
              id: route.params.data.id,
              image: route.params.data.image,
              price: route.params.data.price,
              qty: qty,
              rating: route.params.data.rating,
              title: route.params.data.title,
            }),
          )
        }}
      />
    </ScrollView>
  );
};

export default ProductDetail;
const styles = StyleSheet.create({
  contaainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    color: '#000',
    fontWeight: '600',
    marginTop: 20,
    marginHorizontal: 80,
  },
  desc: {
    fontSize: 16,
    color: '#000',
    fontWeight: '300',
    width: '90%',
    marginHorizontal: 80,
    marginTop: 10,
  },
  price: {
    color: '#000',
    marginHorizontal: 80,
    fontSize: 20,
    fontWeight: '400',
    marginTop: 10,
  },
  wishlistBtn: {
    position: 'absolute',
    right: 300,
    top: 130,
    backgroundColor: '#E2DFDF',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  icon: {
    width: 24,
    height: 24,
  },
  qtyView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center'
  },
  qty: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '800',
    color: '#000',
  },
  btn: {
    padding: 5,
    borderWidth: 0.5,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 10,
    marginLeft: 10,
  },
});
