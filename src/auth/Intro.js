import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
const Introduction = ({navigation}) => {
  return (
    <LinearGradient    colors={['#FE4c4c', '#F9F9F3']}
    style={{flex:1,alignItems:'center'}}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}>
    <View style={{alignItems:'center'}}>
        <TouchableOpacity onPress={()=>{
            navigation.navigate('SignUpScreen')
        }}>
        <Image source={require('../assets/Images/Icons/back1.png')} style={{width:45,height:45}}resizeMode='contain'/>
        </TouchableOpacity>
        <Text style={{fontFamily:'Poppins-Regular',fontSize:30,color:'grey',marginVertical:45}}>Intro</Text>
      <Text style={{fontFamily:'Poppins-Regular',fontSize:30,color:'grey'}}>Coming Soon</Text>
    </View>
    </LinearGradient>
  )
}

export default Introduction;