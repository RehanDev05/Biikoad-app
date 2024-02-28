import { useState } from "react";
import React from "react";
import { Text, View, TextInput, Dimensions, SafeAreaView, TouchableOpacity, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";


const LoginScreen = ({navigation}) => {
    const Width = Dimensions.get("window").width; 
    const Height = Dimensions.get("window").height; 
    const [userName,setUserName] = useState(""); 
    const [userPassword,setUserPassword] = useState(""); 

    const Reset = () => {
        setUserName("")
        setUserPassword("")
    }
    return (
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
                <Image 
                style={{
                    height:'45%', 
                    width: '50%', 
                    resizeMode:'contain', 
                    marginTop: 0.08 * Height, 
                }}
                source={require('../assets/Images/Icons/Biikoad1.png')}
                />
                <Text
                style={{
                    color: '#f9f9f3', 
                    fontSize: 0.05 * Width, 
                    marginTop: 0.015 * Height, 
                    fontFamily:'Poppins-Regular',
                }}
                > 
                    Welcome to
                </Text>
                <Text
                style={{
                    color: '#f9f9f3',
                    fontSize: 0.07* Width, 
                    letterSpacing: 0.035 * Width,
                    fontWeight:'bold', 
                    fontFamily:'Poppins-Regular',
                }}
                > 
                BIIKOAD
                </Text>
                <Text
                style={{
                    color:'#f9f9f3',
                    fontFamily:'Poppins-Regular',
                }}
                > 
                Where your BIKE meets The ROAD 
                </Text>
                </View>
                <View
                style={{ 
                    borderColor: 'black', 
                    padding: 0.001 * Width,
                    borderWidth: 0.01 * Width,  
                    marginHorizontal: 0.1 * Width,
                    marginVertical: 0.1 * Width, 
                    borderBottomLeftRadius: 0.1 * Width, 
                    borderBottomRightRadius: 0.1* Width, 
                    borderTopLeftRadius: 0.1 * Width, 
                    borderTopRightRadius: 0.1 * Width,
                }}
                >   
                <TextInput
                placeholderTextColor={'lightgrey'}
                placeholder="Username/Email"
                value={userName}
                onChangeText={setUserName}
                style={{
                    color: 'black', 
                    fontSize: 0.033 * Width, 
                    paddingHorizontal: 0.04 * Width, 
                    fontFamily:'Poppins-Regular',
                }}
                />
                </View>
                <View
                style={{ 
                    borderColor: 'black', 
                    padding: 0.001 * Width,
                    borderWidth: 0.01 * Width,  
                    marginHorizontal: 0.1 * Width,
                    marginVertical: - 0.055 * Width, 
                    borderBottomLeftRadius: 0.1 * Width, 
                    borderBottomRightRadius: 0.1* Width, 
                    borderTopLeftRadius: 0.1 * Width, 
                    borderTopRightRadius: 0.1 * Width,
                }}
                >   
                <TextInput
                placeholderTextColor={'lightgrey'}
                placeholder="Type your Password"
                value={userPassword}
                onChangeText={setUserPassword}
                secureTextEntry={true}
                style={{
                    color: 'black', 
                    fontSize: 0.033 * Width, 
                    paddingHorizontal: 0.04 * Width, 
                    fontFamily:'Poppins-Regular',
                }}
                />
                </View>
                <View
                style={{
                    flexDirection:'row', 
                    marginTop:0.05* Width, 
                    justifyContent:'space-evenly', 
                    alignContent:'center',
                    alignItems:'center',
                }}
                > 
                    <TouchableOpacity onPress={()=>{
                        navigation.goBack('SignUpScreen')
                    }}> 
                        <Image 
                            style={{
                                height: 0.15 * Height,
                                width: 0.25 * Width,
                                resizeMode:'contain', 
                            }}
                            source={require('../assets/Images/Icons/sign.png')}
                        />
                    </TouchableOpacity>
                        <Image
                            style={{
                                height: '8%',
                                width: '8%', 
                                resizeMode:'contain', 
                            }}
                            source={require('../assets/Images/Icons/Left2.png')}
                        />
                    <TouchableOpacity
                    style={{ 
                        backgroundColor: '#FE4c4c',
                        borderBottomLeftRadius: 0.1 * Width, 
                        borderBottomRightRadius: 0.1* Width, 
                        borderTopLeftRadius: 0.1 * Width, 
                        borderTopRightRadius: 0.1 * Width,
                        height: 0.065 *Height,
                        width: 0.25* Width, 
                    }}
                    onPress={()=>{
                        navigation.navigate('Dashboard')
                    }}
                    >   
                    <Text
                    style={{
                        color: '#f9f9f3', 
                        fontSize: 0.05 * Width, 
                        alignSelf:'center',
                        alignContent:'center', 
                        alignItems:'center',
                        padding: 0.019 * Width, 
                        fontFamily:'Poppins-Regular',
                    }}
                    >
                        Login
                    </Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </SafeAreaView>
    )
}


export default LoginScreen; 