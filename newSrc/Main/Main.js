import React, { Component } from 'react';
import {
    View, TouchableOpacity, Text, Image, StyleSheet, TextInput,Button
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
export default class Main extends Component {
    // constructor(props) {
    //     super(props);
    //     const { name, address, phone } = props.user;
    //     this.state = {
    //         txtName: name,
    //         txtAddress: address,
    //         txtPhone: phone
    //     };
    // }
    // goBackToMain() {
    //     const { navigator } = this.props;
    //     navigator.pop();
    // }
    render() {
     return (
       <Button
         title="Go to Jane's profile"
         onPress={() =>
           navigate('Signin', { name: 'SignIn' })
         }
       />
     );
   }
}

// const styles = StyleSheet.create({
//     wrapper: { flex: 1, backgroundColor: 'blue' },
//     header: { flex: 1, backgroundColor: '#2ABB9C', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10 },// eslint-disable-line
//     headerTitle: { fontFamily: 'Avenir', color: '#fff', fontSize: 20 },
//     backIconStyle: { width: 30, height: 30 },
//     body: { flex: 10, backgroundColor: '#F6F6F6', justifyContent: 'center' },
//     textInput: {
//         height: 45,
//         marginHorizontal: 20,
//         backgroundColor: '#FFFFFF',
//         fontFamily: 'Avenir',
//         paddingLeft: 20,
//         borderRadius: 20,
//         marginBottom: 20,
//         borderColor: '#2ABB9C',
//         borderWidth: 1
//     },
//     signInTextStyle: {
//         color: '#FFF', fontFamily: 'Avenir', fontWeight: '600', paddingHorizontal: 20
//     },
//     signInContainer: {
//         marginHorizontal: 20,
//         backgroundColor: '#2ABB9C',
//         borderRadius: 20,
//         height: 45,
//         alignItems: 'center',
//         justifyContent: 'center',
//         alignSelf: 'stretch'
//     },
//     signInStyle: {
//         flex: 3,
//         marginTop: 50
//     }
// });
