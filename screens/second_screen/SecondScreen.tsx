import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

class SecondScreen extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text>SecondScreen</Text>
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default SecondScreen;
