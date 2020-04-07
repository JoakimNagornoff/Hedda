import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  UIManager,
  TouchableOpacity,
} from 'react-native';
import {RootState} from 'store';
import {connect, ConnectedProps} from 'react-redux';
import {calculateMonthlyCost} from 'utils';
import {} from 'store/actions/action';
import {CreditCardInput} from 'react-native-input-credit-card';

UIManager.setLayoutAnimationEnabledExperimental;
UIManager.setLayoutAnimationEnabledExperimental(true);

class PaymentScreen extends Component<Props, {}> {
  _onChange = form => console.log(form);
  render() {
    return (
      <View style={style.container}>
        <View style={style.halfOne}>
          <Text>{}</Text>
        </View>
        <View style={style.middle} />
        <CreditCardInput
          onChange={this._onChange}
          requiresName={true}
          requiresCVC={true}
          validColor="black"
          invalidColor="red"
          autoFocus
        />

        <View style={style.halfTwo} />
        <TouchableOpacity style={style.button}>
          <Text style={style.buttonText}>Betala</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
function mapStateToProps(state: RootState) {
  return {
    paymentOptions: state.paymentReducer.options,
  };
}
const mapDispatchToProps = {};

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
    flex: 2,
  },
  halfTwo: {
    flex: 2,
  },
  middle: {
    flex: 4,
  },
  Input: {
    borderWidth: 1,
    width: 400,
    borderColor: '#000',
    textAlign: 'center',
    fontSize: 18,
    marginRight: 5,
    marginLeft: 5,
  },
  InputExp: {
    borderWidth: 1,
    width: 80,
    borderColor: '#000',
    textAlign: 'center',
    fontSize: 18,
    marginLeft: 300,
  },
  expText: {
    marginLeft: 300,
  },
  button: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#008000',
    width: 382,
    height: 40,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#000',
    marginLeft: 5,
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default connector(PaymentScreen);
