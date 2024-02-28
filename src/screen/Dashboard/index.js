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
} from 'react-native';
import {Circle, ClipPath, Defs, G, Path, Rect, Svg} from 'react-native-svg';
const Dashboard = ({navigation}) => {
  const {height, width} = Dimensions.get('window');
  const [get, set] = useState(false);

  const toggle = () => {
    set(!get);
    set1(false)
    set2(false)
    set3(false)
    set4(false)
  };
  const [get1, set1] = useState(false);

  const toggle1 = () => {
    set1(!get1);
    set(false)
    set2(false)
    set3(false)
    set4(false)
  };
  const [get2, set2] = useState(false);

  const toggle2 = () => {
    set2(!get2);
    set1(false)
    set(false)
    set3(false)
    set4(false)
  };
  const [get3, set3] = useState(false);

  const toggle3 = () => {
    set3(!get3);
    set1(false)
    set2(false)
    set(false)
    set4(false)
  };
  const [get4, set4] = useState(false);

  const toggle4 = () => {
    set4(!get4);
    set1(false)
    set2(false)
    set3(false)
    set(false)
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
          paddingTop: '5%',
        }}>
        <View>
          <Text
            style={{
              color: '#000',
              fontFamily: 'Poppins-ExtraBold',
              fontSize: 16,
            }}>
            Hello, Welcome
          </Text>
          <Text
            style={{
              color: '#000',
              fontFamily: 'Poppins-Regular',
              fontSize: 18,
            }}>
            Albert Stevano
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '30%',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Profile');
            }}>
            <Image
              //   source={require('../../../assets/Images/PNG/profie.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            {/* <Image source={require('../../../assets/Images/PNG/SideDrawer.png')} /> */}
            <Svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <G clip-path="url(#clip0_1_1584)">
                <Rect width="40" height="40" rx="20" fill="white" />
                <Path
                  d="M21.25 27.5H11.25C10.5 27.5 10 27 10 26.25C10 25.5 10.5 25 11.25 25H21.25C22 25 22.5 25.5 22.5 26.25C22.5 27 22 27.5 21.25 27.5Z"
                  fill="#292526"
                />
                <Path
                  d="M28.75 21.25H11.25C10.5 21.25 10 20.75 10 20C10 19.25 10.5 18.75 11.25 18.75H28.75C29.5 18.75 30 19.25 30 20C30 20.75 29.5 21.25 28.75 21.25Z"
                  fill="#292526"
                />
                <Path
                  d="M28.75 15H18.75C18 15 17.5 14.5 17.5 13.75C17.5 13 18 12.5 18.75 12.5H28.75C29.5 12.5 30 13 30 13.75C30 14.5 29.5 15 28.75 15Z"
                  fill="#292526"
                />
              </G>
              <Defs>
                <ClipPath id="clip0_1_1584">
                  <Rect width="40" height="40" rx="20" fill="white" />
                </ClipPath>
              </Defs>
            </Svg>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <ScrollView>
          <View
            style={{
              borderWidth: 2,
              marginTop: '5%',
              marginHorizontal: 10,
              padding: 5,
              borderRadius: 20,
              borderColor: '#8e8e8e',
              backgroundColor: '#FFF',
              elevation: 15,
            }}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={toggle}
                activeOpacity={1}
                style={{alignSelf: 'center'}}>
                <Image
                  source={{
                    uri: 'https://th.bing.com/th/id/OIP.MAg8qUq7RFVLfOA430br0QHaE6?w=272&h=180&c=7&r=0&o=5&pid=1.7',
                  }}
                  style={{
                    height: height * 0.3,
                    width: get === true ? width * 0.75 : width * 0.9,
                    borderRadius: 10,
                  }}
                />
              </TouchableOpacity>
              {get === true ? (
                <View
                  style={{
                    height: height * 0.3,
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <TouchableOpacity style={{alignItems: 'center'}}>
                    <Image
                      source={{
                        uri: 'https://cdn-icons-png.flaticon.com/128/2107/2107845.png',
                      }}
                      style={{height: 30, width: 30}}
                    />
                    <Text
                      style={{
                        color: '#8e8e8e',
                        fontFamily: 'Poppins-Regular',
                        marginLeft: '3%',
                      }}>
                      14.6K
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{alignItems: 'center'}}>
                    <Image
                      source={{
                        uri: 'https://cdn-icons-png.flaticon.com/128/1380/1380338.png',
                      }}
                      style={{height: 30, width: 30}}
                    />
                    <Text
                      style={{
                        color: '#8e8e8e',
                        fontFamily: 'Poppins-Regular',
                        marginLeft: '3%',
                      }}>
                      12.6K
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{alignItems: 'center'}}>
                    <Image
                      source={{
                        uri: 'https://cdn-icons-png.flaticon.com/128/929/929539.png',
                      }}
                      style={{height: 30, width: 30}}
                    />
                    <Text
                      style={{
                        color: '#8e8e8e',
                        fontFamily: 'Poppins-Regular',
                        marginLeft: '3%',
                      }}>
                      14.6K
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : null}
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                paddingTop: '5%',
              }}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
                }}
                style={{height: 30, width: 30}}
              />
              <Text style={{color: '#000', fontFamily: 'Poppins-SemiBold'}}>
                Saaim Here
              </Text>
              <TouchableOpacity
                style={{borderWidth: 1, borderRadius: 10, padding: 3}}>
                <Text style={{color: '#000'}}>Follow</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{borderWidth: 1, borderRadius: 10, padding: 3}}>
                <Text style={{color: '#000'}}>See Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              borderWidth: 2,
              marginTop: '10%',
              marginHorizontal: 10,
              padding: 5,
              borderRadius: 20,
              borderColor: '#8e8e8e',
              backgroundColor: '#FFF',
              elevation: 15,
            }}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={toggle1}
                activeOpacity={1}
                style={{alignSelf: 'center'}}>
                <Image
                  source={{
                    uri: 'https://th.bing.com/th/id/OIP.dLY4QJfnes7--QcHkM7WvwHaGu?pid=ImgDet&w=184&h=167&c=7',
                  }}
                  style={{
                    height: height * 0.3,
                    width: get1 === true ? width * 0.75 : width * 0.9,
                    borderRadius: 10,
                  }}
                />
              </TouchableOpacity>
              {get1 === true ? (
                <View
                  style={{
                    height: height * 0.3,
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <TouchableOpacity style={{alignItems: 'center'}}>
                    <Image
                      source={{
                        uri: 'https://cdn-icons-png.flaticon.com/128/2107/2107845.png',
                      }}
                      style={{height: 30, width: 30}}
                    />
                    <Text
                      style={{
                        color: '#8e8e8e',
                        fontFamily: 'Poppins-Regular',
                        marginLeft: '3%',
                      }}>
                      14.6K
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{alignItems: 'center'}}>
                    <Image
                      source={{
                        uri: 'https://cdn-icons-png.flaticon.com/128/1380/1380338.png',
                      }}
                      style={{height: 30, width: 30}}
                    />
                    <Text
                      style={{
                        color: '#8e8e8e',
                        fontFamily: 'Poppins-Regular',
                        marginLeft: '3%',
                      }}>
                      12.6K
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{alignItems: 'center'}}>
                    <Image
                      source={{
                        uri: 'https://cdn-icons-png.flaticon.com/128/929/929539.png',
                      }}
                      style={{height: 30, width: 30}}
                    />
                    <Text
                      style={{
                        color: '#8e8e8e',
                        fontFamily: 'Poppins-Regular',
                        marginLeft: '3%',
                      }}>
                      14.6K
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : null}
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                paddingTop: '5%',
              }}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
                }}
                style={{height: 30, width: 30}}
              />
              <Text style={{color: '#000', fontFamily: 'Poppins-SemiBold'}}>
                Saaim Here
              </Text>
              <TouchableOpacity
                style={{borderWidth: 1, borderRadius: 10, padding: 3}}>
                <Text style={{color: '#000'}}>Follow</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{borderWidth: 1, borderRadius: 10, padding: 3}}>
                <Text style={{color: '#000'}}>See Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              borderWidth: 2,
              marginTop: '10%',
              marginHorizontal: 10,
              padding: 5,
              borderRadius: 20,
              borderColor: '#8e8e8e',
              backgroundColor: '#FFF',
              elevation: 15,
            }}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={toggle2}
                activeOpacity={1}
                style={{alignSelf: 'center'}}>
                <Image
                  source={{
                    uri: 'https://th.bing.com/th/id/OIP.71B7fzwhcfOliQ4jcJ4zYwHaHa?pid=ImgDet&w=184&h=184&c=7',
                  }}
                  style={{
                    height: height * 0.3,
                    width: get2 === true ? width * 0.75 : width * 0.9,
                    borderRadius: 10,
                  }}
                />
              </TouchableOpacity>
              {get2 === true ? (
                <View
                  style={{
                    height: height * 0.3,
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <TouchableOpacity style={{alignItems: 'center'}}>
                    <Image
                      source={{
                        uri: 'https://cdn-icons-png.flaticon.com/128/2107/2107845.png',
                      }}
                      style={{height: 30, width: 30}}
                    />
                    <Text
                      style={{
                        color: '#8e8e8e',
                        fontFamily: 'Poppins-Regular',
                        marginLeft: '3%',
                      }}>
                      14.6K
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{alignItems: 'center'}}>
                    <Image
                      source={{
                        uri: 'https://cdn-icons-png.flaticon.com/128/1380/1380338.png',
                      }}
                      style={{height: 30, width: 30}}
                    />
                    <Text
                      style={{
                        color: '#8e8e8e',
                        fontFamily: 'Poppins-Regular',
                        marginLeft: '3%',
                      }}>
                      12.6K
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{alignItems: 'center'}}>
                    <Image
                      source={{
                        uri: 'https://cdn-icons-png.flaticon.com/128/929/929539.png',
                      }}
                      style={{height: 30, width: 30}}
                    />
                    <Text
                      style={{
                        color: '#8e8e8e',
                        fontFamily: 'Poppins-Regular',
                        marginLeft: '3%',
                      }}>
                      14.6K
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : null}
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                paddingTop: '5%',
              }}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
                }}
                style={{height: 30, width: 30}}
              />
              <Text style={{color: '#000', fontFamily: 'Poppins-SemiBold'}}>
                Saaim Here
              </Text>
              <TouchableOpacity
                style={{borderWidth: 1, borderRadius: 10, padding: 3}}>
                <Text style={{color: '#000'}}>Follow</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{borderWidth: 1, borderRadius: 10, padding: 3}}>
                <Text style={{color: '#000'}}>See Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              borderWidth: 2,
              marginTop: '10%',
              marginHorizontal: 10,
              padding: 5,
              borderRadius: 20,
              borderColor: '#8e8e8e',
              backgroundColor: '#FFF',
              elevation: 15,
            }}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={toggle3}
                activeOpacity={1}
                style={{alignSelf: 'center'}}>
                <Image
                  source={{
                    uri: 'https://th.bing.com/th/id/OIP.xosxyXDB39PX-UiI7dr_nAHaE6?pid=ImgDet&w=184&h=122&c=7',
                  }}
                  style={{
                    height: height * 0.3,
                    width: get3 === true ? width * 0.75 : width * 0.9,
                    borderRadius: 10,
                  }}
                />
              </TouchableOpacity>
              {get3 === true ? (
                <View
                  style={{
                    height: height * 0.3,
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <TouchableOpacity style={{alignItems: 'center'}}>
                    <Image
                      source={{
                        uri: 'https://cdn-icons-png.flaticon.com/128/2107/2107845.png',
                      }}
                      style={{height: 30, width: 30}}
                    />
                    <Text
                      style={{
                        color: '#8e8e8e',
                        fontFamily: 'Poppins-Regular',
                        marginLeft: '3%',
                      }}>
                      14.6K
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{alignItems: 'center'}}>
                    <Image
                      source={{
                        uri: 'https://cdn-icons-png.flaticon.com/128/1380/1380338.png',
                      }}
                      style={{height: 30, width: 30}}
                    />
                    <Text
                      style={{
                        color: '#8e8e8e',
                        fontFamily: 'Poppins-Regular',
                        marginLeft: '3%',
                      }}>
                      12.6K
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{alignItems: 'center'}}>
                    <Image
                      source={{
                        uri: 'https://cdn-icons-png.flaticon.com/128/929/929539.png',
                      }}
                      style={{height: 30, width: 30}}
                    />
                    <Text
                      style={{
                        color: '#8e8e8e',
                        fontFamily: 'Poppins-Regular',
                        marginLeft: '3%',
                      }}>
                      14.6K
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : null}
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                paddingTop: '5%',
              }}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
                }}
                style={{height: 30, width: 30}}
              />
              <Text style={{color: '#000', fontFamily: 'Poppins-SemiBold'}}>
                Saaim Here
              </Text>
              <TouchableOpacity
                style={{borderWidth: 1, borderRadius: 10, padding: 3}}>
                <Text style={{color: '#000'}}>Follow</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{borderWidth: 1, borderRadius: 10, padding: 3}}>
                <Text style={{color: '#000'}}>See Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              borderWidth: 2,
              marginBottom: '50%',
              marginTop: '10%',
              marginHorizontal: 10,
              padding: 5,
              borderRadius: 20,
              borderColor: '#8e8e8e',
              backgroundColor: '#FFF',
              elevation: 15,
            }}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={toggle}
                activeOpacity={1}
                style={{alignSelf: 'center'}}>
                <Image
                  source={{
                    uri: 'https://th.bing.com/th/id/OIP.MAg8qUq7RFVLfOA430br0QHaE6?w=272&h=180&c=7&r=0&o=5&pid=1.7',
                  }}
                  style={{
                    height: height * 0.3,
                    width: get === true ? width * 0.75 : width * 0.9,
                    borderRadius: 10,
                  }}
                />
              </TouchableOpacity>
              {get === true ? (
                <View
                  style={{
                    height: height * 0.3,
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <TouchableOpacity style={{alignItems: 'center'}}>
                    <Image
                      source={{
                        uri: 'https://cdn-icons-png.flaticon.com/128/2107/2107845.png',
                      }}
                      style={{height: 30, width: 30}}
                    />
                    <Text
                      style={{
                        color: '#8e8e8e',
                        fontFamily: 'Poppins-Regular',
                        marginLeft: '3%',
                      }}>
                      14.6K
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{alignItems: 'center'}}>
                    <Image
                      source={{
                        uri: 'https://cdn-icons-png.flaticon.com/128/1380/1380338.png',
                      }}
                      style={{height: 30, width: 30}}
                    />
                    <Text
                      style={{
                        color: '#8e8e8e',
                        fontFamily: 'Poppins-Regular',
                        marginLeft: '3%',
                      }}>
                      12.6K
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{alignItems: 'center'}}>
                    <Image
                      source={{
                        uri: 'https://cdn-icons-png.flaticon.com/128/929/929539.png',
                      }}
                      style={{height: 30, width: 30}}
                    />
                    <Text
                      style={{
                        color: '#8e8e8e',
                        fontFamily: 'Poppins-Regular',
                        marginLeft: '3%',
                      }}>
                      14.6K
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : null}
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                paddingTop: '5%',
              }}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
                }}
                style={{height: 30, width: 30}}
              />
              <Text style={{color: '#000', fontFamily: 'Poppins-SemiBold'}}>
                Saaim Here
              </Text>
              <TouchableOpacity
                style={{borderWidth: 1, borderRadius: 10, padding: 3}}>
                <Text style={{color: '#000'}}>Follow</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{borderWidth: 1, borderRadius: 10, padding: 3}}>
                <Text style={{color: '#000'}}>See Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.bottomBar}>
      <TouchableOpacity
          onPress={() => {
            navigation.navigate('Dashboard');
          }}
          style={styles.tab}>
        
<Image source={require('../../assets/Images/Icons/Home.png')} style={{height:30,width:30,tintColor:"#FFF"}} />
          <Text
            style={{
              fontSize: 9,
              fontFamily: 'Poppins-SemiBold',
              color: '#FFF',
            }}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}
        style={styles.tab}>
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
      </View>
    </View>
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

    // flexDirection: 'row',
    // alignItems: 'center',
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

export default Dashboard;