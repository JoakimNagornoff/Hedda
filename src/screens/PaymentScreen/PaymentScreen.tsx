import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  UIManager,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {RootState} from 'store';
import {connect, ConnectedProps} from 'react-redux';
import {
  calculateMonthlyCost,
  calculateWeeklyCost,
  calculateYearlyCost,
} from 'utils';
import {chooseSubscriptonInterval, chooseSubDate} from 'store/actions/action';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import {submitToFirebase, chooseSubscriptionCost} from 'store/actions/action';

import ActivityIndicatorExample from '@components/ActivityIndicatorExample';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const TwentyDays = new Date(
  new Date().getTime() + 24 * 60 * 60 * 1000 * 20,
).toLocaleDateString();
const Thirdydays = new Date(
  new Date().getTime() + 24 * 60 * 60 * 1000 * 30,
).toLocaleDateString();

function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

class PaymentScreen extends Component<Props, {}> {
  state = {
    datepickerOpen: false,
  };

  _onChange = form => console.log(form);
  setDate = (event, date) => {
    this.setState({datepickerOpen: false});
    if (date) {
      this.props.chooseSubDate(formatDate(date));
    }
  };

  handleSubmitClick() {
    this.props.submitToFirebase(this.props.store);
  }

  calculatedCost() {
    if (this.props.choosen) {
      let costweek: number = 0;
      let costMonth: number = 0;
      let costYear: number = 0;
      if (this.props.subscriptonInterval === 'vecka') {
        costweek = calculateWeeklyCost(
          this.props.choosen.baseCost,
          this.props.choosen.fixedDeductible,
          this.props.choosen.variableDeductible,
        );
        return costweek;
      } else if (this.props.subscriptonInterval === 'månad') {
        costMonth = calculateMonthlyCost(
          this.props.choosen.baseCost,
          this.props.choosen.fixedDeductible,
          this.props.choosen.variableDeductible,
        );
        return costMonth;
      } else if (this.props.subscriptonInterval === 'år') {
        costYear = calculateYearlyCost(
          this.props.choosen.baseCost,
          this.props.choosen.fixedDeductible,
          this.props.choosen.variableDeductible,
        );
        return costYear;
      }
    }
  }

  /*calculatedMonthCost() {
    if (this.props.choosen) {
      let costMonth: number = 0;
      if (this.props.subscriptonInterval === 'månad') {
        costMonth = calculateMonthlyCost(
          this.props.choosen.baseCost,
          this.props.choosen.fixedDeductible,
          this.props.choosen.variableDeductible,
        );
        return costMonth;

        //return costMonth;
      }
    }
  }*/
  //bygga function för att sätta pris, skicka in en variabel för vecko, månad, årlig
  render() {
    const {navigate} = this.props.navigation;
    if (this.props.firebasePending) {
      return <ActivityIndicatorExample />;
    }
    if (this.props.firebaseSuccess) {
      return (
        <View>
          <Text>Success</Text>
          <TouchableOpacity onPress={() => navigate('Home')}>
            <Text>Home</Text>
          </TouchableOpacity>
        </View>
      );
    }

    if (this.props.firebaseError) {
      return <Text>{this.props.firebaseError}</Text>;
    }

    return (
      <View style={style.container}>
        <View style={style.halfOne}>
          <Text style={style.secondTitle}>
            Du har valt {this.calculatedCost()}
            {}
          </Text>
          <Text style={style.title}>
            {/* {this.calculateCost(this.props.subscriptonInterval)}*/}
            <Text style={style.secondTitle}>
              {' '}
              kr per {this.props.subscriptonInterval}
            </Text>
          </Text>
          <Text style={style.secondTitle}>
            Hur vill du lägga upp betalningen?
          </Text>
          <View style={style.middle}>
            <TouchableOpacity
              style={style.chooseButton}
              onPress={() => {
                this.props.chooseSubscriptonInterval('vecka');
              }}>
              <Text>{}</Text>
              <Text>per Vecka</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.chooseButton}
              onPress={() => {
                this.props.chooseSubscriptonInterval('månad');
              }}>
              <Text>{}</Text>
              <Text>per Månad</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.chooseButton}
              onPress={() => {
                this.props.chooseSubscriptonInterval('år');
              }}>
              <Text>{}</Text>
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
              this.setState({datepickerOpen: true});
            }}
          />
          {this.state.datepickerOpen && (
            <RNDateTimePicker
              testID="dateTimePicker"
              timeZoneOffsetInMinutes={0}
              value={
                this.props.dateOfSub
                  ? new Date(this.props.dateOfSub)
                  : new Date()
              }
              maximumDate={new Date(TwentyDays)}
              minimumDate={new Date()}
              mode="date"
              onChange={this.setDate}
            />
          )}
        </View>
        {!!this.props.dateOfSub && (
          <Text style={style.secondTitle}>
            Du har valt {this.props.dateOfSub}
          </Text>
        )}

        <TouchableOpacity
          style={style.button}
          onPress={() => {
            this.handleSubmitClick();
          }}>
          <Text style={style.buttonText}>Betala</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    choosen: state.paymentReducer.options.find(
      option => option.name === state.paymentReducer.chooseOption,
    ),
    dateOfSub: state.subscriptionReducer.dateOfSub,
    subCost: state.subscriptionReducer.chooseCost,
    subscriptonInterval: state.subscriptionReducer.chooseSubInterval,
    firebasePending: state.subscriptionReducer.fireBasePending,
    firebaseSuccess: state.subscriptionReducer.fireBaseSuccess,
    firebaseError: state.subscriptionReducer.fireBaseError,
    store: state,
  };
}
const mapDispatchToProps = {
  chooseSubscriptonInterval,
  chooseSubDate,
  submitToFirebase,
  chooseSubscriptionCost,
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
    width: 300,
    height: 40,
    borderWidth: 2,
    borderColor: '#000',
    marginLeft: 40,
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
