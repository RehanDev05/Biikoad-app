// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screen/app/Home';
import Longv from '../screen/app/Longv';
import UserProfile from '../screen/auth/Profile';
import ProfileVideos from '../screen/auth/ProfileShort';
import Posting from '../screen/app/Posts/Postsz';
import Editz from '../screen/auth/Profile/ProfileEdit';
import Dashboard from '../screen/Dashboard';
import SignUpScreen from '../auth/SignUp';
import LoginScreen from '../auth/Login';
import VideoList from '../screen/app/Posts/Postsz';
import BouncingPlusImage from '../components/PlusPost';
import BiikoadStore from '../screen/app/Home/Store';
import Introduction from '../auth/Intro';


const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Intro"
          component={Introduction}
          options={{headerShown: false}}
        />
      <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
       
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
       
           <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
               <Stack.Screen
          name="Longv"
          component={Longv}
          options={{headerShown: false}}
        />
           
           <Stack.Screen
          name="Store"
          component={BiikoadStore}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={UserProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfileShort"
          component={ProfileVideos}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="Postsz"
          component={VideoList}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="ProfileEdit"
          component={Editz}
          options={{headerShown: false}}
        /> 
        <Stack.Screen
          name="PlusPost"
          component={BouncingPlusImage}
          options={{headerShown: false}}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
