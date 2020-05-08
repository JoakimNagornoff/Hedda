import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import auth from '@react-native-firebase/auth';


class Homescreen extends Component<Props> {
  render() {
    const {navigate} = this.props.navigation;
    const user = auth().currentUser;
    console.log(user);

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Welcome {user?.displayName}</Text>
        <Text style={{fontSize: 30}}>This is Homescreen!</Text>
        <Button
          onPress={() => navigate('FirstScreen')}
          title="Lägg till ett djur"
        />
      </View>
    );
  }
}
type Props = {
  navigation: any;
  route: any;
};
export default Homescreen;
