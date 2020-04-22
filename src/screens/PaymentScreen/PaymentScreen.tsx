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
import {chooseSubscriptonInterval, chooseSubDate} from 'store/actions/action';

UIManager.setLayoutAnimationEnabledExperimental;
UIManager.setLayoutAnimationEnabledExperimental(true);

const today = new Date().toLocaleDateString();
const tomorrow = new Date(
  new Date().getTime() + 24 * 60 * 60 * 1000,
).toLocaleDateString();
const yesterday = new Date(
  new Date().getTime() - 24 * 60 * 60 * 1000,
).toLocaleDateString();

class PaymentScreen extends Component<Props, {}> {
  state = {
    datepickerOpen: false,
  };
  _onChange = form => console.log(form);

  render() {
    const {navigate} = this.props.navigation;
    console.log(this.props.choosen);
    if (this.props.choosen) {
      let cost: number = 0;
      let interval: string = '';

      if (this.props.subscriptonInterval === 'vecko') {
        cost = calculateWeeklyCost(
          this.props.choosen.baseCost,
          this.props.choosen.fixedDeductible,
          this.props.choosen.variableDeductible,
        );
        interval = 'vecka';
      } else if (this.props.subscriptonInterval === 'månad') {
        cost = calculateMonthlyCost(
          this.props.choosen.baseCost,
          this.props.choosen.fixedDeductible,
          this.props.choosen.variableDeductible,
        );
        interval = 'månad';
      } else if (this.props.subscriptonInterval === 'år') {
        cost = calculateYearlyCost(
          this.props.choosen.baseCost,
          this.props.choosen.fixedDeductible,
          this.props.choosen.variableDeductible,
        );
        interval = 'år';
      }

      return (
        <View style={style.container}>
          <View style={style.halfOne}>
            <Text style={style.secondTitle}>
              Du har valt {this.props.choosen.name.toUpperCase()}
            </Text>
            <Text style={style.title}>
              {cost}
              <Text style={style.secondTitle}> kr per {interval}</Text>
            </Text>
            <Text style={style.secondTitle}>
              Hur vill du lägga upp betalningen?
            </Text>
            <View style={style.middle}>
              <TouchableOpacity
                style={style.chooseButton}
                onPress={() => {
                  this.props.chooseSubscriptonInterval('vecko');
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
                  this.props.chooseSubscriptonInterval('månad');
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
                  this.props.chooseSubscriptonInterval('år');
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

            <Text style={style.secondTitle}>Hur vill du betala?</Text>
          </View>

          <View style={style.halfTwo}>
            <TouchableOpacity style={style.paymentButton}>
              <Text style={style.paymentButtonText}>Bank id</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.paymentButton}
              onPress={() => {
                navigate('CardScreen');
              }}>
              <Text style={style.paymentButtonText}>Kort</Text>
            </TouchableOpacity>
            <Text style={style.secondTitle}>
              När vill du subscriptionen ska börja gälla?
            </Text>
          </View>
          <View style={style.paymentOptions}>
            <TouchableOpacity
              style={style.dateButton}
              onPress={() => {
                this.props.chooseSubDate(yesterday);
              }}>
              <Text style={style.dateButtonText}>{yesterday}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.dateButton}
              onPress={() => {
                this.props.chooseSubDate(today);
              }}>
              <Text style={style.dateButtonText}>{today}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.dateButton}
              onPress={() => {
                this.props.chooseSubDate(tomorrow);
              }}>
              <Text style={style.dateButtonText}>{tomorrow}</Text>
            </TouchableOpacity>
          </View>
          {!!this.props.dateOfSub && (
            <Text style={style.secondTitle}>
              Du har valt {this.props.dateOfSub}
            </Text>
          )}

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
    dateOfSub: state.subscriptionReducer.dateOfSub,
    subscriptonInterval: state.subscriptionReducer.chooseSubInterval,
  };
}
const mapDispatchToProps = {
  chooseSubscriptonInterval,
  chooseSubDate,
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
    flex: 1,
  },
  halfTwo: {
    flex: 1,
  },
  middle: {
    flex: 2,
    flexDirection: 'row',
  },
  paymentOptions: {
    flex: 0.4,
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
    marginTop: 5,
    fontSize: 22,
    textAlign: 'center',
  },
  dateButton: {
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 100,
    height: 60,
    borderWidth: 2,
    borderColor: '#000',
    marginLeft: 20,
  },
  dateButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  chooseButton: {
    marginTop: 10,
    alignItems: 'center',
    width: 80,
    height: 60,
    borderWidth: 2,
    borderColor: '#000',
    marginLeft: 40,
  },
  paymentButton: {
    width: 200,
    height: 40,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: '#000',
    marginLeft: 100,
    marginTop: 10,
    marginBottom: 35,
  },
  paymentButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default connector(PaymentScreen);
