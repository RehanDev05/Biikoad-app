import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const Editz = ({navigation}) => {
  const [getValue, setValue] = useState();
  const [getValue1, setValue1] = useState();
  const [getValue2, setValue2] = useState();
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#FE4c4c', '#F9F9F3']}
        style={styles.container1}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack('Profile');
            }}>
            <Image
              source={require('../../../assets/Images/Icons/back1.png')}
              style={styles.Pic}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'Poppins-Regular',
              fontSize: 30,
              color: '#000',
            }}>
             Edit Profile 
          </Text>
          <View
            style={{
              width: width * 0.18,
              height: height * 0.09,
              backgroundColor: 'lightgray',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              borderRadius: 100,
            }}>
                <TouchableOpacity>
            <Image
              source={require('../../../assets/Images/Icons/plus1.png')}
              style={{width: 30, height: 30}}
              resizeMode="contain"
            />
            </TouchableOpacity>
          </View>
          <TextInput
            onChangeText={text => setValue(text)}
            placeholderTextColor={'grey'}
            placeholder="Name"
            style={styles.textinp}
          />
          <TextInput
            onChangeText={text => setValue1(text)}
            placeholderTextColor={'grey'}
            placeholder="Bio"
            style={styles.textinp}
          />
          <TextInput
            onChangeText={text => setValue2(text)}
            placeholderTextColor={'grey'}
            placeholder="Trendings"
            style={styles.textinp}
          />
        </View>
        <TouchableOpacity style={styles.btn} onPress={()=>{
            alert('Plzz Add a Data')
        }}>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 22,
              textAlign: 'center',
              color: '#fff',
              padding: 8,
            }}>
            Submit
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
};
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container1: {
    flex: 1,
    // alignItems:"center"
  },
  Pic: {
    width: 45,
    height: 45,
    alignSelf: 'flex-start',
    marginHorizontal:width * 0.05,
    marginVertical:height * 0.02
  },
  textinp: {
    width: width * 0.9,
    height: height * 0.09,
    // backgroundColor:'#fff',
    margin: 10,
    fontFamily: 'Poppins-Regular',
    borderBottomWidth: 1,
  },
  btn: {
    width: width * 0.4,
    height: height * 0.07,
    backgroundColor: '#000',
    marginVertical: height * 0.1,
    // marginHorizontal:width *
    alignSelf: 'center',
    borderRadius: 12,
  },
});
export default Editz;
