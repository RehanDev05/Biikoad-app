import React, {useState, useRef, useEffect} from 'react';
import {
  Dimensions,
  View,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  Image,
  BackHandler,
  Text,
  StyleSheet,
  Animated,
  Easing,
  FlatList,
  TextInput,
  ScrollView,
  Button,
  useAnimatedValue,
} from 'react-native';
import Video from 'react-native-video';

// export const Icons = [
//   // {
//   //   title: 'HEllw World',
//   //   icon: require('../../../assets/Images/Icons/Profile.png'),
//   // },
//   {
//     title: 'HEllw World',
//     icon: require('../../../assets/Images/Icons/Heart.png'),
//   },
//   // {
//   //   title: 'HEllw World',
//   //   icon: require('../../../assets/Images/Icons/Profile.png'),
//   // },
//   {
//     title: 'HEllw World',
//     icon: require('../../../assets/Images/Icons/comment.png'),
//   },
// ];

// import CommentScreen from './Tes';
import {useNavigation} from '@react-navigation/native';
import {Listdata} from '../Dummy';
import {Circle, ClipPath, Defs, G, Path, Rect, Svg} from 'react-native-svg';
const Home = ({navigation}) => {
  const {width, height} = Dimensions.get('window');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isSliding, setIsSliding] = useState(false);
  const [isfollowing, setisfollowing] = useState(false);
  const [get, set] = useState();
  const [tline, settline] = useState(true);
  const videoRef = useRef();
  const [isAnimatedViewOpen, setAnimatedViewOpen] = useState(false);
  const [bounceValue] = useState(new Animated.Value(0));
  const animatedBikeOpacity = useRef(new Animated.Value(0)).current;
  const animatedValue = useRef(new Animated.Value(0)).current;
  const animatedWidth = useRef(new Animated.Value(0)).current;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerAnimation] = useState(new Animated.Value(0));
 

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  // const Follow = () => {
  //   setisfollowing(prevIsFollowing => !prevIsFollowing);
  // };
  
 

  const playVideo = index => {
    setCurrentIndex(index);
    setIsPlaying(prevIsPlaying => !prevIsPlaying);
  };

  useEffect(() => {
    Listdata.forEach((_, index) => {
      if (videoRef.current && index !== currentIndex) {
        videoRef.current.seek(0);
      }
    });
  }, [currentIndex]);

  useEffect(() => {
    // Bounce animation configuration
    const bounceConfig = {
      toValue: 1,         // End value of the animation
      friction: 5,        // Adjust as needed for the desired speed (higher value means slower)
      tension: 40,        // Adjust as needed for the desired bounce intensity (higher value means less intense)
      useNativeDriver: true,
    };

    // Create a bounce animation
    const bounceAnimation = Animated.spring(bounceValue, bounceConfig);

    // Start the bounce animation
    const startBounce = () => {
      bounceValue.setValue(0); // Reset the value before starting a new animation
      bounceAnimation.start(startBounce); // Recursive call to create a continuous loop
    };

    startBounce(); // Start the initial bounce

    // Clean up the animation when the component unmounts
    return () => bounceAnimation.stop();
  }, [bounceValue]);
  

  // Function to handle TouchableOpacity press
  const handlePress123 = () => {
    // Toggle the state to open or close the animated view
    setAnimatedViewOpen(!isAnimatedViewOpen);

    // Use Animated.timing to animate the value from 0 to 1 (or vice versa)
    Animated.timing(animatedValue, {
      toValue: isAnimatedViewOpen ? 0 : 1,
      duration: 20, // Adjust the duration as needed
      useNativeDriver: false, // Required for certain properties, set to true if possible
    }).start();
  };

  // Use the animated value to interpolate styles
  const animatedStyle = {
    height: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 45], // Adjust the height values as needed
    }),
    width: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [30, 200], // Adjust the width values as needed
    }),
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: isAnimatedViewOpen === true ? 2 : 0,
    borderColor: '#F15596',
    padding: isAnimatedViewOpen === true ? '2%' : 0,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    position: 'absolute',
    left: -35,
  };
  const handleLike = () => {
    setIsLiked(!isLiked);

    Animated.sequence([
      Animated.timing(animatedBikeOpacity, {
        toValue: 50,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.delay(0),
      Animated.timing(animatedBikeOpacity, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }),
    ]).start(() => {
      set(isLiked === false ? true : null);
    });
  };
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.sequence([
      Animated.timing(translateY, {
        toValue: 30, // Adjust the distance you want the text to scroll
        duration: 2000, // Adjust the duration for one loop
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.delay(0), // Adjust the delay before the next text starts scrolling
    ]);

    Animated.loop(animation).start();

    return () => {
      animation.stop();
    };
  }, [translateY]);
  // const [comments, setComments] = useState([]);
  // const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        toggleModal();

        return true;
      },
    );

    return () => backHandler.remove();
  }, []);

  

  const toggleDrawer = () => {
    const toValue = drawerOpen ? 0 : 1;

    Animated.timing(drawerAnimation, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();

    setDrawerOpen(!drawerOpen);
  };

  const translateX = drawerAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-790, 0],
  });
  return (
    <SafeAreaView style={styles.container}>
      <CustomModal visible={modalVisible} onClose={toggleModal} />
      <View style={{flex: 1, backgroundColor: '#000'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          

         
        </View>
        <Animated.View style={[styles.drawer, {transform: [{translateX}]}]}>
          <View style={styles.drawer1}>
            <TouchableOpacity
              style={{alignSelf: 'flex-end', padding: '2%'}}
              onPress={() => {
                toggleDrawer();
              }}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 18 18"
                fill="none">
                <Circle cx="9" cy="9" r="9" fill="#73479C" />
                <Path
                  d="M5.17994 12.8182L5.18495 12.8227C5.24034 12.8783 5.30617 12.9225 5.37865 12.9526C5.45113 12.9827 5.52884 12.9982 5.60732 12.9982C5.6858 12.9982 5.76351 12.9827 5.83599 12.9526C5.90847 12.9225 5.9743 12.8783 6.02969 12.8227C6.62642 12.2213 7.78081 11.0614 8.99431 9.84337L11.9755 12.8252C12.0874 12.9371 12.2392 13 12.3975 13C12.5557 13 12.7075 12.9371 12.8195 12.8252L12.8245 12.8205C12.8801 12.7651 12.9242 12.6992 12.9544 12.6267C12.9845 12.5542 13 12.4764 13 12.3979C13 12.3193 12.9845 12.2416 12.9544 12.1691C12.9242 12.0965 12.8801 12.0307 12.8245 11.9753C12.2232 11.3767 11.0573 10.2172 9.83605 8.99942C11.0513 7.78061 12.2117 6.62069 12.8165 6.02407C12.8729 5.969 12.9178 5.90331 12.9487 5.83077C12.9796 5.75824 12.9958 5.6803 12.9964 5.60146C12.997 5.52262 12.982 5.44444 12.9522 5.37144C12.9225 5.29844 12.8785 5.23206 12.823 5.17614C12.7674 5.12022 12.7013 5.07586 12.6285 5.04563C12.5557 5.01539 12.4777 4.99989 12.3988 5C12.32 5.00011 12.242 5.01585 12.1693 5.04629C12.0966 5.07673 12.0306 5.12128 11.9752 5.17737L8.99406 8.15924C7.77805 6.94694 6.62267 5.79078 6.02819 5.18714C5.97335 5.12984 5.90764 5.08405 5.83491 5.05244C5.76218 5.02083 5.68388 5.00402 5.60458 5.00301C5.52528 5.002 5.44658 5.01681 5.37307 5.04656C5.29955 5.07631 5.2327 5.12042 5.17642 5.1763C5.12014 5.23218 5.07555 5.29871 5.04526 5.37202C5.01497 5.44533 4.99959 5.52394 5.00001 5.60326C5.00043 5.68258 5.01665 5.76102 5.04771 5.834C5.07878 5.90699 5.12407 5.97305 5.18094 6.02833L8.15257 8.99967L5.17994 11.9738C5.06805 12.0858 5.0052 12.2377 5.0052 12.396C5.0052 12.5543 5.06805 12.7062 5.17994 12.8182Z"
                  fill="white"
                />
              </Svg>
            </TouchableOpacity>
            <ScrollView>
              <View style={{marginBottom: '20%'}}>
                <TouchableOpacity style={{width: width * 0.73}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingLeft: '3%',
                    }}>
                    <Image
                      source={require('../../../assets/Images/Icons/unnamed.gif')}
                      style={{height: height * 0.13, width: width * 0.27}}
                    />
                    <View style={{paddingLeft: '5%'}}>
                      <Text
                        style={{
                          color: '#D68A37',
                          fontFamily: 'DancingScript-Bold',
                          fontSize: 30,
                          textDecorationLine: 'underline',
                        }}>
                        Saqib Hussian Tunio
                      </Text>
                      <Text
                        style={{
                          color: '#202020',
                          fontFamily: 'Poppins-Regular',
                          fontSize: 13,
                          textAlign: 'justify',
                        }}>
                        My Name is Saaim Fasih I am a professional biker i have
                        won so many drag races that i forget to count.
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      borderWidth: 1,
                      width: width,
                      marginVertical: '5%',
                      borderColor: '#20C073',
                      elevation: 10,
                    }}></View>
                </TouchableOpacity>
                <TouchableOpacity style={{width: width * 0.73}}>
                  <View
                    style={{
                      flexDirection: 'row',

                      alignItems: 'center',
                      paddingLeft: '3%',
                    }}>
                    <Image
                      source={require('../../../assets/Images/Biker.jpg')}
                      style={{
                        height: height * 0.13,
                        width: width * 0.27,
                        borderRadius: 50,
                      }}
                    />
                    <View style={{paddingLeft: '5%'}}>
                      <Text
                        style={{
                          color: '#D68A37',
                          fontFamily: 'DancingScript-Bold',
                          fontSize: 30,
                          textDecorationLine: 'underline',
                        }}>
                        Rehan Ali
                      </Text>
                      <Text
                        style={{
                          color: '#202020',
                          fontFamily: 'Poppins-Regular',
                          fontSize: 13,
                          textAlign: 'justify',
                        }}>
                        My Name is Saaim Fasih I am a professional biker i have
                        won so many drag races that i forget to count.
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      borderWidth: 1,
                      width: width,
                      marginVertical: '5%',
                      borderColor: '#20C073',
                      elevation: 10,
                    }}></View>
                </TouchableOpacity>
                <TouchableOpacity style={{width: width * 0.73}}>
                  <View
                    style={{
                      flexDirection: 'row',

                      alignItems: 'center',
                      paddingLeft: '3%',
                    }}>
                    <Image
                      source={require('../../../assets/Images/alsoBiker.jpeg')}
                      style={{
                        height: height * 0.13,
                        width: width * 0.27,
                        borderRadius: 50,
                      }}
                    />
                    <View style={{paddingLeft: '5%'}}>
                      <Text
                        style={{
                          color: '#D68A37',
                          fontFamily: 'DancingScript-Bold',
                          fontSize: 30,
                          textDecorationLine: 'underline',
                        }}>
                        Saim Fasih
                      </Text>
                      <Text
                        style={{
                          color: '#202020',
                          fontFamily: 'Poppins-Regular',
                          fontSize: 13,
                          textAlign: 'justify',
                        }}>
                        My Name is Saaim Fasih I am a professional biker i have
                        won so many drag races that i forget to count.
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      borderWidth: 1,
                      width: width,
                      marginVertical: '5%',
                      borderColor: '#20C073',
                      elevation: 10,
                    }}></View>
                </TouchableOpacity>
                <TouchableOpacity style={{width: width * 0.73}}>
                  <View
                    style={{
                      flexDirection: 'row',

                      alignItems: 'center',
                      paddingLeft: '3%',
                    }}>
                    <Image
                      source={require('../../../assets/Images/Biker.jpg')}
                      style={{
                        height: height * 0.13,
                        width: width * 0.27,
                        borderRadius: 50,
                      }}
                    />
                    <View style={{paddingLeft: '5%'}}>
                      <Text
                        style={{
                          color: '#D68A37',
                          fontFamily: 'DancingScript-Bold',
                          fontSize: 30,
                          textDecorationLine: 'underline',
                        }}>
                        Hasib Anees
                      </Text>
                      <Text
                        style={{
                          color: '#202020',
                          fontFamily: 'Poppins-Regular',
                          fontSize: 13,
                          textAlign: 'justify',
                        }}>
                        My Name is Saaim Fasih I am a professional biker i have
                        won so many drag races that i forget to count.
                      </Text>
                    </View>
                  </View>
                  {/* <View
                    style={{
                      borderWidth: 1,
                      width: width,
                      marginVertical: '5%',
                      borderColor: '#20C073',
                      elevation: 10,
                    }}></View> */}
                </TouchableOpacity>
                 {/* <TouchableOpacity style={{width: width * 0.73}}>
//                   <View
//                     style={{
//                       flexDirection: 'row',

//                       alignItems: 'center',
//                       paddingLeft: '3%',
//                     }}>
//                     <Image
//                       source={require('../../../assets/Images/alsoBiker.jpeg')}
//                       style={{
//                         height: height * 0.13,
//                         width: width * 0.27,
//                         borderRadius: 50,
//                       }}
//                     /> */}
                    {/* <View style={{paddingLeft: '5%'}}>
                      <Text
                        style={{
                          color: '#D68A37',
                          fontFamily: 'DancingScript-Bold',
                          fontSize: 30,
                          textDecorationLine: 'underline',
                        }}>
                        Only Uchiha
                      </Text>
                      <Text
                        style={{
                          color: '#202020',
                          fontFamily: 'Poppins-Regular',
                          fontSize: 13,
                          textAlign: 'justify',
                        }}>
                        My Name is Saaim Fasih I am a professional biker i have
                        won so many drag races that i forget to count.
                      </Text>
                     </View> */}
                  {/* </View> */}
                  {/* <View
                    style={{
                      borderWidth: 1,
                      width: width,
                      marginVertical: '5%',
                      borderColor: '#20C073',
                      elevation: 10,
                    }}></View> */}
                {/* </TouchableOpacity> */}
              </View>
            </ScrollView>
          </View>
        </Animated.View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={Listdata}
          horizontal
          pagingEnabled
          keyExtractor={(item, index) => index.toString()}
          onMomentumScrollEnd={event => {
            const newIndex = Math.round(
              event.nativeEvent.contentOffset.x / width,
            );
            setCurrentIndex(newIndex);
            setIsPlaying(true);
          }}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={{flex: 1}}
              activeOpacity={1}
              onPress={() => {
                playVideo(index);
              }}>
              <View
                style={{
                 
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#000',
                  width: width,
                  height:height
                }}>
       
                <View
                  style={{
                    height: "100%",
                    width: '100%',
                    position: 'absolute',
                    // flexDirection:"row"
                  }}>
         
                  
                  <Video
                    ref={videoRef}
                    source={item.vid}
                    style={{
                      // height: '85%',
                      // width: width,
                      flex: 1,
                    }}
                    resizeMode="contain"
                    repeat
                    paused={currentIndex !== index || !isPlaying}
                    onLoad={data => setVideoDuration(data.duration)}
                    onProgress={data => {
                      setSliderValue(data.currentTime);
                      if (!isSliding) {
                        const progressRatio = data.currentTime / videoDuration;
                        const timelineWidth = width - 40;
                        const updatedWidth = timelineWidth * progressRatio;

                        Animated.timing(animatedWidth, {
                          toValue: updatedWidth,
                          duration: 250,
                          useNativeDriver: false,
                          easing: Easing.linear,
                        }).start();
                      }
                    }}
                  />
                                   <View style={{bottom: 700}}>
                  <TouchableOpacity style={{alignSelf:'flex-start',}} onPress={()=>{
                      navigation.navigate("PlusPost")
                    }}>
       <Animated.Image
         source={require('../../../assets/Images/Icons/Plus.png')} // Replace with your image path
         style={{
           width: 40,
           height: 40,
           transform: [{ scale: bounceValue }],
           left:25
         }}
         resizeMode="contain"
       />
       </TouchableOpacity>
       </View> 
                  <Animated.View
                    style={{
                      position: 'absolute',
                      top: '27%',
                      right: 0,
                      left: '40%',
                      transform: [{rotate: '90deg'}, {translateX: translateY}],
                      padding: 10,
                      maxWidth: '120%',
                      width: '100%',
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        settline(!tline);
                      }}>
                      <Text
                        numberOfLines={tline === true ? 1 : 2}
                        style={{
                          fontSize: 18,
                          color: '#fff',
                          fontFamily: 'Poppins-Regular',
                          textAlign: 'center',
                        }}>
                        {item.title}
                      </Text>
                    </TouchableOpacity>
                  </Animated.View>
                
                </View>
              
                  <TouchableOpacity style={{alignSelf:"flex-end"}}onPress={ toggleDrawer}>
        <Image source={require('../../../assets/Images/Icons/Biikoad1.png')} 
        
                     style={{width:50,height:50,bottom:height * 0.23,right: width * 0.05}}
        
                        resizeMode='contain'/>
                     </TouchableOpacity>
                 <View
                  style={{
                    alignSelf: 'flex-start',
                    margin: 20,
                    top:"70%",
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                    
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Profile');
                    }} style={{
                      
                    // position: 'absolute',
                    top:20
                    }}>
                    <Image
                      source={require('../../../assets/Images/Icons/dp2.jpg')}
                      style={{
                        width: 45,
                        height: 45,
                        borderRadius: 30,
                      }}
                      resizeMode="contain"
                    />
                    </TouchableOpacity>
                    <Text style={{fontSize: 18, color: '#fff', left: 5,fontFamily:'Poppins-Regular', top:20}}>
                    John Doe
                  </Text>
                  <TouchableOpacity onPress={()=>{
                    setisfollowing(!isfollowing)
                  }}>
                       <Image
                      source={
                        isfollowing
                          ? require('../../../assets/Images/Icons/facebook.png')
                          : require('../../../assets/Images/Icons/tick2.png')
                      }
                      style={{
                        width: width * 0.1,
                        height: height * 0.1,
                        left: 5,
                        tintColor: '#fff',
                        top:20
                      }}
                      resizeMode="contain"
                    />
                  </TouchableOpacity> 
                  {/* <TouchableOpacity
                    onPress={Follow}
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'row',
                      // marginVertical:20
                    }}>
                 
                  </TouchableOpacity> */}
                </View>
                <View style={{top:"35%"}}>
                <Text style={{fontSize: 12, color: '#fff',fontFamily:'Poppins-Regular'}}>
                    #Bikerz#Iam Rider#Bike Lover #Trending Biker 
                  </Text>
                  <Text style={{fontSize: 12, color: '#fff',fontFamily:'Poppins-Regular'}}>
                    #Bikerz#Iam Rider#Bike Lover #Trending Biker 
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Profile');
                    }}>
                    <Text style={{fontSize: 15, color: 'rgb(38, 149, 235)',fontFamily:'Poppins-Regular'}}>
                    @John Doe
                    </Text>
                  </TouchableOpacity>
                </View> 
                <View
                  style={{
                    alignSelf: 'flex-end',
                    right:20
                  }}>
                  <TouchableOpacity>
                    <Image
                      source={require('../../../assets/Images/Icons/unnamed.gif')}
                      style={{
                        width: 45,
                        height: 45,
                        borderRadius: 50,
                        margin: 5,
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleLike}>
                    {isLiked === false ? (
                      <Image
                        source={require('../../../assets/Images/Icons/Heart.png')}
                        style={{
                          width: 45,
                          height: 45,
                          tintColor: '#fff',
                          margin: 5,
                        }}
                      />
                    ) : get === true ? (
                      <Image
                        source={require('../../../assets/Images/Icons/Heart1.png')}
                        style={{width: 45, height: 45, margin: 5}}
                      />
                    ) : null}

                    {/* <Likeetc /> */}
                    {isLiked && (
                      <Animated.Image
                        source={require('../../../assets/Images/PNG/bike.png')}
                        style={{
                          width: 60,
                          height: 30,
                          opacity: animatedBikeOpacity,
                          position: 'absolute',
                          right: 22,
                          tintColor: '#fFF',
                          transform: [{translateX: animatedBikeOpacity}],
                        }}
                      />
                    )}
                  </TouchableOpacity>
               
                     {/* <Animated.View
//                       style={[
//                         {
//                           width: 300,
//                           height: 70,
//                           borderRadius: 35,
//                           backgroundColor: '#fff',
//                           alignSelf: 'center',
//                           flexDirection: 'row',
//                           justifyContent: 'space-evenly',
//                           alignItems: 'center',
//                         },
//                         menuStyle,
//                       ]}>
                       <Image
                         source={require('../../../assets/Images/Icons/comment1.png')}
                         style={{
                           width: 45,
                           height: 45,
                           // tintColor: '#Fff',
                         }}
                       />
                      <Image
                        source={require('../../../assets/Images/Icons/seeall.png')}                         style={{
                           width: 45,
                       height: 45,
//                           // tintColor: '#Fff',
                        }}
                      />
                      <Text>see all</Text>
                    // </Animated.View> */}
                    <View >
                <TouchableOpacity>
                    <Text style={{fontSize:35,color:'#fff',fontWeight:'bold',left:10}}>
                      ...
                    </Text>
                  </TouchableOpacity>
                   </View>
                   <TouchableOpacity onPress={handlePress123}>
                     {/* {isAnimatedViewOpen === true ? (
//                       <Svg
//                         version="1.0"
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="30.000000pt"
//                         height="45.000000pt"
//                         viewBox="0 0 512.000000 512.000000"
//                         preserveAspectRatio="xMidYMid meet">
//                         <G
//                           transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
//                           fill="#F15596"
//                           stroke="none">
//                           <Path
//                             d="M75 5093 c10 -16 448 -653 973 -1418 525 -765 955 -1395 955 -1400 0
// -6 -431 -512 -959 -1126 -527 -613 -965 -1123 -973 -1132 -13 -16 1 -17 206
// -17 l220 0 849 987 c467 542 854 988 859 989 6 2 316 -442 689 -986 l679 -990
// 744 0 c705 0 743 1 734 18 -5 9 -460 672 -1010 1472 -550 800 -1001 1457
// -1001 1460 0 4 418 492 929 1085 l928 1080 -215 3 c-177 2 -218 0 -231 -12 -9
// -8 -374 -431 -811 -939 -437 -509 -798 -923 -802 -921 -4 3 -296 425 -649 939
// l-642 935 -745 0 -744 0 17 -27z m2815 -2529 c855 -1224 1557 -2229 1558
// -2235 3 -6 -118 -8 -334 -7 l-338 3 -1558 2228 c-857 1226 -1558 2231 -1558
// 2233 0 2 152 4 338 4 l337 -1 1555 -2225z"
//                           />
//                         </G>
//                       </Svg>
//                     ) : (
//                       <Image
//                         source={require('../../../assets/Images/Icons/comment.png')}
//                         style={{
//                           width: 45,
//                           height: 45,
//                           tintColor: '#F15596',
//                           margin: 5,
//                         }}
//                       />
//                     )} */}
                  </TouchableOpacity>
                  
                </View>
               </View>
             </TouchableOpacity>
          )}
         />
      </View>
      <View style={styles.bottomBar}>
      <TouchableOpacity onPress={()=>{
          navigation.navigate('Dashboard')
        }}>
          <Image source={require("../../../assets/Images/Icons/Home.png")} 
          style={{width:30,height:30,tintColor:'#fff',left:15}}
          />
          <Text style={{fontSize:9,color:'#fff',fontFamily:"Poppins-SemiBold",left:15}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 128 128">
            <G
              transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
              fill="#FFF"
              stroke="none">
              <Path
                d="M545 1263 c-17 -16 -17 -22 1 -155 l6 -46 -58 -17 c-33 -9 -71 -23
-86 -31 -25 -13 -29 -12 -57 16 -39 39 -71 38 -115 -4 -41 -38 -44 -56 -16
-102 l21 -33 -40 -58 c-58 -86 -91 -192 -91 -295 1 -104 12 -155 56 -244 59
-121 172 -219 304 -265 92 -33 248 -33 339 0 157 55 277 173 333 328 30 81 36
230 13 309 -19 67 -57 145 -92 191 l-25 32 21 34 c29 47 27 64 -15 103 -44 42
-76 43 -115 4 -28 -28 -32 -29 -57 -16 -15 8 -53 22 -86 31 l-58 17 6 46 c23
172 23 172 -94 172 -60 0 -83 -4 -95 -17z m155 -58 l0 -35 -60 0 -60 0 0 35 0
35 60 0 60 0 0 -35z m-20 -105 c0 -28 -2 -30 -40 -30 -38 0 -40 2 -40 30 0 28
2 30 40 30 38 0 40 -2 40 -30z m-356 -102 c15 -21 14 -23 -16 -49 l-32 -26
-20 25 -20 25 28 23 c34 30 41 30 60 2z m442 8 c210 -56 364 -255 364 -471 0
-182 -110 -358 -274 -439 -420 -208 -864 244 -651 663 55 110 196 223 311 250
60 14 193 12 250 -3z m250 -10 l28 -23 -20 -25 -20 -25 -32 26 c-30 26 -31 28
-16 49 19 28 26 28 60 -2z"
              />
              <Path
                d="M520 964 c-213 -57 -360 -288 -321 -502 27 -148 115 -263 250 -330
73 -36 77 -37 191 -37 114 0 118 1 191 37 180 89 282 278 251 465 -45 268
-302 437 -562 367z m202 -35 c164 -34 294 -172 316 -335 23 -181 -65 -348
-227 -427 -61 -30 -73 -32 -171 -32 -93 0 -111 3 -163 27 -78 37 -160 117
-198 193 -114 232 15 510 266 571 65 16 112 17 177 3z"
              />
              <Path
                d="M513 849 c-70 -27 -142 -94 -178 -166 -27 -51 -30 -68 -30 -148 0
-78 4 -97 28 -147 36 -74 119 -150 189 -174 68 -23 168 -23 236 0 70 24 153
100 189 174 24 50 28 68 28 147 0 109 -23 163 -100 241 -90 91 -238 121 -362
73z m263 -52 c103 -52 159 -147 158 -267 0 -88 -27 -151 -91 -212 -112 -108
-294 -108 -406 0 -64 61 -91 124 -91 212 -1 140 77 246 214 291 49 16 162 4
216 -24z"
              />
              <Path
                d="M542 715 c-17 -8 -35 -22 -41 -34 -6 -11 -11 -76 -11 -151 l0 -132
29 -29 c47 -46 64 -42 215 56 86 55 96 67 96 114 0 34 -31 64 -135 128 -95 59
-113 64 -153 48z m144 -94 c50 -32 94 -64 98 -70 16 -25 -9 -51 -104 -110 -82
-52 -102 -61 -118 -52 -29 15 -32 31 -32 147 0 167 16 176 156 85z"
              />
            </G>
          </Svg>
          <Text
            style={{
              fontSize: 9,
              fontFamily: 'Poppins-SemiBold',
              color: '#FFF',
            }}>
            Shorts
          </Text>
        </TouchableOpacity>
      
        
        <TouchableOpacity onPress={()=>{
          navigation.navigate('Profile')
        }}>
          <Image source={require("../../../assets/Images/Icons/Prof.png")} style={{width:30,height:30,tintColor:'#fff'}}/>
          <Text style={{fontSize:9,color:'#fff',fontFamily:"Poppins-SemiBold"}}>Profile</Text>
        </TouchableOpacity>
      
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Longv');
          }}
          style={styles.tab}>
          <Svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="32.000000pt"
            height="32.000000pt"
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet">
            <G
              transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              fill="#FFF"
              stroke="none">
              <Path
                d="M145 4775 l-25 -24 0 -2191 0 -2191 25 -24 24 -25 2391 0 2391 0 24
25 25 24 0 2191 0 2191 -25 24 -24 25 -2391 0 -2391 0 -24 -25z m4695 -655 l0
-520 -2280 0 -2280 0 0 520 0 520 2280 0 2280 0 0 -520z m-3960 -1560 l0 -880
-300 0 -300 0 0 880 0 880 300 0 300 0 0 -880z m3200 0 l0 -880 -1520 0 -1520
0 0 880 0 880 1520 0 1520 0 0 -880z m760 0 l0 -880 -300 0 -300 0 0 880 0
880 300 0 300 0 0 -880z m0 -1560 l0 -520 -2280 0 -2280 0 0 520 0 520 2280 0
2280 0 0 -520z"
              />
              <Path
                d="M465 4455 l-25 -24 0 -311 0 -311 25 -24 24 -25 311 0 311 0 24 25
25 24 0 311 0 311 -25 24 -24 25 -311 0 -311 0 -24 -25z m535 -335 l0 -200
-200 0 -200 0 0 200 0 200 200 0 200 0 0 -200z"
              />
              <Path
                d="M1345 4455 l-25 -24 0 -311 0 -311 25 -24 24 -25 311 0 311 0 24 25
25 24 0 311 0 311 -25 24 -24 25 -311 0 -311 0 -24 -25z m535 -335 l0 -200
-200 0 -200 0 0 200 0 200 200 0 200 0 0 -200z"
              />
              <Path
                d="M2225 4455 l-25 -24 0 -311 0 -311 25 -24 24 -25 311 0 311 0 24 25
25 24 0 311 0 311 -25 24 -24 25 -311 0 -311 0 -24 -25z m535 -335 l0 -200
-200 0 -200 0 0 200 0 200 200 0 200 0 0 -200z"
              />
              <Path
                d="M3105 4455 l-25 -24 0 -311 0 -311 25 -24 24 -25 311 0 311 0 24 25
25 24 0 311 0 311 -25 24 -24 25 -311 0 -311 0 -24 -25z m535 -335 l0 -200
-200 0 -200 0 0 200 0 200 200 0 200 0 0 -200z"
              />
              <Path
                d="M3985 4455 l-25 -24 0 -311 0 -311 25 -24 24 -25 311 0 311 0 24 25
25 24 0 311 0 311 -25 24 -24 25 -311 0 -311 0 -24 -25z m535 -335 l0 -200
-200 0 -200 0 0 200 0 200 200 0 200 0 0 -200z"
              />
              <Path
                d="M2192 3183 c-35 -31 -512 -839 -512 -868 0 -14 11 -37 25 -50 24 -25
24 -25 240 -25 l215 0 0 -135 c0 -131 1 -137 25 -160 15 -16 36 -25 55 -25 19
0 40 9 55 25 24 23 25 29 25 160 l0 135 55 0 c67 0 105 29 105 80 0 51 -38 80
-105 80 l-55 0 0 375 0 376 -25 24 c-29 30 -74 33 -103 8z m-32 -573 l0 -210
-130 0 -129 0 126 210 c69 116 127 210 129 210 2 0 4 -94 4 -210z"
              />
              <Path
                d="M2665 3175 l-25 -24 0 -591 0 -591 25 -24 c15 -16 36 -25 55 -25 19
0 40 9 55 25 24 24 25 27 25 187 l0 163 44 63 44 62 171 -244 c181 -259 193
-270 251 -246 28 11 50 47 50 78 0 10 -83 137 -185 282 -102 145 -185 267
-185 270 0 3 83 125 185 270 134 192 185 272 185 293 0 55 -69 95 -118 68 -9
-5 -111 -144 -227 -309 l-210 -301 -5 290 c-5 291 -5 291 -29 310 -32 26 -77
24 -106 -6z"
              />
              <Path
                d="M465 1335 l-25 -24 0 -311 0 -311 25 -24 24 -25 311 0 311 0 24 25
25 24 0 311 0 311 -25 24 -24 25 -311 0 -311 0 -24 -25z m535 -335 l0 -200
-200 0 -200 0 0 200 0 200 200 0 200 0 0 -200z"
              />
              <Path
                d="M1345 1335 l-25 -24 0 -311 0 -311 25 -24 24 -25 311 0 311 0 24 25
25 24 0 311 0 311 -25 24 -24 25 -311 0 -311 0 -24 -25z m535 -335 l0 -200
-200 0 -200 0 0 200 0 200 200 0 200 0 0 -200z"
              />
              <Path
                d="M2225 1335 l-25 -24 0 -311 0 -311 25 -24 24 -25 311 0 311 0 24 25
25 24 0 311 0 311 -25 24 -24 25 -311 0 -311 0 -24 -25z m535 -335 l0 -200
-200 0 -200 0 0 200 0 200 200 0 200 0 0 -200z"
              />
              <Path
                d="M3105 1335 l-25 -24 0 -311 0 -311 25 -24 24 -25 311 0 311 0 24 25
25 24 0 311 0 311 -25 24 -24 25 -311 0 -311 0 -24 -25z m535 -335 l0 -200
-200 0 -200 0 0 200 0 200 200 0 200 0 0 -200z"
              />
              <Path
                d="M3985 1335 l-25 -24 0 -311 0 -311 25 -24 24 -25 311 0 311 0 24 25
25 24 0 311 0 311 -25 24 -24 25 -311 0 -311 0 -24 -25z m535 -335 l0 -200
-200 0 -200 0 0 200 0 200 200 0 200 0 0 -200z"
              />
            </G>
          </Svg>

          <Text
            style={{
              fontSize: 9,
              fontFamily: 'Poppins-SemiBold',
              color: '#FFF',
            }}>
            Videos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          navigation.navigate('Store')
        }}>
          <Image source={require("../../../assets/Images/Icons/stor.png")} style={{width:30,height:30,tintColor:'#fff',right:15}}/>
          <Text style={{fontSize:9,color:'#fff',fontFamily:"Poppins-SemiBold",right:15}}>store</Text>
        </TouchableOpacity>
         {/* <index />  */}
       </View> 
    </SafeAreaView>
  );
};

const CustomModal = ({visible, onClose}) => {
  const {height, width} = Dimensions.get('window');
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View
        style={{
          height: height,
          width: width,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 10,
            height: '50%',
            width: '80%',
            opacity: 0.8,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
            }}>
            <Text
              style={{
                color: '#000',
                fontSize: 25,
                padding: 5,
                fontWeight: 'bold',
              }}>
              Feedback
            </Text>
            <TouchableOpacity onPress={()=>{
              onClose(true)
            }}>
            <Image source={require('../../../assets/Images/Icons/close.png')} style={{width:45,height:45}} resizeMode='contain'/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

 const {height, width} = Dimensions.get('window');
 const styles = StyleSheet.create({
   container: {
     flex: 1,
   },
   likeButton: {
     backgroundColor: 'blue',
     padding: 10,
     borderRadius: 5,
   },
   likeButtonText: {
     color: '#fff',
     fontWeight: 'bold',
   },
   likesCounter: {
     marginTop: 10,
     fontSize: 18,
     color: '#fff',
   },
   container1: {
     width: '90%',
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#FFF',
     height: '60%',
   },

   commentText: {
     fontSize: 16,
   },
   inputContainer: {
     flexDirection: 'row',
     alignItems: 'center',
     borderTopWidth: 1,
     borderTopColor: '#ccc',
     paddingVertical: 10,
   },
   input: {
     flex: 1,
     borderWidth: 1,
     borderColor: '#ccc',
     borderRadius: 5,
     padding: 8,
     marginRight: 10,
   },
   postButton: {
     color: 'blue',
     fontWeight: 'bold',
   },
   drawer: {
     position: 'absolute',
     top: 0,
     bottom: 0,
     left: 0,
     width: width,

     zIndex: 1,
     flexDirection: 'row',

      flexDirection: 'row',
      alignItems: 'center',
   },
   drawer2: {
     top: 0,
     bottom: 0,
     left: 0,
     width: width * 0.3,
     backgroundColor: 'rgba(0, 0, 0, 0.60)',

     zIndex: 1,
   },
   drawer1: {
     top: 0,

    left: 0,
    width: width,
    backgroundColor: '#FFF',

    zIndex: 1,
  },
  drawerContent: {
    marginLeft: -150,
    fontSize: 25,
  },
  drawerContent1: {
    marginLeft: -280,
    fontSize: 25,
  },
  closeIcon: {
    height: height / 16,
    width: width / 7,
    tintColor: '#fff',
    marginLeft: -90,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  pic: {
    height: height / 16,
    width: width / 7,
  },
  pic2: {
    height: height / 16,
     width: width / 7,
     borderRadius: 30,
   },
   pic3: {
     height: height / 18,
     width: width / 8,
     tintColor: '#FE0062',
   },
   pic4: {
     height: height / 17.7,
     width: width / 8,
     tintColor: '#8e8e8e',
   },
   bottomBar: {
     flexDirection: 'row',
     justifyContent: 'space-around',
     alignItems: 'center',
     backgroundColor: '#F15596',
     height: height * 0.07,
     elevation: 5,
     position: 'absolute',
     bottom: 0,
     left: 0,
     right: 0,
     borderTopRightRadius: 30,
     borderTopLeftRadius: 30,
     borderTopWidth: 2,
     borderRightWidth: 2,
     borderLeftWidth: 2,
     borderColor: '#FFF',
     paddingTop: '2%',
   },

   tab: {
     flex: 1,
     alignItems: 'center',
  },
 });

 export default Home;




// {/* <Animated.View style={[animatedStyle, {overflow: 'hidden'}]}>
//                     <TouchableOpacity>
//                       <Svg
//                         version="1.0"
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="35.000000pt"
//                         height="35.000000pt"
//                         viewBox="0 0 512.000000 512.000000"
//                         preserveAspectRatio="xMidYMid meet">
//                         <G
//                           transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
//                           fill="#F15596"
//                           stroke="none">
//                           <Path
//                             d="M2355 4419 c-764 -55 -1387 -434 -1683 -1024 -180 -360 -237 -806
// -156 -1220 49 -249 185 -542 346 -747 l21 -27 -27 -73 c-45 -123 -100 -204
// -218 -322 -60 -60 -118 -127 -129 -148 -71 -139 4 -315 155 -362 51 -16 82
// -18 250 -13 132 4 220 12 287 25 198 41 388 120 549 227 l85 57 114 -27 c610
// -142 1255 -69 1746 196 530 286 859 771 930 1369 55 459 -47 891 -296 1266
// -89 133 -290 338 -424 432 -331 233 -709 360 -1165 392 -162 11 -213 11 -385
// -1z m521 -334 c215 -29 435 -95 620 -188 285 -143 533 -387 671 -660 47 -94
// 108 -281 129 -397 25 -132 25 -428 0 -560 -55 -302 -187 -553 -405 -770 -206
// -206 -461 -348 -756 -424 -416 -106 -832 -97 -1245 29 -115 35 -138 30 -244
// -53 -146 -115 -272 -180 -431 -222 -87 -23 -300 -48 -311 -37 -4 4 13 28 37
// 54 121 129 228 342 264 526 15 80 8 125 -29 170 -190 231 -293 435 -348 690
// -29 136 -32 450 -4 597 21 116 82 303 129 397 148 292 401 533 718 682 224
// 105 436 157 759 185 78 7 330 -4 446 -19z"
//                           />
//                           <Path
//                             d="M2072 3460 c-294 -53 -493 -292 -527 -635 -19 -201 65 -468 215 -677
// 142 -199 413 -422 678 -558 102 -53 139 -53 243 0 257 131 513 338 666 540
// 164 217 251 496 223 721 -22 185 -86 325 -200 440 -121 122 -252 174 -435 173
// -137 -1 -230 -33 -337 -117 l-38 -29 -37 29 c-126 98 -297 140 -451 113z m220
// -347 c54 -29 89 -70 117 -136 20 -47 68 -93 107 -103 39 -10 109 1 137 22 15
// 11 42 49 62 85 79 150 208 201 351 139 64 -27 108 -73 142 -147 81 -179 53
// -397 -79 -599 -95 -145 -272 -306 -470 -429 -49 -30 -93 -55 -99 -55 -15 0
// -131 71 -225 138 -111 80 -283 252 -343 344 -97 150 -143 324 -122 461 12 81
// 58 188 98 230 80 85 220 106 324 50z"
//                           />
//                         </G>
//                       </Svg>
//                     </TouchableOpacity>
//                     <TouchableOpacity>
//                       <Svg
//                         version="1.0"
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="35.000000pt"
//                         height="35.000000pt"
//                         viewBox="0 0 512.000000 512.000000"
//                         preserveAspectRatio="xMidYMid meet">
//                         <G
//                           transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
//                           fill="#F15596"
//                           stroke="none">
//                           <Path
//                             d="M2355 4419 c-764 -55 -1387 -434 -1683 -1024 -180 -360 -237 -806
// -156 -1220 49 -249 185 -542 346 -747 l21 -27 -27 -73 c-45 -123 -100 -204
// -218 -322 -60 -60 -118 -127 -129 -148 -71 -139 4 -315 155 -362 51 -16 82
// -18 250 -13 132 4 220 12 287 25 198 41 388 120 549 227 l85 57 114 -27 c610
// -142 1255 -69 1746 196 530 286 859 771 930 1369 55 459 -47 891 -296 1266
// -89 133 -290 338 -424 432 -331 233 -709 360 -1165 392 -162 11 -213 11 -385
// -1z m521 -334 c215 -29 435 -95 620 -188 285 -143 533 -387 671 -660 47 -94
// 108 -281 129 -397 25 -132 25 -428 0 -560 -55 -302 -187 -553 -405 -770 -206
// -206 -461 -348 -756 -424 -416 -106 -832 -97 -1245 29 -115 35 -138 30 -244
// -53 -146 -115 -272 -180 -431 -222 -87 -23 -300 -48 -311 -37 -4 4 13 28 37
// 54 121 129 228 342 264 526 15 80 8 125 -29 170 -190 231 -293 435 -348 690
// -29 136 -32 450 -4 597 21 116 82 303 129 397 148 292 401 533 718 682 224
// 105 436 157 759 185 78 7 330 -4 446 -19z"
//                           />
//                           <Path
//                             d="M2072 3460 c-294 -53 -493 -292 -527 -635 -19 -201 65 -468 215 -677
// 142 -199 413 -422 678 -558 102 -53 139 -53 243 0 257 131 513 338 666 540
// 164 217 251 496 223 721 -22 185 -86 325 -200 440 -121 122 -252 174 -435 173
// -137 -1 -230 -33 -337 -117 l-38 -29 -37 29 c-126 98 -297 140 -451 113z m220
// -347 c54 -29 89 -70 117 -136 20 -47 68 -93 107 -103 39 -10 109 1 137 22 15
// 11 42 49 62 85 79 150 208 201 351 139 64 -27 108 -73 142 -147 81 -179 53
// -397 -79 -599 -95 -145 -272 -306 -470 -429 -49 -30 -93 -55 -99 -55 -15 0
// -131 71 -225 138 -111 80 -283 252 -343 344 -97 150 -143 324 -122 461 12 81
// 58 188 98 230 80 85 220 106 324 50z"
//                           />
//                         </G>
//                       </Svg>
//                     </TouchableOpacity>
//                   </Animated.View> */}



