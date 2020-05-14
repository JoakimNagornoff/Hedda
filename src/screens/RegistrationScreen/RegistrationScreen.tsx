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

class RegistrationScreen extends Component<Props> {
  state = {
    name: '',
    email: '',
    password: '',
    isLoading: false,
    errorMessage: null,
  };
  handleSignUp = () => {
    this.setState({isLoading: true});
    auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(res => {
        res.user.updateProfile({
          displayName: this.state.name,
        });
        this.setState({
          displayName: '',
          email: '',
          password: '',
        });
        setTimeout(() => {
          this.props.navigation.navigate('Home');
          this.setState({isLoading: true});
        }, 2000);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  render() {
    if (this.state.isLoading) {
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
            <Text style={style.inputTitle}>Email Address</Text>
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

        <TouchableOpacity style={{alignSelf: 'center', marginTop: 32}}>
          <Text style={{color: '#414959', fontSize: 15}}>
            Ny till Lassie?{' '}
            <Text style={{fontWeight: '500', color: '#E9446A'}}>Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
type Props = {
  navigation: any;
  route: any;
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
});

export default RegistrationScreen;
