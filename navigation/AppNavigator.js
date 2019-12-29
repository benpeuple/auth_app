import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Import des screens
import HomeScreen from "../screens/HomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';


const Router = createStackNavigator (
    {
        Home: { 
            screen: HomeScreen
          },
        Register: { 
            screen: RegisterScreen
          },
          Login: { 
            screen: LoginScreen
          },
          Dashboard: { 
            screen: DashboardScreen
          }
  },
  {
      initialRouteName: 'Home',
      headerMode: 'none'
  }
);

const AppNavigator = createAppContainer(Router);

export default AppNavigator;