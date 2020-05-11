import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from '@react-native-firebase/app'


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
