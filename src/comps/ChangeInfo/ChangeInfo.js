import React, { Component } from 'react';
import {
    View, TouchableOpacity, Text, Image, StyleSheet, TextInput,Button
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class ChangeInfo extends Component {
  static navigationOptions = ({ navigation }) => {
    drawerIcon: (
      <Ionicons name="ios-contact" style={{color:'#00C497'}}/>
  )
  };
  render(){
    return(
      <View style={styles.container}>
          <Text>ChangeInfo</Text>
          <Button title="OrderHistory" onPress={() => this.props.navigation.navigate('OrderHistory')} />
          <Button title="go back" onPress={() => this.props.navigation.goBack()} />
      </View>
    )
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
