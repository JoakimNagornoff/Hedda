import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Slider from '@react-native-community/slider';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '/store/index';
import {
  changePaymentFixedDeductible,
  changePaymentVariableDeductible,
  choosePaymentOption,
  chooseSubscriptionCost,
} from 'store/actions/action';
import {calculateMonthlyCost} from 'utils';

function Item({
  title,
  baseCost,
  changePaymentFixedDeductible,
  changePaymentVariableDeductible,
  fixedDeductible,
  variableDeductible,
  onButtonClick,
}) {
  return (
    <View style={style.item}>
      <Text style={style.secondTitle}>{title.toUpperCase()}</Text>
      <Text style={style.title}>
        {calculateMonthlyCost(baseCost, fixedDeductible, variableDeductible)} kr
        <Text style={style.secondTitle}> per månad</Text>
      </Text>
      <Text style={style.secondTitle}>Fast självrisk {fixedDeductible} kr</Text>
      <Slider
        style={style.firstSlider}
        minimumValue={0}
        value={fixedDeductible}
        maximumValue={3000}
        step={1500}
        onValueChange={value => changePaymentFixedDeductible(title, value)}
      />
      <Text style={style.secondTitle}>
        Rörlig självrisk {variableDeductible}% av skadekostanden
      </Text>
      <Slider
        style={style.secondSlider}
        minimumValue={15}
        value={variableDeductible}
        maximumValue={25}
        step={10}
        onValueChange={value => changePaymentVariableDeductible(title, value)}
      />
      <TouchableOpacity style={style.details}>
        <Text style={style.detailsText}>Se alla detaljer</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.chooseButtonOne}
        onPress={() => onButtonClick()}>
        <Text style={style.buttonText}>Välj</Text>
      </TouchableOpacity>
    </View>
  );
}

class ShowScreen extends Component<Props, {}> {
  render() {
    return (
      <SafeAreaView style={style.container}>
        <FlatList
          data={this.props.paymentOptions}
          renderItem={({item}) => (
            <Item
              title={item.name}
              baseCost={item.baseCost}
              fixedDeductible={item.fixedDeductible}
              variableDeductible={item.variableDeductible}
              changePaymentFixedDeductible={
                this.props.changePaymentFixedDeductible
              }
              changePaymentVariableDeductible={
                this.props.changePaymentVariableDeductible
              }
              onButtonClick={() => {
                this.props.choosePaymentOption(
                  item.name,
                  item.fixedDeductible,
                  item.variableDeductible,
                );
                this.props.navigation.navigate('InsuranceScreen');
              }}
            />
          )}
          keyExtractor={item => item.name}
        />
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    paymentOptions: state.paymentReducer.options,
  };
}
const mapDispatchToProps = {
  changePaymentFixedDeductible,
  changePaymentVariableDeductible,
  choosePaymentOption,
  chooseSubscriptionCost,
};
const connector = connect(
  mapStateToProps,
  mapDispatchToProps,
);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {
  navigation: any;
  route: any;
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  item: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    height: 350,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    height: 60,
  },
  secondTitle: {
    fontSize: 18,
    textAlign: 'center',
  },
  firstSlider: {
    width: 280,
    height: 40,
  },
  secondSlider: {
    width: 200,
    height: 40,
    marginStart: 40,
  },
  chooseButtonOne: {
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 300,
    height: 40,
    borderWidth: 2,
    borderColor: '#000',
    marginLeft: 5,
  },
  buttonText: {
    padding: 5,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  details: {
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  detailsText: {
    fontSize: 18,
    borderBottomWidth: 1,
  },
});

export default connector(ShowScreen);
