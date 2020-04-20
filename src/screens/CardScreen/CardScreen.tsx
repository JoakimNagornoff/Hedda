import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';

import {CreditCardInput} from 'react-native-credit-card-input';
import {RootState} from 'store';

class CardScreen extends Component<Props, {}> {
  _onChange = form => console.log(form);
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={style.container}>
        <View style={style.header} />
        <View style={style.middle}>
          <CreditCardInput
            onChange={this._onChange}
            requiresName={true}
            requiresCVC={true}
            validColor="black"
            invalidColor="red"
          />
        </View>
        <TouchableOpacity
          style={style.button}
          onPress={() => {
            navigate('PaymentScreen');
          }}>
          <Text style={style.buttonText}>Betala</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
function mapStateToProps(state: RootState) {
  return {};
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
  header: {
    flex: 1,
  },
  middle: {
    flex: 4,
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

export default connector(CardScreen);
