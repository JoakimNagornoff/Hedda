import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={style.container}>
      <Text>HomeScreen</Text>
      <Button
        title="Lägg till djur"
        onPress={() => {
          navigation.navigate('FirstScreen');
        }}></Button>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default HomeScreen;
