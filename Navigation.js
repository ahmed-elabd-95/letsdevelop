import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {Splash1} from './Screens/Splash1';
import {Splash2} from './Screens/Splash2';
import {Splash3} from './Screens/Splash3';
import {Getstarted} from './Screens/Getstarted';
import {Login} from './Screens/Login';
import {Signup} from './Screens/Signup';
import {Forget} from './Screens/Forget';
import {Access} from './Screens/Access';
import {Home} from './Screens/Home';

const HomeTab = createSwitchNavigator(
  {
   
    Splash1: {
      screen: Splash1,
    },
    Splash2: {
      screen: Splash2,
    },
    Splash3: {
      screen: Splash3,
    },
    Splash4: {
      screen: Splash4,
    },
    Getstarted: {
      screen: Getstarted,
    },
    Login: {
      screen: Login,
    },
    Signup: {
      screen: Signup,
    },
    Forget: {
      screen: Forget
    },
    Access: {
      screen: Access
    },
    Home: {
      screen: Home
    },
  },
  // {
  //   defaultNavigationOptions: {
  //     headerBackTitle: null,
  //   //  headerStyle: {height: 0},
  //   },
  // },
);

export default createAppContainer(HomeTab);
