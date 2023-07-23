import {View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity,Image} from 'react-native';
import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import Header from '../components/commonUi/Header';

const Wishlist = () => {
  const items = useSelector(state => state.wishList);
  const [wishListItems,setWishListItems] = useState(items.data)
  console.log(JSON.stringify(items) + ' ' + items.data.length);
  return (
    <View style={styles.container}>
      <Header title={'Wishlist'} />
      <FlatList 
      data={wishListItems } 
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
                <Text>{item.rating.rate}</Text>
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
                <Text style={styles.price}> {'\u20B9' + item.price}</Text>
              </View>
            </TouchableOpacity>
        )
      }}/>
    </View>
  );
};

export default Wishlist;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchView: {
    width: '90%',
    height: 70,
    borderRadius: 20,
    borderWidth: 0.5,
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'center',
  },
  input: {
    width: '90%',
    marginLeft: 10,
    color: '#000',
    fontSize: 16,
    height: '100%',
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
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
});
