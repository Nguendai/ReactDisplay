import React, { Component } from 'react';
import {Image,View, Dimensions, TouchableOpacity,StyleSheet,ListView} from 'react-native';
import Swiper from 'react-native-swiper';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import Collection from './Collection';
import bannerImage from './../../../../images/temp/banner.jpg';
import Little from './../../../../images/temp/little.jpg';
import Maxi from './../../../../images/temp/maxi.jpg';
import Midi from './../../../../images/temp/midi.jpg';
import Mini from './../../../../images/temp/mini.jpg';
import S1 from './../../../../images/temp/sp1.jpeg';
import S2 from './../../../../images/temp/sp2.jpeg';
import S3 from './../../../../images/temp/sp3.jpeg';
import S4 from './../../../../images/temp/sp4.jpeg';
const { width } = Dimensions.get('window');

export default class Home extends Component {
   
    render(){
        const { wrapper, textStyle, imageStyle,container, titleContainer, title, 
            body, productContainer, productImage,
            produceName, producePrice  } = styles;
        const swiper = (
            <Swiper showsPagination width={imageWidth} height={imageHeight} >
                <Image source={Maxi} style={imageStyle} />
                <Image source={Midi} style={imageStyle} />
                <Image source={Little} style={imageStyle} />
                <Image source={Little} style={imageStyle} />
            </Swiper>
        );
        const { topProducts } = this.props;
        return(
            <Container>
                <Content>
                    <View style={wrapper}>
                        <View style={{ height: 50, justifyContent: 'center' }}>
                            <Text style={textStyle} >SPRING COLLECTION</Text>
                        </View>
                    <TouchableOpacity style={{ flex: 4, justifyContent: 'flex-end' }}>
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
                        <View style={productContainer}>
                            <Image source={S1} style={productImage} />
                            <Text style={produceName}>PRODCT NAME</Text>
                            <Text style={producePrice}>300 $</Text>

                        </View>
                        <View style={productContainer}>
                            <Image source={S2} style={productImage} />
                            <Text style={produceName}>PRODCT NAME</Text>
                            <Text style={producePrice}>300 $</Text>

                        </View>
                        <View style={productContainer}>
                            <Image source={S3} style={productImage} />
                            <Text style={produceName}>PRODCT NAME</Text>
                            <Text style={producePrice}>300 $</Text>

                        </View>
                        <View style={productContainer}>
                            <Image source={S4} style={productImage} />
                            <Text style={produceName}>PRODCT NAME</Text>
                            <Text style={producePrice}>300 $</Text>
                        </View>
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