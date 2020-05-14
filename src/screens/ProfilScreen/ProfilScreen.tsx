import React, {Component} from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/database';
import DogScreen from 'screens/DogScreen';

interface State {
  insurances: any[];
}
function Item({type, title, race, gender, castrated, birthday}) {
  return (
    <View style={style.ProfilItem}>
      <Text>{type}</Text>
      <Text>{title}</Text>
      <Text>{race}</Text>
      <Text>{gender}</Text>
      <Text>{castrated}</Text>
      <Text>{birthday}</Text>
    </View>
  );
}
//return {id: doc.id, ...doc.data()}

class ProfilScreen extends Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      insurances: [],
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    console.log(firebase.auth().currentUser);
    firebase
      .firestore()
      .collection('Insurance')
      .where('uid', '==', firebase.auth().currentUser!.uid)
      .get()
      .then(result => {
        const insurances = result.docs.map(doc => {
          return {id: doc.id, ...doc.data()};
        });

        //console.log(insurances);
        this.setState({
          insurances,
        });
      });
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <FlatList
          data={this.state.insurances}
          renderItem={({item}) => (
            <Item
              type={item.animal.type}
              title={item.animal.name}
              race={item.animal.race}
              gender={item.animal.gender}
              castrated={item.animal.castrated}
              birthday={item.animal.birthday}
            />
          )}
          keyExtractor={item => item.id}
        />
        <Text>Profil!</Text>
      </View>
    );
  }
}

//{this.state.insurances.map(insurnace => ())}

const style = StyleSheet.create({
  ProfilItem: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    height: 200,
    width: 300,
  },
});

export default ProfilScreen;
