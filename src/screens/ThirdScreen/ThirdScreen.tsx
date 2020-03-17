import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '/store/index';
import {
  addPersonName,
  addPersonLastName,
  addPersonEmail,
  addPersonPostKod,
} from 'store/actions/action';

class ThirdScreen extends Component<Props, {}> {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={style.container}>
        <Text style={style.title}>Uppgifter om ägaren</Text>
        <View style={style.halfOne}>
          <TextInput
            style={style.input}
            placeholder="Förnamn"
            autoCapitalize="words"
            value={this.props.personName}
            onChangeText={this.props.addPersonName}></TextInput>
          <TextInput
            style={style.input}
            placeholder="Efternamn"
            autoCapitalize="words"
            value={this.props.personLastName}
            onChangeText={this.props.addPersonLastName}></TextInput>
          <TextInput
            style={style.input}
            placeholder="Email"
            keyboardType="email-address"
            value={this.props.personEmail}
            onChangeText={this.props.addPersonEmail}></TextInput>
          <TextInput
            style={style.input}
            placeholder="Postkod"
            keyboardType="numeric"
            postkod={this.props.personPostKod}
            onChangeText={this.props.addPersonPostKod}></TextInput>

          <TouchableOpacity
            style={style.button}
            onPress={() => {
              navigate('ForthScreen');
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
    personName: state.personReducer.name,
    personLastName: state.personReducer.lastName,
    personEmail: state.personReducer.email,
    personPostKod: state.personReducer.postkod,
  };
}
const mapDispatchToProps = {
  addPersonName,
  addPersonLastName,
  addPersonEmail,
  addPersonPostKod,
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
    marginBottom: 10,
    marginTop: 15,
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
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
  },
});

export default connector(ThirdScreen);
