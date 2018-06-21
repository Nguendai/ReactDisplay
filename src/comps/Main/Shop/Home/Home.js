import React, { Component } from 'react';
import {Image,View, Dimensions, TouchableOpacity,StyleSheet,ListView} from 'react-native';
import Swiper from 'react-native-swiper';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { createStackNavigator } from 'react-navigation';
import Collection from './Collection';
import ProductDeatail from './../ProductDetail/ProductDetail';
import LisProduct from './../ListProduct/ListProduct';
import bannerImage from './../../../../images/temp/banner.jpg';
import initData from '../../../../api/initData';
import getCart from '../../../../api/getCart';
const { width } = Dimensions.get('window');
const uri = 'http://10.6.4.108/app/images/type/';
const uri1 = 'http://10.6.4.108/app/images/product/';
 class Home extends Component {
    constructor(props){
        super(props);
        this.state ={
            types :[],
            products :[],
        }
    }
   componentDidMount = () => {
        initData()
      .then(resJSON => {
          const {type,product} =resJSON;
          this.setState({
              types :type,
              products:product,
              
          });
      });
    };
    render(){
        const { wrapper, textStyle, imageStyle,container, titleContainer, title, 
            body, productContainer, productImage,
            produceName, producePrice,cateTitle  } = styles;
        const swiper = (
            <Swiper showsPagination width={imageWidth} height={imageHeight} >
                {this.state.types.map(e=>(
                    <TouchableOpacity style={{ flex: 4, justifyContent: 'flex-end' }} onPress={() => this.props.navigation.navigate('LisProduct', { category: e })} key={e.id}>
                        <Image source={{uri:`${uri}${e.image}`}} style={imageStyle} />
                        {/* <Text style={cateTitle} >{e.image}</Text> */}
                    </TouchableOpacity>
                ))}
               
            </Swiper>
        );
        const { topProducts } = this.props;
        const { navigate } = this.props.navigation;
        return(
            <Container>
                <Content>
                    <View style={wrapper}>
                        <View style={{ height: 50, justifyContent: 'center' }}>
                            <Text style={textStyle} >SPRING COLLECTION</Text>
                        </View>
                    <TouchableOpacity style={{ flex: 4, justifyContent: 'flex-end' }} onPress={()=>this.props.navigation.navigate('SettingsScreen')}>
                        <Image source={bannerImage} style={imageStyle} />
                    </TouchableOpacity>
                 </View>
                 <View style={wrapper}>
                    <View style={{ justifyContent: 'center', height: 50 }}>
                        <Text style={textStyle} >LIST OF CATEGORY</Text>
                    </View>
                    <View style={{ justifyContent: 'flex-end', flex: 4 }}>
                        {  swiper  }
                    </View>
                 </View>
                 <View style={container}>
                    <View style={titleContainer}>
                        <Text style={title}>TOP PRODUCT</Text>
                    </View>
                    <View style={body}>
                        {this.state.products.map(e =>(
                             <View style={productContainer} key={e.id}>
                            <TouchableOpacity style={{ flex: 4, justifyContent: 'flex-end' }} onPress={() => navigate('ProductDeatail',{ product: e })}  >
                                <Image source={{uri:`${uri1}${e.images[0]}`}} style={productImage} />
                            </TouchableOpacity>
                            <Text style={produceName}>{e.name}</Text>
                            <Text style={producePrice}>{e.price} $</Text> 
                            </View>
                        ))}
                        </View>
                    </View>
                </Content>
        </Container>
        )
    }

}
const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465;
const produtWidth = (width - 60) / 2;
const productImageHeight = (produtWidth / 361) * 452; 

export default createStackNavigator(
    {
      Home:Home,
      ProductDeatail:ProductDeatail,
      LisProduct:LisProduct
    },
    {
      headerMode:'none',
      initialRouteName: 'Home',
      mode: 'modal',
      navigationOptions: {
        gesturesEnabled: false,
       
      },
    }
  );


const styles = StyleSheet.create({
    wrapper: {
        width: width - 20,
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0
    },
    textStyle: {
        fontSize: 20,
        color: '#AFAEAF'
    },
    imageStyle: {
        height: imageHeight, 
        width: imageWidth
    },
    cateTitle: {
        fontSize: 20,
        fontFamily: 'Avenir',
        color: '#9A9A9A'
    },
    container: {
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    titleContainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10
    },
    title: {
        color: '#D3D3CF',
        fontSize: 20
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingBottom: 10
    },
    productContainer: {
        width: produtWidth,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    productImage: {
        width: produtWidth,
        height: productImageHeight
    },
    produceName: {
        marginVertical: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#D3D3CF',
        fontWeight: '500'
    },
    producePrice: {
        marginBottom: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#662F90'
    }
});