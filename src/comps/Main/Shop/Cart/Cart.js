import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, 
    Dimensions, StyleSheet, Image,ListView } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import ProductDeatail from './../ProductDetail/ProductDetail';
import global from '../../../../global';
const uri1 = 'http://10.6.4.108/app/images/product/';

function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}
class Cart extends Component {
    incrQuantity(id){
        global.incrQuantity(id);
    }
    decrQuantity(id){
        global.decrQuantity(id);
    }
    removeProduct(id){
        global.removeProduct(id);
    }
    gotoDetail() {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL' });
    }
    
    render() {
        const { main, checkoutButton, checkoutTitle, wrapper,
        producta, mainRight, productController,
            txtName, txtPrice, productImage, numberOfProduct, 
            txtShowDetail, showDetailContainer } = styles;
            const { cartArray } =this.props.screenProps;
            const cartTotal = cartArray.map(e => e.product.price * e.quantity);
            const total = cartTotal.length ? cartTotal.reduce((a,b) => a + b ):0;
        return (
            <View style={wrapper}>
                 <ListView
                    contentContainerStyle={main}
                    enableEmptySections
                    dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(cartArray)}
                    renderRow={cartItem=>
                    <View style={producta}>
                    <Image source={{uri:`${uri1}${cartItem.product.images[0]}`}} style={productImage} />
                    <View style={[mainRight]}>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Text style={txtName}>{toTitleCase(cartItem.product.name)}</Text>
                            <TouchableOpacity onPress={() => this.removeProduct(cartItem.product.id)}>
                                <Text style={{ fontFamily: 'Avenir', color: '#969696' }}>X</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={txtPrice}>{cartItem.product.price} $</Text>
                        </View>
                        <View style={productController}>
                            <View style={numberOfProduct}>
                                <TouchableOpacity onPress={()=>this.incrQuantity(cartItem.product.id)}>
                                    <Text>+</Text>
                                </TouchableOpacity>
                                <Text>{cartItem.quantity}</Text>
                                <TouchableOpacity onPress={()=>this.decrQuantity(cartItem.product.id)}>
                                    <Text>-</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={showDetailContainer}>
                                <Text style={txtShowDetail}>SHOW DETAILS</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>}
                        />
                <TouchableOpacity style={checkoutButton}>
                    <Text style={checkoutTitle}>TOTAL {total}$ CHECKOUT NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default createStackNavigator(
    {
        Cart:Cart,
        ProductDeatail:ProductDeatail
    },
    {
      headerMode:'none',
      initialRouteName: 'Cart',
      mode: 'modal',
      navigationOptions: {
        gesturesEnabled: false,
       
      },
    }
  );
const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#DFDFDF'
    },
    checkoutButton: {
        height: 50,
        margin: 10,
        marginTop: 0,
        backgroundColor: '#2ABB9C',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    main: {
        width, backgroundColor: '#DFDFDF'
    },
    checkoutTitle: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Avenir'
    },
    producta: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    productImage: {
        width: imageWidth,
        height: imageHeight,
        flex: 1,
        resizeMode: 'center'
    },
    mainRight: {
        flex: 3,
        justifyContent: 'space-between'
    },
    productController: {
        flexDirection: 'row'
    },
    numberOfProduct: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    txtName: {
        paddingLeft: 20,
        color: '#A7A7A7',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtPrice: {
        paddingLeft: 20,
        color: '#C21C70',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtShowDetail: {
        color: '#C21C70',
        fontSize: 10,
        fontWeight: '400',
        fontFamily: 'Avenir',
        textAlign: 'right',
    },
    showDetailContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});