import React, { useState, useEffect } from 'react';
import { View, Animated, Image, Easing, StyleSheet, Text, TouchableOpacity } from 'react-native';

const AnimatedImage = Animated.createAnimatedComponent(Image);

const BouncingPlusImage = ({navigation}) => {
  const [bounceValue] = useState(new Animated.Value(1));
  const [shakeValue] = useState(new Animated.Value(0));

  useEffect(() => {
    // Continuous bounce animation
    const bounceAnimation = Animated.loop(
      Animated.spring(bounceValue, {
        toValue: 1.2,
        friction: 1,
        useNativeDriver: true,
      })
    );

    // Continuous shake animation
    // const shakeAnimation = Animated.loop(
    //   Animated.sequence([
    //     Animated.timing(shakeValue, { toValue: 10, duration: 100, easing: Easing.linear, useNativeDriver: true }),
    //     Animated.timing(shakeValue, { toValue: -10, duration: 100, easing: Easing.linear, useNativeDriver: true }),
    //     Animated.timing(shakeValue, { toValue: 0, duration: 100, easing: Easing.linear, useNativeDriver: true }),
    //   ])
    // );

    bounceAnimation.start();
    // shakeAnimation.start();

    return () => {
      bounceAnimation.stop();
    //   shakeAnimation.stop();
    };
  }, [bounceValue, shakeValue]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>{
        navigation.goBack('index')
      }}>
      <Image source={require('../assets/Images/Icons/back1.png')} style={{width:45,height:45 ,alignSelf:'flex-end',bottom:200}} resizeMode='contain'/>
      </TouchableOpacity>
      <AnimatedImage
        source={require('../assets/Images/Icons/Plus.png')} // Replace with your image path
        style={{
          width: 40,
          height: 40,
          transform: [
            { scale: bounceValue },
            // {
            //   translateX: shakeValue.interpolate({
            //     inputRange: [0, 1],
            //     outputRange: [0, 1],
            //   }),
            // },
          ],
        }}
        resizeMode="contain"
      />
      <Text style={{fontFamily:'Poppins-Regular',fontSize:45,textAlign:'center',color:'#000'}}>Post Videos Here</Text>
      <Text style={{fontFamily:'Poppins-Regular',fontSize:45,textAlign:'center',color:'#000'}}>Coming Soon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BouncingPlusImage;
