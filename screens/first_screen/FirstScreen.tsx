import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

class FirstScreen extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text>FirstScreen</Text>
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default FirstScreen;
