import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator  } from 'react-navigation'; // Version can be specified in package.json
import ChangeInfo from './ChangeInfo/ChangeInfo';
import SignIn from './Authentication/SignIn';
import OrderHistory from './OrderHistory/OrderHistory';
import Main from './Main/Main';





const RootStack = createStackNavigator(
  {
    SignIn: SignIn,
    ChangeInfo: ChangeInfo,
    OrderHistory: OrderHistory,
    ChangeInfo: ChangeInfo,
  },
  {
    initialRouteName: 'ChangeInfo',
  }
);
// const RootStack = createStackNavigator({
//   SignIn: {
//     screen: SignIn
//   },
// });

export default class App2 extends Component {
  render(){
    return(
      <View>
        <Text>123</Text>
        <RootStack />
      </View>

    )
  }

}
