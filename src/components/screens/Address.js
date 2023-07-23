import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../commonUi/Header';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';

const Address = ({navigation}) => {
  const isFocus = useIsFocused();
  const AddressList = useSelector(state => state.addAddress.data);
  const [adrs, setAdrs] = useState(AddressList);

  useEffect(() => {
    console.log('AddressList', AddressList);
  }, [isFocus]);

  const defaultAddress =async (item)=>{
    navigation.navigate('Checkout',{
        item:item
    })
  }
  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../../assests/back.png')}
        onClickLeftIcon={() => navigation.goBack()}
        title={'My Address'}
      />
      {/* <View style={{height:600}}> */}
      <FlatList
        data={adrs}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{
                width: '50%',
                backgroundColor: '#fff',
                borderWidth: 0.5,
                alignSelf: 'center',
                marginTop: 20,
                padding: 20,
              }}
              onPress={()=>{defaultAddress(item)}}>
              <Text style={styles.title}>{`State : ${item.state}`}</Text>
              <Text style={styles.title}>{`City : ${item.city}`}</Text>
              <Text style={styles.title}>{`Pincode : ${item.pinCode}`}</Text>
              <Text
                style={[
                  styles.title,
                  {
                    position: 'absolute',
                    right: 20,
                    top: 20,
                    backgroundColor: '#B1BFF5',
                    padding: 10,
                    borderRadius: 20,
                    fontSize: 15,
                  },
                ]}>{`${item.type}`}</Text>
            </TouchableOpacity>
          );
        }}
      />
      {/* </View> */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          navigation.navigate('AddAddress');
        }}>
        <Text style={{color: '#000', fontSize: 38}}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Address;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  addButton: {
    width: 50,
    height: 50,
    backgroundColor: '#ECBA00',
    borderRadius: 25,
    position: 'absolute',
    bottom: 50,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#000',
    fontSize: 28,
  },
});
