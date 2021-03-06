import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '/store/index';
import {submitToFirebase, addAnimalCastrated} from 'store/actions/action';

import ActivityIndicatorExample from '@components/ActivityIndicatorExample';

class DisplayScreen extends Component<Props, {}> {
  handleSubmitClick() {
    if (this.props.animalGender === 'Valack') {
      this.props.addAnimalCastrated('ja');
      this.props.navigation.navigate('ShowScreen');
    } else {
      this.props.navigation.navigate('ShowScreen');
    }
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={style.container}>
        <View style={style.halfOne}>
          <Text style={style.firstTitle}>{this.props.animalType}</Text>
          <Text style={style.formText}>namn : {this.props.animalName}</Text>
          <Text style={style.formText}>ras : {this.props.animalRace}</Text>
          <Text style={style.formText}>
            Föddes : {this.props.animalBirthday}
          </Text>
          <Text style={style.formText}>kön: {this.props.animalGender}</Text>
          <Text style={style.formText}>
            {this.props.animalType !== 'Häst' && (
              <Text>
                kastrerad: {this.props.animalCastrated ? 'ja' : 'nej'}
              </Text>
            )}
          </Text>
        </View>
        <View style={style.halfTwo}>
          <Text style={style.title}>Uppgifter Ägare</Text>
          <Text style={style.formText}>namn : {this.props.personName}</Text>

          <Text style={style.formText}>Email : {this.props.personEmail}</Text>
          <Text style={style.formText}>
            Postkod : {this.props.personPostKod}
          </Text>
        </View>
        <TouchableOpacity
          style={style.button}
          onPress={() => {
            this.handleSubmitClick();
          }}>
          <Text style={style.buttonText}>Fortsätt</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
function mapStateToProps(state: RootState) {
  return {
    personName: state.personReducer.fullName,
    personEmail: state.personReducer.email,
    personPostKod: state.personReducer.postkod,
    animalType: state.animalReducer.type,
    animalName: state.animalReducer.name,
    animalRace: state.animalReducer.race,
    animalGender: state.animalReducer.gender,
    animalBirthday: state.animalReducer.birthday,
    animalCastrated: state.animalReducer.castrated,
    fireBasePending: state.subscriptionReducer.fireBasePending,
    fireBaseSuccess: state.subscriptionReducer.fireBaseSuccess,
    fireBaseError: state.subscriptionReducer.fireBaseError,
    store: state,
  };
}
const mapDispatchToProps = {
  submitToFirebase,
  addAnimalCastrated,
};
const connector = connect(
  mapStateToProps,
  mapDispatchToProps,
);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {
  navigation: any;
  route: any;
};
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  halfOne: {
    flex: 2,
  },
  halfTwo: {
    flex: 2,
  },
  firstTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 15,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 15,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    marginLeft: 50,
  },
  formText: {
    fontSize: 24,
    textAlign: 'left',
    marginLeft: 40,
  },
  button: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 382,
    height: 80,
    marginBottom: 60,
    borderWidth: 2,
    borderColor: '#000',
    marginLeft: 5,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  },
});

export default connector(DisplayScreen);
