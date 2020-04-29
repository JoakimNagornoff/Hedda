import React from 'react';
import {View, Text, Button} from 'react-native';

function Homescreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>This is Homescreen!</Text>
      <Button
        onPress={() => navigation.navigate('FirstScreen')}
        title="Lägg till ett djur"
      />
    </View>
  );
}
export default Homescreen;
