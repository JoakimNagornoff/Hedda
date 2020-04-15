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
import {
  calculateMonthlyCost,
  calculateWeeklyCost,
  calculateYearlyCost,
} from 'utils';
import {CreditCardInput} from 'react-native-credit-card-input';
import {chooseSubscriptonInterval} from 'store/actions/action';

UIManager.setLayoutAnimationEnabledExperimental;
UIManager.setLayoutAnimationEnabledExperimental(true);

class PaymentScreen extends Component<Props, {}> {
  _onChange = form => console.log(form);

  render() {
    console.log(this.props.choosen);
    if (this.props.choosen) {
      return (
        <View style={style.container}>
          <View style={style.halfOne}>
            <Text style={style.secondTitle}>
              Du har valt {this.props.choosen.name.toUpperCase()}
            </Text>
            <Text style={style.title}>
              {calculateMonthlyCost(
                this.props.choosen.baseCost,
                this.props.choosen.fixedDeductible,
                this.props.choosen.variableDeductible,
              )}
              Kr
              <Text style={style.secondTitle}> per månad</Text>
            </Text>
          </View>
          <Text style={style.secondTitle}>
            Hur vill du lägga upp betalningen?
          </Text>
          <View style={style.middle}>
            <TouchableOpacity
              style={style.chooseButton}
              onPress={() => {
                this.props.chooseSubscriptonInterval('Week');
                console.log();
              }}>
              <Text>
                {calculateWeeklyCost(
                  this.props.choosen.baseCost,
                  this.props.choosen.fixedDeductible,
                  this.props.choosen.variableDeductible,
                )}
                Kr
              </Text>
              <Text>per Vecka</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.chooseButton}
              onPress={() => {
                this.props.chooseSubscriptonInterval('Monthly');
              }}>
              <Text>
                {calculateMonthlyCost(
                  this.props.choosen.baseCost,
                  this.props.choosen.fixedDeductible,
                  this.props.choosen.variableDeductible,
                )}
              </Text>
              <Text>per Månad</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.chooseButton}
              onPress={() => {
                this.props.chooseSubscriptonInterval('Year');
              }}>
              <Text>
                {calculateYearlyCost(
                  this.props.choosen.baseCost,
                  this.props.choosen.fixedDeductible,
                  this.props.choosen.variableDeductible,
                )}
              </Text>
              <Text>per År</Text>
            </TouchableOpacity>
          </View>
          <CreditCardInput
            onChange={this._onChange}
            requiresName={true}
            requiresCVC={true}
            validColor="black"
            invalidColor="red"
          />

          <View style={style.halfTwo} />

          <TouchableOpacity style={style.button}>
            <Text style={style.buttonText}>Betala</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return <View>{}</View>;
    }
  }
}

function mapStateToProps(state: RootState) {
  return {
    choosen: state.paymentReducer.options.find(
      option => option.name === state.paymentReducer.chooseOption,
    ),
  };
}
const mapDispatchToProps = {
  chooseSubscriptonInterval,
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
    flex: 2,
  },
  halfTwo: {
    flex: 2,
  },
  middle: {
    flex: 2,
    flexDirection: 'row',
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
  title: {
    fontSize: 30,
    textAlign: 'center',
    height: 60,
  },
  secondTitle: {
    marginTop: 20,
    fontSize: 22,
    textAlign: 'center',
  },
  dateButton: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 80,
    height: 80,
    marginBottom: 5,
    borderWidth: 2,
    borderColor: '#000',
    marginLeft: 5,
  },
  chooseButton: {
    marginTop: 20,
    alignItems: 'center',
    width: 80,
    height: 60,
    borderWidth: 2,
    borderColor: '#000',
    marginLeft: 40,
  },
});

export default connector(PaymentScreen);
