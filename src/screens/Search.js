import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Header from '../components/commonUi/Header';

const Search = ({navigation}) => {
  const products = useSelector(state => state.products);
  const [search, setSearch] = useState('');
  const [data, setData] = useState(products.data);
  const [searchList, setSearchList] = useState(data);

  const filterData = text => {
    let newData = data.filter(item => {
      return item.title.toLowerCase().match(text.toLowerCase());
    });
    setSearchList(newData);
  };
  console.log(products);
  return (
    <View style={styles.container}>
      <Header title={'Search Items'} />
      <View style={styles.searchView}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../assests/search.png')}
            style={styles.icon}
          />
          <TextInput
            value={search}
            onChangeText={text => {
              setSearch(text);
              filterData(text);
            }}
            placeholder="Search items here..."
            placeholderTextColor={'#000'}
            style={styles.input}
          />
        </View>
        {search !== '' && (
          <TouchableOpacity
            style={[
              styles.icon,
              {justifyContent: 'center', alignItems: 'center'},
            ]}
            onPress={()=>{
              setSearch('')
              filterData('')
            }}
            >
            <Image
              source={require('../assests/close.png')}
              style={[styles.icon, {width: 16, height: 16}]}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={{marginTop:20,width:'95%',flex:1}}>
      <FlatList
        data={searchList}
        style={{marginLeft:40}}
        
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
          );
        }}
        ListFooterComponent={<View style={{height: 70}}/>}
      />
      </View>
    </View>
  );
};

export default Search;
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
