import React, { Component } from 'react';
import {
    View, TouchableOpacity, Image, StyleSheet, TextInput
} from 'react-native';
import { DrawerNavigator, DrawerItems, SafeAreaView} from 'react-navigation';
import Shop from './Shop/Shop';
import LoginScreen from '../Authentication/LoginScreen';
import ChangeInfo from '../ChangeInfo/ChangeInfo';
import OrderHistory from '../OrderHistory/OrderHistory';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
const CustomDrawerContentComponent = (props) => (
  <Container>
    <Header style={{height:150}} >
      <Body>
        <Image source={require('../../images/b.jpg')} style={{height:150,width:150}}/>
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props}/>
    </Content>
  </Container>
)
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLogedIn: false };
}
  render(){ 
    const mainJSX = this.state.isLogedIn ? <MyApp/> : <MySingin/>;
    return(
      <Container>
          {mainJSX}
      </Container>
    )
  
  }

}

const MyApp = DrawerNavigator({
  Home: Shop,
  ChangeInfo:ChangeInfo,
  OrderHistory:OrderHistory

},{
  initialRouteName:'Home',
  contentComponent:CustomDrawerContentComponent,
  drawerOpenRounte:'DrawerOpen',
  drawerCloseRounte:'DrawerClose',
  drawerToggleRounte:'DrawerToggle'

}
);
const MySingin = DrawerNavigator({
  Home: Shop,
  LoginScreen:LoginScreen,

},{
  initialRouteName:'LoginScreen',
  contentComponent:CustomDrawerContentComponent,
  drawerOpenRounte:'DrawerOpen',
  drawerCloseRounte:'DrawerClose',
  drawerToggleRounte:'DrawerToggle'
}
);

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#34B089',
      borderRightWidth: 3,
      borderColor: '#fff',
      alignItems: 'center'
  },
  profile: {
      width: 120,
      height: 120,
      borderRadius: 60,
      marginVertical: 30
  },
  btnStyle: {
      height: 50,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      paddingHorizontal: 70
  },
  btnText: {
      color: '#34B089',
      fontFamily: 'Avenir', 
      fontSize: 20
  },
  btnSignInStyle: {
      height: 50,
      backgroundColor: '#fff',
      borderRadius: 5,
      width: 200,
      marginBottom: 10,
      justifyContent: 'center',
      paddingLeft: 10
  },
  btnTextSignIn: {
      color: '#34B089',
      fontSize: 15
  },
  loginContainer: {
      flex: 1, 
      justifyContent: 'space-between', 
      alignItems: 'center'
  },
  username: {
      color: '#fff', 
      fontFamily: 'Avenir', 
      fontSize: 20
  }
});