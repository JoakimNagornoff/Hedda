import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {withFormik} from 'formik';

import PersonInput from 'components/personInput';

class PersonScreen extends Component {
  render() {
    return (
      <View style={style.container}>
        <PersonInput />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PersonScreen;
