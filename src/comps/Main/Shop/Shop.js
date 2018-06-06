import React, { Component } from 'react';
import {
    View, TouchableOpacity, Image, StyleSheet, TextInput
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { createBottomTabNavigator } from 'react-navigation';
import Cart from './Cart/Cart';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Search from './Search/Search';
import Ionicons from 'react-native-vector-icons/Ionicons';



  


const TabNavigator = createBottomTabNavigator({
    Home: Home,
    Cart: Cart,
    Contact: Contact,
    Search: Search,
   
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Cart') {
          iconName = `ios-cart${focused ? '' : '-outline'}`;
        } else if (routeName === 'Contact') {
          iconName = `ios-contact${focused ? '' : '-outline'}`;
        }else if (routeName === 'Home') {
            iconName = `ios-home${focused ? '' : '-outline'}`;
        }else if (routeName === 'Search') {
            iconName = `ios-search${focused ? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
)
export default class Shop extends Component {
    static navigationOptions ={
        drawerIcon: (
            <Icon name="ios-cart" style={{color:'#00C497'}}/>
        )
    }
  render(){
    return(
        <Container>
        <Header>
          <Left>
            <Button transparent 
                onPress={()=>this.props.navigation.toggleDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title style={{alignItems: 'center',justifyContent: 'center'}} >Home</Title>
          </Body>
          <Right>
          <Button transparent 
                onPress={()=>this.props.navigation.toggleDrawer()}>
              <Icon name='search' />
            </Button>
          </Right >
        </Header>
        <TabNavigator/>
        </Container>)
  }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    }
});
