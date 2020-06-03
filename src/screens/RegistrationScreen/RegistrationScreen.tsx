import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import auth, {firebase} from '@react-native-firebase/auth';
import ActivityIndicatorExample from '@components/ActivityIndicatorExample';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '/store/index';
import {AuthRegisterPerson} from 'store/actions/action';

class RegistrationScreen extends Component<Props, {}> {
  state = {
    name: '',
    email: '',
    password: '',
    zipcode: '',
    isLoading: false,
    errorMessage: null,
  };
  handleSignUp = () => {
    this.props.AuthRegisterPerson(
      this.state.name,
      this.state.email,
      this.state.password,
      this.state.zipcode,
      () => {
        this.setState({
          name: '',
          email: '',
          password: '',
          zipcode: '',
        });
        this.props.navigation.navigate('Home');
      },
    );
  };

  render() {
    if (this.props.isLoading) {
      return <ActivityIndicatorExample />;
    }
    const {navigate} = this.props.navigation;

    return (
      <View style={style.container}>
        <Text style={style.greeting}>Välkommen till Lassie</Text>

        <View style={style.errorMessage}>
          {this.state.errorMessage && (
            <Text style={style.error}>{this.state.errorMessage}</Text>
          )}
        </View>

        <View style={style.form}>
          <View>
            <Text style={style.inputTitle}>Full Name</Text>
            <TextInput
              style={style.input}
              autoCapitalize="none"
              onChangeText={name => this.setState({name})}
              value={this.state.name}
            />
          </View>
          <View>
            <Text style={style.inputTitle}>Post Kod</Text>
            <TextInput
              style={style.input}
              autoCapitalize="none"
              maxLength={5}
              keyboardType="numeric"
              onChangeText={zipcode => this.setState({zipcode})}
              value={this.state.zipcode}
            />
          </View>
          <View>
            <Text style={style.inputTitle}>Email</Text>
            <TextInput
              style={style.input}
              autoCapitalize="none"
              onChangeText={email => this.setState({email})}
              value={this.state.email}
            />
          </View>
          <View style={{marginTop: 32}}>
            <Text style={style.inputTitle}>Password</Text>
            <TextInput
              style={style.input}
              secureTextEntry
              autoCapitalize="none"
              onChangeText={password => this.setState({password})}
              value={this.state.password}
            />
          </View>
        </View>
        <TouchableOpacity style={style.button} onPress={this.handleSignUp}>
          <Text style={{color: '#FFF', fontWeight: '500'}}>Sign in</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{alignSelf: 'center', marginTop: 32}}
          onPress={() => {
            navigate('LogIn');
          }}>
          <Text style={{color: '#414959', fontSize: 15}}>
            Redan registrerad?{' '}
            <Text style={{fontWeight: '500', color: '#E9446A'}}>Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    isLoading: state.personReducer.fireBasePending,
    error: state.personReducer.fireBaseError,
    isSuccess: state.personReducer.fireBaseSuccess,
  };
}
const mapDispatchToProps = {
  AuthRegisterPerson,
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

  greeting: {
    fontSize: 28,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 32,
  },
  errorMessage: {
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  error: {
    color: '#E9446A',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30,
  },
  inputTitle: {
    color: '#8A8F9E',
    fontSize: 10,
    textTransform: 'uppercase',
  },
  input: {
    borderBottomColor: '#8A8F9E',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: '#161F3D',
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: '#E9446A',
    borderRadius: 4,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorMsg: {
    color: 'red',
    marginStart: 15,
    fontSize: 14,
  },
});

export default connector(RegistrationScreen);
