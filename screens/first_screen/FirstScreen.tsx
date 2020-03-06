import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

class FirstScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={style.container}>
        <View style={style.halfTwo}></View>
        <View style={style.halfOne}>
          <TouchableOpacity
            style={style.button}
            onPress={() => navigate('SecondScreen')}>
            <Text style={style.buttonText}>Hund</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.button}>
            <Text style={style.buttonText}>Katt</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.button}>
            <Text style={style.buttonText}>Häst</Text>
          </TouchableOpacity>
        </View>
        <View style={style.halfTwo}></View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  halfOne: {
    flex: 4,
  },
  halfTwo: {
    flex: 2,
  },
  button: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 382,
    height: 80,
    marginBottom: 5,
    borderWidth: 2,
    borderColor: '#000',
    marginLeft: 5,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  },
});
export default FirstScreen;
