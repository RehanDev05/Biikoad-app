import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';
import {Iconsz} from '../../app/Dummy';
import Video from 'react-native-video';
import LinearGradient from 'react-native-linear-gradient';
const UserProfile = ({navigation, route}) => {
  const [numColumns, setNumColumns] = useState(1); 
  const DATA = route.params;
  const [isFollowing, setisFollowing] = useState(false);
  const handleFollowToggle = () => {
    setisFollowing(prevIsFollowing => !prevIsFollowing);
  };
  return (
    <LinearGradient    colors={['#F4D03F', '#16A085']}
    style={styles.container1}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}>
    <SafeAreaView style={styles.container}>
    
    
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.container2}>
        <View
  style={{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // position: 'absolute', // You can remove this line
  }}
>
  <TouchableOpacity
    style={{}}
    onPress={() => {
      navigation.goBack('Home');
    }}
  >
    <Image
      source={require('../../../assets/Images/Icons/back1.png')}
      style={styles.backbtn}
      resizeMode='contain'
    />
  </TouchableOpacity>

  <TouchableOpacity
    style={{
      position: 'absolute', 
      left: width * 0.32,    
                    
    }}
    onPress={()=>{
      navigation.navigate('ProfileEdit')
    }}
  >
    <Image
      source={require('../../../assets/Images/Icons/edit.png')}
      style={{
        width: width * 0.15,
        height: height * 0.05,
        tintColor:'#fff'  ,
        top:10
       
      }}
      resizeMode="contain"
    />
    <Text style={{fontSize:12,fontFamily:"Poppins-Regular",top:8,color:'lightgrey'}}>Edit Profile</Text> 
  </TouchableOpacity>
</View>

          <View>
          <Image
            source={require('../../../assets/Images/Icons/dp1.jpg')}
            style={styles.profileImage}
          />
          <Text style={styles.username}>John Doe</Text>
          <TouchableOpacity onPress={handleFollowToggle} style={styles.btn}>
            {isFollowing ? (
              <Text style={styles.fool}>unFollow</Text>
            ) : (
              <Text style={styles.fool1}>Follow</Text>
            )}
          </TouchableOpacity>
          <Text style={styles.userfol}>500k Followers</Text>
          <Text style={styles.bio}>
            Bike Rider
            <Image
              source={require('../../../assets/Images/Icons/rider6.png')}
              style={{width: 45, height: 45,bottom:height *0.1,}}
            />
            | Bike Rider Vlogger |Sport Bikes Lover
            <Image
              source={require('../../../assets/Images/Icons/rider8.png')}
              style={{width: 45, height: 45,bottom:height *0.1}}
              resizeMode="contain"
            />
          </Text>
          </View>
        </View>
      
        
        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            width: 110,
            height: 40,
            margin: 15,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
            
          }}>
          <Text style={{color: 'blue', fontFamily:"Poppins-Regular",}}>Short videos</Text>
        </TouchableOpacity>
        
        <FlatList
          data={Iconsz}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          key={numColumns} 
          numColumns={numColumns}
      contentContainerStyle={{ paddingRight: 15 , flexDirection:'row-reverse'}}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <View style={{ borderRadius: 10, overflow: 'hidden', }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ProfileShort', {image: item.vid})
                  }>
                   <Video
        source={item.vid}
        style={{ width: 300, height: 300,}}
        controls={false}
        // resizeMode="contain"
      />
                </TouchableOpacity>

              </View>
              
            );
          }}
        /> 
       <TouchableOpacity
          style={{
            backgroundColor: 'aqua',
            width: 110,
            height: 40,
            margin: 15,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
          }}>
          <Text style={{color: 'blue', fontFamily:"Poppins-Regular",}}>Long videos</Text>
        </TouchableOpacity>
        <FlatList
          data={Iconsz}
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={(item, index) => index.toString()}
          // numColumns={1}
          // contentContainerStyle={{ paddingRight: 15 ,right:80, flexDirection:'row-reverse'}}
          renderItem={({item, index}) => {
            return (
              <View style={{ borderRadius: 10, overflow: 'hidden' }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ProfileShort', {image: item.vid})
                  }>
                   <Video
        source={item.vid}
        style={{ width: 300, height: 300, }}
        controls={false}
        // resizeMode="contain"
      />
                </TouchableOpacity>
              </View>
            );
          }}
        /> 
      </ScrollView>
     
    </SafeAreaView>
    </LinearGradient>
  );
};
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  // },
  container1:
   {alignItems: 'center', padding: 16,},
  profileImage: {
    width: width * 0.2,
    height: height * 0.11,
    borderRadius: 100,
    // right:width * 0.005,
    top:height * 0.05,
    left:width * 0.04,
    position:'absolute'
  },
  container2:{
    flex:1,
    alignItems:"center"
  },
  username: {
    fontSize: 20,
    fontFamily:"Poppins-Regular",
    textAlign:'center',
    top:height * 0.05,
  },
  bio: {
    margin: 15,
    fontSize: 16,
    color: 'darkgray',
    textAlign: 'center',
    fontFamily:"Poppins-Regular",
    top:height * 0.03,
    // bottom:height *0.15
  },
  fool: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    fontFamily:"Poppins-Regular",
    top:height * 0.05,
    // bottom:height * 0.09,
    // left:width * 0.1,
    
  },
  fool1: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    fontFamily:"Poppins-Regular",
    top:height * 0.05,
    // bottom:height * 0.09,
    // left:width * 0.1
  },
  userfol: {
    fontFamily:"Poppins-Regular",
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
    top:height * 0.05,
    // bottom:height * 0.15,
    // left:45
  },
  // btn: {
  //   borderWidth: 1,
  //   borderColor: 'purple',
  //   padding: 4,
  //   borderRadius: 5,
  //   backgroundColor: 'red',
  //   fontFamily:"Poppins-Regular",
  //   bottom:height * 0.1
  // },
  backbtn: {
    width: 40,
    height: 40,
    right:width * 0.38
    
  },
  picz: {
    width: width * 0.1,
    height: height * 0.1,
    marginRight: 50,
    borderWidth: 1,
    borderColor: '#000',
    padding: 5,
  },
});

export default UserProfile;
