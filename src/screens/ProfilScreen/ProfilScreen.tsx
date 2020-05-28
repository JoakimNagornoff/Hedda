import React, {Component} from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import firebase from '@react-native-firebase/app';

interface State {
  insurances: any[];
}
function Item({
  type,
  title,
  race,
  gender,
  castrated,
  birthday,
  cost,
  sub,
  interval,
  subDate,
  fixedDeducitble,
  variableDeducitble,
}) {
  return (
    <View style={style.ProfilItem}>
      <Text> {type}</Text>
      <Text>namn {title}</Text>
      <Text>{race}</Text>
      <Text>{gender}</Text>
      <Text>{castrated}</Text>
      <Text>föddes {birthday}</Text>
      <Text>{sub} paketet</Text>
      <Text>
        {cost} kr {interval}{' '}
      </Text>

      <Text>Subscription startar {subDate}</Text>
      <Text>fast självrisk {fixedDeducitble}</Text>
      <Text>rörlig självrisk {variableDeducitble} % </Text>
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
              cost={item.cost}
              sub={item.Sub}
              interval={item.subInterval}
              subDate={item.subDate}
              fixedDeducitble={item.fixedDeductible}
              variableDeducitble={item.variableDeductible}
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
    height: 250,
    width: 300,
  },
});

export default ProfilScreen;
