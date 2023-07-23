import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import Header from '../commonUi/Header';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  addItemToCart,
  reduceItemFromCart,
  removeItemFromCart,
} from '../../store/cart/CartSlice';
import CustomButton from '../commonUi/CustomButton';

const Checkout = ({navigation,route}) => {
    // console.log(route.params.item);
  const items = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [cartListItems, setCartListItems] = useState([]);
  const [selectedMethod, setSelectedMethod] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState(
    'please select address',
  );
  useEffect(() => {
    setCartListItems(items.data);
  }, [items]);

  const getTotal = () => {
    let total = 0;
    cartListItems.map(item => {
      total = total + item.qty * item.price;
    });
    return total.toFixed(0);
  };
  return (
    <ScrollView style={styles.container}>
      <Header
        leftIcon={require('../../assests/back.png')}
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
        title={'Checkout'}
      />
      <Text style={styles.title}>Added Items</Text>
      <View style={{height: 450}}>
        <FlatList
          data={cartListItems}
          keyExtractor={item => String(item.id)}
          renderItem={({item, index}) => {
            return (
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
                  <Text style={styles.name}>{item.title}</Text>
                  <Text style={styles.desc}>
                    {item.description}
                    {/* .length > 30
                    ? item.description.substring(0, 30) + '...'
                    : item.description} */}
                  </Text>
                  <View style={styles.qtyView}>
                    <Text style={styles.price}> {'\u20B9' + item.price}</Text>
                    <TouchableOpacity
                      style={styles.btn}
                      onPress={() => {
                        if (item.qty > 1) {
                          dispatch(reduceItemFromCart(item));
                        } else {
                          dispatch(removeItemFromCart(index));
                        }
                      }}>
                      <Text
                        style={{
                          color: '#000',
                          fontSize: 16,
                          fontWeight: '400',
                        }}>
                        -
                      </Text>
                    </TouchableOpacity>
                    <Text style={styles.qty}>{item.qty}</Text>
                    <TouchableOpacity
                      style={styles.btn}
                      onPress={() => {
                        dispatch(addItemToCart(item));
                        console.log(item.qty);
                      }}>
                      <Text
                        style={{
                          color: '#000',
                          fontSize: 16,
                          fontWeight: '400',
                        }}>
                        +
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={styles.totalView}>
        <Text style={styles.title}>Total</Text>
        <Text style={styles.title}>{'\u20B9 ' + getTotal()}</Text>
      </View>
      <Text style={styles.title}>Select payment mode</Text>
      <TouchableOpacity
        style={styles.paymentMethod}
        onPress={() => {
          setSelectedMethod(0);
        }}>
        <Image
          style={styles.img}
          source={
            selectedMethod == 0
              ? require('../../assests/radio-on.png')
              : require('../../assests/radio-off.png')
          }
        />
        <Text style={styles.paymentText}>Credit Card</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.paymentMethod}
        onPress={() => {
          setSelectedMethod(1);
        }}>
        <Image
          style={styles.img}
          source={
            selectedMethod == 1
              ? require('../../assests/radio-on.png')
              : require('../../assests/radio-off.png')
          }
        />
        <Text style={styles.paymentText}>Debit Card</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.paymentMethod}
        onPress={() => {
          setSelectedMethod(2);
        }}>
        <Image
          style={styles.img}
          source={
            selectedMethod == 2
              ? require('../../assests/radio-on.png')
              : require('../../assests/radio-off.png')
          }
        />
        <Text style={styles.paymentText}>UPI</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.paymentMethod}
        onPress={() => {
          setSelectedMethod(3);
        }}>
        <Image
          style={styles.img}
          source={
            selectedMethod == 3
              ? require('../../assests/radio-on.png')
              : require('../../assests/radio-off.png')
          }
        />
        <Text style={styles.paymentText}>Cash on delivery</Text>
      </TouchableOpacity>
      <View style={styles.addressView}>
        <Text style={styles.title}>Address</Text>
        <Text
          style={[styles.title, {textDecorationLine: 'underline'}]}
          onPress={() => navigation.navigate('Address')}>
          Edit Address
        </Text>
      </View>

      <Text
        style={[styles.title, {marginTop: 5, fontSize: 16, color: '#636363'}]}>
        {selectedAddress}
      </Text>
      <CustomButton bg={'green'} title={'Pay & order'} color={'#fff'} />
    </ScrollView>
  );
};

export default Checkout;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    // marginTop:30,
    color: '#000',
    padding: 20,
  },
  detail: {
    marginTop: 15,
    justifyContent: 'flex-start',
  },
  productItem: {
    width: Dimensions.get('window').width - 300,
    backgroundColor: '#fff',
    marginTop: 5,
    marginHorizontal: 5,
    padding: 15,
  },
  item: {
    width: '60%',
    height: 250,
    justifyContent: 'center',
    resizeMode: 'contain',
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
  qtyView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  qty: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '800',
    color: '#000',
  },
  totalView: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
    // paddingHorizontal:30,
    borderBottomWidth: 0.5,
    alignItems: 'center',
    borderBottomColor: '#B7B&B&',
  },
  paymentMethod: {
    flexDirection: 'row',
    width: '90%',
    marginTop: 15,
    paddingHorizontal: 15,
  },
  img: {
    width: 24,
    height: 24,
  },
  paymentText: {
    marginLeft: 20,
    fontSize: 16,
    color: '#000',
  },
  addressView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
  },
});
