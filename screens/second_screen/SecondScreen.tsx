import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

class SecondScreen extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text style={style.title}>Uppgifter om din hund</Text>
        <View style={style.halfOne}>
          <TextInput style={style.input} placeholder="Namn"></TextInput>
          <TextInput style={style.input} placeholder="Ras"></TextInput>
          <TextInput style={style.input} placeholder="ålder"></TextInput>
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  halfOne: {
    flex: 2,
  },
  halfTwo: {
    flex: 2,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    textAlign: 'center',
    fontSize: 18,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 25,
    marginTop: 30,
  },
});
export default SecondScreen;
