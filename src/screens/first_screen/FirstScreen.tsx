import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '/store/index';
import {addAnimal, submitToFirebase} from '/store/actions/action';
import firebase from 'firebase';

class FirstScreen extends Component<Props, {}> {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={style.container}>
        <View style={style.halfTwo} />
        <View style={style.halfOne}>
          <TouchableOpacity
            style={style.button}
            onPress={() => {
              this.props.addAnimal('Hund');
              navigate('DogScreen');
            }}>
            <Text style={style.buttonText}>Hund</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.button}
            onPress={() => {
              this.props.addAnimal('Katt');
              navigate('SecondScreen');
            }}>
            <Text style={style.buttonText}>Katt</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.button}
            onPress={() => {
              this.props.addAnimal('Häst');
              navigate('SecondScreen');
            }}>
            <Text style={style.buttonText}>Häst</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.button}
            onPress={() => {
              this.props.submitToFirebase(this.props.store);
            }}>
            <Text style={style.buttonText}>Firebase</Text>
          </TouchableOpacity>
        </View>
        <View style={style.halfTwo} />
      </View>
    );
  }
}
function mapStateToProps(state: RootState) {
  return {
    animalType: state.animalReducer.type,
    store: state,
  };
}
const mapDispatchToProps = {
  addAnimal,
  submitToFirebase,
};

const connector = connect(
  mapStateToProps,
  mapDispatchToProps,
);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {
  navigation: any;
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  halfOne: {
    flex: 4,
  },
  halfTwo: {
    flex: 2,
  },
  button: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 382,
    height: 80,
    marginBottom: 5,
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

export default connector(FirstScreen);
