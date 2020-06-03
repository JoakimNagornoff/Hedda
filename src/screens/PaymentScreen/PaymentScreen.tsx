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
import {chooseSubscriptonInterval, chooseSubDate} from 'store/actions/action';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import {
  submitToFirebase,
  chooseSubscriptionCost,
  resetStore,
} from 'store/actions/action';


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
  constructor(props) {
    super(props);
    this.props.chooseSubscriptonInterval('månad', this.props.choosen!);
  }
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

  render() {
    const {navigate} = this.props.navigation;
    if (this.props.firebasePending) {
      return <ActivityIndicatorExample />;
    }
    if (this.props.firebaseSuccess) {
      return (
        <View style={{flex: 1}}>
          <Text style={style.succesText}>Din betalning genomfördes!</Text>
          <Text style={style.succesTextTwo}>
            Välkommen {this.props.type} {this.props.name} Till Lassie
            djurförsäkring!
          </Text>
          <TouchableOpacity
            onPress={() => {
              this.props.resetStore();
              navigate('Home');
            }}
            style={style.HomeButton}>
            <Text style={style.HomeText}>Home</Text>
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
            Du har valt {this.props.subCost}
            {}
          </Text>
          <Text style={style.title}>
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
                this.props.chooseSubscriptonInterval(
                  'vecka',
                  this.props.choosen!,
                );
              }}>
              <Text>{}</Text>
              <Text>per Vecka</Text>
              </TouchableOpacity>
            <TouchableOpacity
              style={style.chooseButton}
              onPress={() => {
                this.props.chooseSubscriptonInterval(
                  'månad',
                  this.props.choosen!,
                );
              }}>
              <Text>{}</Text>
              <Text>per Månad</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.chooseButton}
              onPress={() => {
                this.props.chooseSubscriptonInterval('år', this.props.choosen!);
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
    name: state.animalReducer.name,
    type: state.animalReducer.type,
  };
}
const mapDispatchToProps = {
  chooseSubscriptonInterval,
  chooseSubDate,
  submitToFirebase,
  chooseSubscriptionCost,
  resetStore,
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
    marginBottom: 10,
  },
  paymentButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  succesText: {
    marginTop: 100,
    fontSize: 22,
    textAlign: 'center',
  },
  succesTextTwo: {
    fontSize: 22,
    textAlign: 'center',
  },
  HomeButton: {
    marginTop: 20,
    marginHorizontal: 30,
    backgroundColor: '#E9446A',
    borderRadius: 4,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  HomeText: {
    color: '#FFF',
    fontWeight: '500',
    fontSize: 18,
  },
});

export default connector(PaymentScreen);
