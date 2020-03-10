import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '/store/index';
import {
  addAnimalName,
  addAnimalRace,
  addAnimalAge,
  addAnimalGender,
} from 'store/actions/action';

class SecondScreen extends Component<Props, {}> {
  render() {
    //const {route} = this.props;
    //const {animal} = route.params;
    const {navigate} = this.props.navigation;
    return (
      <View style={style.container}>
        <Text style={style.title}>
          Uppgifter om din {this.props.animalType}
        </Text>
        <View style={style.halfOne}>
          <TextInput
            style={style.input}
            placeholder="Namn"
            autoCapitalize="words"
            value={this.props.animalName}
            onChangeText={this.props.addAnimalName}></TextInput>
          <TextInput
            style={style.input}
            placeholder="Ras"
            autoCapitalize="words"
            value={this.props.animalRace}
            onChangeText={this.props.addAnimalRace}></TextInput>
          <TextInput
            style={style.input}
            placeholder="ålder"
            keyboardType="numeric"
            age={this.props.animalAge}
            onChangeText={this.props.addAnimalAge}></TextInput>
          <TouchableOpacity
            style={style.button}
            onPress={() => {
              navigate('ThirdScreen');
            }}>
            <Text style={style.buttonText}>Fortsätt</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    animalType: state.animalReducer.type,
    animalName: state.animalReducer.name,
    animalRace: state.animalReducer.race,
    animalGender: state.animalReducer.gender,
    animalAge: state.animalReducer.age,
  };
}
const mapDispatchToProps = {
  addAnimalName,
  addAnimalRace,
  addAnimalAge,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
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
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    textAlign: 'center',
    fontSize: 18,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 25,
    marginTop: 30,
  },
  button: {
    marginTop: 80,
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 382,
    height: 40,
    marginBottom: 5,
    borderWidth: 2,
    borderColor: '#000',
    marginLeft: 5,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
  },
});

export default connector(SecondScreen);
