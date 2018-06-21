import React, { Component } from 'react';
import { 
    StyleSheet, TouchableOpacity, ScrollView, View, Image, Dimensions,TextInput,ListView
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { createStackNavigator } from 'react-navigation';
import ProductDeatail from './../ProductDetail/ProductDetail';
import onSerach from '../../../../api/searchProduct';
const url = 'http://10.6.4.108:8080/app/images/product/';
const { height,width } = Dimensions.get('window');

class Search extends Component {
    
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            search :'',
            listProducts: ds,
          } 
          this.arr
    }
    onSearch1(){
        onSerach(this.state.search)
        .then(res =>{
            this.arr = res;
            this.setState({ listProducts: this.state.listProducts.cloneWithRows(this.arr) });
            console.log(listProducts);
        })
        .catch(error =>{
        console.log(error);
        
    })
    }    
    gotoDetail(product) {
        this.props.navigation.navigate('ProductDeatail',{ product: product })
    }
    render() {
        const {
            container, header, wrapper,
            productContainer, productImage, productInfo, lastRowInfo,
            txtName, txtPrice, txtMaterial, txtColor,titleStyle,txtShowDetail
        } = styles;
        return (
            <View style={container}>
            <View style={wrapper}>
                <View style={header}>
                <TextInput 
                    style={styles.textInput}
                    placeholder="What do you want to buy?"
                    underlineColorAndroid="transparent"
                    value={this.state.search}
                    onChangeText={text => this.setState({ search: text })}
                    // value={this.state.txtSearch}
                    // onChangeText={text => this.setState({ txtSearch: text })}
                    // onFocus={() => global.gotoSearch()} 
                    // onSubmitEditing={this.onSearch.bind(this)}
                />
                 <TouchableOpacity  onPress={()=>this.onSearch1( )}>
                    <Icon name='search' style={{color:'#ff5722',fontSize:20,marginLeft:10}}/>
                    </TouchableOpacity>
                    <View style={{ width: 30 }} />
                </View>
                
                <ListView 
                        removeClippedSubviews={false}
                        dataSource={this.state.listProducts}
                        renderRow={product => (
                            <View style={productContainer}>
                                <Image style={productImage} source={{ uri: `${url}${product.images[0]}` }} />
                                <View style={productInfo}>
                                    <Text style={txtName}>{product.name}</Text>
                                    <Text style={txtPrice}>{product.price}$</Text>
                                    <Text style={txtMaterial}>Material {product.material}</Text>
                                    <View style={lastRowInfo}>
                                        <Text style={txtColor}>Colo {product.color}</Text>
                                        <View style={{ backgroundColor: product.color.toLowerCase(), height: 16, width: 16, borderRadius: 8 }} />
                                        <TouchableOpacity onPress={() => this.gotoDetail(product)}>
                                            <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )}
                        />
            </View>
            </View>
        );
    }

}
export default createStackNavigator(
    {
        Search:Search,
        ProductDeatail:ProductDeatail
    },
    {
      headerMode:'none',
      initialRouteName: 'Search',
      mode: 'modal',
      navigationOptions: {
        gesturesEnabled: false,
       
      },
    }
  );
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBDBD8'
    },
    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5
    },
    wrapper: {
        backgroundColor: '#fff',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        margin: 10,
        paddingHorizontal: 10
    },
    backStyle: {
        width: 30,
        height: 30
    },
    textInput: { 
        height: height / 23, 
        width:width- 120,
        backgroundColor: '#FFF', 
        paddingLeft: 10,
        paddingVertical: 0 
    },
    productContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
        borderTopColor: '#F0F0F0',
        borderBottomColor: '#FFF',
        borderLeftColor: '#FFF',
        borderRightColor: '#FFF',
        borderWidth: 1
    },
    titleStyle: {
        fontFamily: 'Avenir',
        color: '#B10D65',
        fontSize: 20
    },
    productImage: {
        width: 90,
        height: (90 * 452) / 361
    },
    productInfo: {
        justifyContent: 'space-between',
        marginLeft: 15,
        flex: 1
    },
    lastRowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txtName: {
        fontFamily: 'Avenir',
        color: '#BCBCBC',
        fontSize: 20,
        fontWeight: '400'
    },
    txtPrice: {
        fontFamily: 'Avenir',
        color: '#B10D65',
    },
    txtMaterial: {
        fontFamily: 'Avenir'
    },
    txtColor: {
        fontFamily: 'Avenir'
    },
    txtShowDetail: {
        fontFamily: 'Avenir',
        color: '#B10D65',
        fontSize: 11
    }
});