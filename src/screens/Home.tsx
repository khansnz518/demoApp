import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Main from '../components/screens/mainScreen';
import Animation from '../components/screens/Animation';
import Search from './Search';
import Wishlist from './Wishlist';
import Notification from './Notification';

const HomeScreen = ({navigation}) => {
  const [selectTab, setSelectTab] = useState(0);

  return (
    <View style={styles.container}>
      {selectTab == 0 ? (
        <Main navigation={navigation} />
      ) : selectTab == 1 ? (
        <Search navigation={navigation} />
      ) : selectTab == 2 ? (
        <Wishlist />
      ) : selectTab == 3 ? (
        <Notification />
      ) : (
        <Animation />
      )}
      <View style={styles.bottomView}>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => {
            setSelectTab(0);
          }}>
          <Image
            source={
              selectTab == 0
                ? require('../assests/home-active.png')
                : require('../assests/home-inactive.png')
            }
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => {
            setSelectTab(1);
          }}>
          <Image
            source={
              selectTab == 1
                ? require('../assests/search.png')
                : require('../assests/search.png')
            }
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => {
            setSelectTab(2);
          }}>
          <Image
            source={
              selectTab == 2
                ? require('../assests/like.png')
                : require('../assests/heart.png')
            }
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => {
            setSelectTab(3);
          }}>
          <Image
            source={
              selectTab == 3
                ? require('../assests/bell-active.png')
                : require('../assests/bell-inactive.png')
            }
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => {
            setSelectTab(4);
          }}>
          <Image
            source={
              selectTab == 4
                ? require('../assests/user-active.png')
                : require('../assests/user-inactive.png')
            }
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  bottomTab: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomTabIcon: {
    width: 24,
    height: 24,
  },
});
