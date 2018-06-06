import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';
import { Makiko } from 'react-native-textinput-effects';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    onSignIn() {
        const { email, password } = this.state;
    }

    render() {
        const { inputStyle, bigButton, buttonText } = styles;
        const { email, password } = this.state;
        return (
            <View >
                 <Sae
                    
                    label={'Email Address'}
                    iconClass={FontAwesomeIcon}
                    iconName={'pencil'}
                    iconColor={'white'}
                    // TextInput props
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    />
                    <Sae
                    label={'Enter your password'}
                    iconClass={FontAwesomeIcon}
                    iconName={'pencil'}
                    iconColor={'white'}
                    // TextInput props
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    />
              
                <TouchableOpacity style={bigButton} onPress={this.onSignIn.bind(this)}>
                    <Text style={buttonText}>SIGN IN NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputStyle: {
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 20,
        paddingLeft: 30
    },
    bigButton: {
        marginTop:  30 ,
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: 'Avenir',
        color: '#fff',
        fontWeight: '400'
    }
});
