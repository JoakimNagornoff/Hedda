import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

class PaymentScreen extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.halfOne}></View>
        <View style={style.middle}>
          <Text> CreditCard Number</Text>
          <TextInput
            style={style.Input}
            placeholder="XXXX-XXXX-XXXX"
            keyboardType="numeric"
            maxLength={12}></TextInput>
          <Text style={style.expText}> Month/Year</Text>
          <TextInput
            style={style.InputExp}
            placeholder="XX/XX"
            keyboardType="numeric"
            maxLength={4}></TextInput>
          <Text style={style.expText}>CVS</Text>
          <TextInput
            style={style.InputExp}
            placeholder="XXX"
            keyboardType="numeric"
            maxLength={3}></TextInput>
          <Text>Full Card Name</Text>
          <TextInput style={style.Input}> </TextInput>
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
    flex: 2,
    backgroundColor: 'red',
  },
  halfTwo: {
    flex: 2,
    backgroundColor: 'blue',
  },
  middle: {
    flex: 4,
  },
  Input: {
    borderWidth: 1,
    width: 400,
    borderColor: '#000',
    textAlign: 'center',
    fontSize: 18,
    marginRight: 5,
    marginLeft: 5,
  },
  InputExp: {
    borderWidth: 1,
    width: 80,
    borderColor: '#000',
    textAlign: 'center',
    fontSize: 18,
    marginLeft: 300,
  },
  expText: {
    marginLeft: 300,
  },
});

export default PaymentScreen;
