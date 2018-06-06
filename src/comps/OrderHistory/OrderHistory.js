import React, { Component } from 'react';
import {
    View, TouchableOpacity, Text, Image, StyleSheet, TextInput,Button
} from 'react-native';


export default class OrderHistory extends Component {
  static navigationOptions = {
      title :"OrderHistory"
  }

  render(){
    return(
      <View style={styles.container}>
          <Text>OrderHistory</Text>
          <Button title="ChangeInfo" onPress={() => this.props.navigation.navigate('ChangeInfo')} />
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
        backgroundColor: 'green'
    }
});
