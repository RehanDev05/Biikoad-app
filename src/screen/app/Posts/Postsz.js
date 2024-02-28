import React from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const Posting =({navigation})=>{
    return(
        <SafeAreaView style={styles.container}>
        <View style={styles.container1}>
        <TouchableOpacity
              style={{margin:10}}
              onPress={() => {
                navigation.goBack('Home');
              }}>
              <Image
                source={require('../../../assets/Images/Icons/back1.png')}
                style={styles.backbtn} resizeMode='contain'
              />
            </TouchableOpacity>
            <Text style={styles.text}>Coming Soon</Text>
        </View>
        </SafeAreaView>
    )
}
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    container1:{
        // justifyContent:"center",
        // alignItems:"center",
        
    },
    backbtn:{
        width:45,
        height:46
         },
    text:{
        fontFamily:"Poppins-Regular",
        fontSize:25,
        textAlign:'center',
        
        color:'#000'
    },
   
})

export default Posting;

