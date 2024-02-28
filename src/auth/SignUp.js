import { useState } from "react";
import React from "react";
import { Text, View, TextInput, Dimensions, SafeAreaView, TouchableOpacity, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";


const SignUpScreen = ({navigation}) => {
    const Width = Dimensions.get("window").width; 
    const Height = Dimensions.get("window").height; 
    const [userName,setUserName] = useState(""); 
    const [userPassword,setUserPassword] = useState(""); 
    const [name,setName] = useState(''); 

    const Reset = () => {
        setUserName("")
        setUserPassword("")
        setName("")
    }
    return (
        <SafeAreaView 
            style= {{flex:1}}
        > 
            <LinearGradient
                colors={['rgba(2,245,255,1)', 
                    'rgba(255,94,247,1)']} 
                style={{flex:1}}
                start={{ x: 0, y: 0 }}
                end={{ x: 0.25, y: 0.75 }}
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
                    color: '#F9F9F3', 
                    fontSize: 0.05 * Width, 
                    marginTop: 0.015 * Height, 
                    fontFamily:'Poppins-Regular'
                }}
                > 
                    Welcome to
                </Text>
                <Text
                style={{
                    color: '#F9F9F3',
                    fontSize: 0.07* Width, 
                    letterSpacing: 0.035 * Width, 
                    fontWeight:'bold',
                    fontFamily:'Poppins-Regular'
                }}
                > 
                BIIKOAD
                </Text>
                <Text
                style={{
                    color: '#F9F9F3' ,
                    fontFamily:'Poppins-Regular'
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
                    marginTop: 0.1 * Width, 
                    marginBottom: - 0.05 * Width,
                    borderBottomLeftRadius: 0.1 * Width, 
                    borderBottomRightRadius: 0.1* Width, 
                    borderTopLeftRadius: 0.1 * Width, 
                    borderTopRightRadius: 0.1 * Width,
                }}
                >   
                <TextInput
                placeholderTextColor={"lightgrey"}
                placeholder=" Your Good Name Rider"
                value={name}
                onChangeText={setName}
                style={{
                    color: '#000', 
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
                    marginVertical: 0.1 * Width, 
                    borderBottomLeftRadius: 0.1 * Width, 
                    borderBottomRightRadius: 0.1* Width, 
                    borderTopLeftRadius: 0.1 * Width, 
                    borderTopRightRadius: 0.1 * Width,
                }}
                >   
                <TextInput
                placeholderTextColor={"lightgrey"}
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
                placeholderTextColor={"lightgrey"}
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
                
                    <TouchableOpacity
                    style={{ 
                        backgroundColor: '#FE4c4c',
                        borderBottomLeftRadius: 0.1 * Width, 
                        borderBottomRightRadius: 0.1* Width, 
                        borderTopLeftRadius: 0.1 * Width, 
                        borderTopRightRadius: 0.1 * Width,
                        height: 0.065 *Height,
                        width: 0.4* Width, 
                        alignContent:'center',
                        alignSelf:'center', 
                        marginTop:0.1 * Width, 

                    }}
                    onPress={()=>{
                        navigation.navigate('LoginScreen')
                    }}
                    >   
                    <Text
                    style={{
                        color: '#F9F9F3', 
                        fontSize: 0.05 * Width, 
                        alignSelf:'center',
                        alignContent:'center', 
                        alignItems:'center',
                        padding: 0.019 * Width, 
                        fontFamily:'Poppins-Regular',
                    }}
                    >
                        SignUp
                    </Text>
                    </TouchableOpacity>
                </LinearGradient>
        </SafeAreaView>
    )
}


export default SignUpScreen; 