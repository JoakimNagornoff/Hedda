import React, {Component, useState, useEffect} from 'react';
import {View, Text, Button,TouchableOpacity, FlatList} from 'react-native';
import auth from '@react-native-firebase/auth';

import firebase from '@react-native-firebase/app'
import database from '@react-native-firebase/database';


const komponent = ()  => {
  
}

class Homescreen extends Component<Props> {  



  render() {
    const {navigate} = this.props.navigation;
    const user = auth().currentUser;
    console.log(user);
    const singOutUser = async () => {
      try {
        await firebase.auth().signOut();    
        navigate('LogIn')
      } catch(e) {
        console.log(e)
      }
    }

    if(!user) {
      return <Text>Please login in</Text>
    }

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      
      
        <Text>Welcome {user?.displayName}</Text>
      
        <Button
          onPress={() => navigate('FirstScreen')}
          title="Lägg till ett djur"
        />
        <View>
        <TouchableOpacity onPress={() => singOutUser()} ><Text>Sign Out!</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}
type Props = {
  navigation: any;
  route: any;
};
export default Homescreen;
