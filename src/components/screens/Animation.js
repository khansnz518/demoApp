import React, {useRef, useEffect} from 'react';
import {View, Animated, StyleSheet, Image, ImageBackground} from 'react-native';

const Animation = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animateGraph();
  }, []);

  const animateGraph = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  };

  const dashedLineStyle = {
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius:1,

  };

  const interpolatedDashWidth = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 400], // Adjust the range to control the dash width
  });

  const interpolatedLineWidth = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200], // Adjust the range to control the line width
  });

  const interpolatedLineTop = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [290, 290], // Adjust the range to control the top position of the line
  });
  const interpolatedRotateZ = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['-45deg', '-45deg'], // Adjust the range to control the rotation angle
  });

  const interpolatedDashHeight = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100], // Adjust the range to control the thickness of the dashed line
  });
  return (
    <ImageBackground
      style={styles.container}
      source={require('../../assests/bg.jpg')}>
      <View style={[styles.imageContainer, styles.firstImageContainer]}>
        <Image
          style={styles.image}
          source={require('../../assests/block.jpg')}
        />
      </View>
      {/* <View style={styles.graphContainer}> */}
      {/* <Animated.View
        style={[
          styles.dashedLine,
          dashedLineStyle,
          {
            width: interpolatedLineWidth,
            top: interpolatedLineTop,
            transform: [{rotate: interpolatedRotateZ}],
          },
        ]}
      /> */}
      {/* <Animated.View
          style={[
            styles.dashedLine,
            dashedLineStyle,
            { width: interpolatedDashWidth,top :interpolatedLineTop ,transform: [{rotate: interpolatedRotateZ}]},
          ]}
        /> */}
      {/* </View> */}
      <Animated.View
        style={[
          styles.dashedLine,
          dashedLineStyle,
          {
            top: interpolatedLineTop,
            transform: [
              {
                translateX:
                 animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 300],
                }),
              },
              {
                translateY: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -240],
                }),
              },
            ],
          },
        ]}></Animated.View>
      <View
        style={[
          styles.imageContainer,
          styles.secondImageContainer,
          {height: 400},
        ]}>
        <Image
          style={styles.image}
          source={require('../../assests/block.jpg')}
        />
      </View>
    </ImageBackground>
  );
};

export default Animation;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 20,
    flex: 1,
  },
  imageContainer: {
    width: 150,
    height: 150,
  },
  firstImageContainer: {
    marginTop: 300,
  },
  secondImageContainer: {
    marginTop: 50,
    marginLeft: 300,
  },
  image: {
    // flex: 1,
    width: '100%',
    height: '100%',
    // resizeMode: 'cover',
  },
  dashedLine: {
    height: 1,
    overflow: 'hidden',
  },
  graphContainer: {
    // position: 'absolute',
    // top: 0,
    // bottom: 0,
    // justifyContent: 'center',
    // alignItems: 'flex-start',
  },
});
