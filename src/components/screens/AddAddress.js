import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../commonUi/Header';
import CustomButton from '../commonUi/CustomButton';
import {useDispatch, useSelector} from 'react-redux';
import {addAddress} from '../../store/Address/AddressSlice';
import {useIsFocused} from '@react-navigation/native';

const AddAddress = ({navigation}) => {
  const dispatch = useDispatch();
  const isFocus = useIsFocused();
  const AddressList = useSelector(state => state.addAddress);
  const [type, setType] = useState(0);
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [pinCode, setPinCode] = useState('');
 

  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../../assests/back.png')}
        onClickLeftIcon={() => navigation.goBack()}
        title={'Add New Address'}
      />
      <TextInput
        style={[styles.input, {marginTop: 50}]}
        placeholder="Enter State"
        placeholderTextColor={'#000'}
        onChangeText={txt => setState(txt)}
      />
      <TextInput
        style={[styles.input, {marginTop: 15}]}
        placeholder="Enter city"
        placeholderTextColor={'#000'}
        onChangeText={txt => setCity(txt)}
      />
      <TextInput
        style={[styles.input, {marginTop: 15}]}
        placeholder="Enter Pincode"
        placeholderTextColor={'#000'}
        keyboardType="number-pad"
        onChangeText={txt => setPinCode(txt)}
      />
      <View style={styles.typeView}>
        <TouchableOpacity style={styles.typeButton} onPress={() => setType(0)}>
          <Image
            source={
              type == 0
                ? require('../../assests/radio-on.png')
                : require('../../assests/radio-off.png')
            }
            style={styles.radio}
          />
          <Text style={[styles.radioText, {marginLeft: 10}]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.typeButton} onPress={() => setType(1)}>
          <Image
            source={
              type == 1
                ? require('../../assests/radio-on.png')
                : require('../../assests/radio-off.png')
            }
            style={styles.radio}
          />
          <Text style={[styles.radioText, {marginLeft: 10}]}>Office</Text>
        </TouchableOpacity>
      </View>
      <CustomButton
        bg={'#FE9000'}
        title={'Save Address'}
        color={'#fff'}
        onClick={() => {
          dispatch(
            addAddress({
              state: state,
              city: city,
              pinCode: pinCode,
              type: type == 0 ? 'Home' : 'office',
            }),
          );
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default AddAddress;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.3,
    alignSelf: 'center',
    paddingLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',
  },
  typeView: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  typeButton: {
    width: '40%',
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center',
  },
  radio: {
    width: 24,
    height: 24,
  },
  radioText: {
    color: '#000',
  },
});
