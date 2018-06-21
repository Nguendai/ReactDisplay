import React, { Component } from 'react';
import {
    View, TouchableOpacity, Image, StyleSheet, TextInput,Dimensions
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { createBottomTabNavigator } from 'react-navigation';
import Cart from './Cart/Cart';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Search from './Search/Search';
import Ionicons from 'react-native-vector-icons/Ionicons';
import global from '../../../global';
import getCart from '../../../api/getCart';

const { height,width } = Dimensions.get('window');



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
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
)
export default class Shop extends Component {
  constructor (){
    super();
    this.state = {
      cartArray : []
    } 
    global.addProductToCart = this.addProductToCart.bind(this);
    global.incrQuantity =this.incrQuantity.bind(this);
    global.decrQuantity = this.decrQuantity.bind(this);
    global.removeProduct = this.removeProduct.bind(this);
  }
  componentDidMount() {
    getCart()
    .then(cartArray=>this.setState({cartArray}));
  }
  addProductToCart(product){
    const isExit = this.state.cartArray.some(e=>e.product.id === product.id);
    if(isExit) return this.incrQuantity(product.id);
    this.setState(
      {cartArray:this.state.cartArray.concat({product,quantity:1})},
      //saveCart(this.state.cartArray)
  );
  }
  incrQuantity(productId){
    const newCart = this.state.cartArray.map(e =>{
      if(e.product.id !== productId ) return e;
      return {product:e.product,quantity:e.quantity + 1}
    });
    this.setState({cartArray:newCart});
  }
  decrQuantity(productId){
    const newCart = this.state.cartArray.map(e =>{
      if(e.product.id !== productId ) return e;
      else if(e.quantity == 1) {alert('hết'); return  {product:e.product,quantity:1};}
      else return {product:e.product,quantity:e.quantity - 1}
    });
    this.setState({cartArray:newCart});
  }
  removeProduct(productId){
    const newCart = this.state.cartArray.filter(e => e.product.id !== productId);
    this.setState({cartArray:newCart});
  }
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
            {/* <Icon name="home"/> */}
            <Text>Home</Text>
          </Body>
          <Right>
          <Button transparent 
              >
              <Icon name='search' />
            </Button>
          </Right >
        </Header>
        <TabNavigator  screenProps ={{cartArray: this.state.cartArray}}/>
        </Container>)
  }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    },
    textInput: { 
      height: height / 23, 
      width:width- 120,
      backgroundColor: '#FFF', 
      paddingLeft: 10,
      paddingVertical: 0 
  }
});
