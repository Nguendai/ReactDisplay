import React, { Component } from 'react';
import { Button, Image, View, Text } from 'react-native';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import App from './comps/Main/App';
import LoginScreen from './comps/Authentication/LoginScreen';
import ChangeInfo from './comps/ChangeInfo/ChangeInfo';
import OrderHistory from './comps/OrderHistory/OrderHistory';
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator(
  {
    ChangeInfo: ChangeInfo,
    Login: LoginScreen,
    App: App,
    OrderHistory: OrderHistory,

  },
  {
    headerMode:'none',
    initialRouteName: 'App',
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false,
     
    },
  }
);

export default class Main extends Component {
  render() {
    return <RootStack />;
  }
}
