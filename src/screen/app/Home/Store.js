import { useState } from "react";
import React from "react";
import { Text, View, TextInput, Dimensions, SafeAreaView, TouchableOpacity, Image, StyleSheet, FlatList } from "react-native";
import LinearGradient from "react-native-linear-gradient";



const BiikoadStore = ({navigation}) => {
    const Width = Dimensions.get("window").width; 
    const Height = Dimensions.get("window").height; 

    return(
        <SafeAreaView
            style={{flex:1}}
        >   
            <LinearGradient
                colors={['#FE4c4c', '#F9F9F3']} //#FE4c4c', '#F9F9F3 && #FE
                style={{flex:1}}
                start={{ x: 0, y: 0 }}
                end={{ x: 0.2, y: 0.75 }}
            >
                <View
                style={{
                    height: '50%', 
                    alignContent:'center', 
                    alignItems:'center', 
                }}
                >
                    <TouchableOpacity onPress={()=>{
                        navigation.goBack('index')
                    }}>
                       <Image 
                style={{
                    width:45,
                    height:45,
                    resizeMode:'contain', 
                    // marginTop: 0.08 * Height,
                    alignSelf:'flex-end' 
                }}
                source={require('../../../assets/Images/Icons/back1.png')}
                /> 
                </TouchableOpacity>
                <Image 
                style={{
                    height:'45%', 
                    width: '50%', 
                    resizeMode:'contain', 
                    marginTop: 0.08 * Height, 
                }}
                source={require('../../../assets/Images/Icons/Biikoad1.png')}
                />
                <Text
                style={{
                    color: '#f9f9f3', 
                    fontSize: 0.05 * Width, 
                    marginTop: 0.015 * Height, 
                }}
                > 
                    Welcome to
                </Text>
                <Text
                style={{
                    color: '#f9f9f3',
                    fontSize: 0.07* Width, 
                    letterSpacing: 0.02 * Width,
                    fontWeight:'bold', 
                }}
                > 
                BIIKOAD STORE
                </Text>
                </View>
                <Image
                    style={{ width: '100%', height: '50%', resizeMode: "cover", opacity: 0.1 * Width, }}
                    source={require('../../../assets/Images/Icons/openingsoon.png')}
                />
                </LinearGradient>
            </SafeAreaView>
    )
}



export default BiikoadStore;