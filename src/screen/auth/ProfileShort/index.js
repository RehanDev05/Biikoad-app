import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Video from 'react-native-video';
const ProfileVideos = ({route,navigation}) => {
  const {Videos} = route.params;
  return (
    <View style={{flex: 1, }}>
      <TouchableOpacity onPress={()=>{
        navigation.goBack('Profile');
      }}>
      <Image 
           source={require('../../../assets/Images/Icons/back1.png')}
           style={styles.Pic}
           resizeMode='contain
           '
        />
      </TouchableOpacity>
      <Video
        source={Videos}
        style={{width: '100%', height: '100%'}}
      />

    </View>

  );
};
const  styles = StyleSheet.create({
  Pic:{
    width:45,
    height:45,
    margin:10
  }
})
export default ProfileVideos;
