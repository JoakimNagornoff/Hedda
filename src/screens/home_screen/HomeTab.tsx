import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {AppTabs} from 'AppTabs';

function Home({}) {
  return <AppTabs />;
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Home;
