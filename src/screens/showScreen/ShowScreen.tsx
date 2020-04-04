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
  addPaymentBas,
  addPaymentStandard,
  addPaymentPremium,
  addPaymentFixedDecutible,
  addPaymentVariableDecutible,
  addPaymentFixedDecutibleStandard,
  addPaymentVariableDecutibleStandard,
  addPaymentFixedDecutiblePremium,
  addPaymentVariableDecutiblePremium,
} from 'store/actions/action';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Bas',
  },
];
const DATATWO = [
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Standard',
  },
];
const DATATHREE = [
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Premium',
  },
];

function Item({
  title,
  paymentFixed,
  paymentVariable,
  addPaymentFixedDecutible,
  addPaymentVariableDecutible,
  paymentBas,
}) {
  return (
    <View style={style.item}>
      <Text style={style.secondTitle}>{title}</Text>
      <Text style={style.title}>
        {paymentBas} Kr<Text style={style.secondTitle}> per månad</Text>
      </Text>
      <Text style={style.secondTitle}>Fast självrisk {paymentFixed} kr</Text>
      <Slider
        style={style.firstSlider}
        minimumValue={0}
        value={paymentFixed}
        maximumValue={3000}
        step={1500}
        onValueChange={addPaymentFixedDecutible}
      />
      <Text style={style.secondTitle}>
        Rörlig självrisk {paymentVariable}% av skadekostanden
      </Text>
      <Slider
        style={style.secondSlider}
        minimumValue={15}
        value={paymentVariable}
        maximumValue={25}
        step={10}
        onValueChange={addPaymentVariableDecutible}
      />
      <TouchableOpacity style={style.details}>
        <Text style={style.detailsText}>Se alla detaljer</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.chooseButtonOne}>
        <Text style={style.buttonText}>Välj</Text>
      </TouchableOpacity>
    </View>
  );
}
function ItemTwo({
  title,
  paymentVariableStandard,
  paymentFixedStandard,
  addPaymentFixedDecutible,
  addPaymentVariableDecutible,
  paymentStandard,
}) {
  return (
    <View style={style.item}>
      <Text style={style.secondTitle}>{title}</Text>
      <Text style={style.title}>
        {paymentStandard} Kr<Text style={style.secondTitle}> per månad</Text>
      </Text>
      <Text style={style.secondTitle}>
        Fast självrisk {paymentFixedStandard} kr
      </Text>
      <Slider
        style={style.firstSlider}
        minimumValue={0}
        value={paymentFixedStandard}
        maximumValue={3000}
        step={1500}
        onValueChange={addPaymentFixedDecutible}
      />
      <Text style={style.secondTitle}>
        Rörlig självrisk {paymentVariableStandard}% av skadekostanden
      </Text>
      <Slider
        style={style.secondSlider}
        minimumValue={15}
        value={paymentVariableStandard}
        maximumValue={25}
        step={10}
        onValueChange={addPaymentVariableDecutible}
      />
      <TouchableOpacity style={style.details}>
        <Text style={style.detailsText}>Se alla detaljer</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.chooseButtonOne}>
        <Text style={style.buttonText}>Välj</Text>
      </TouchableOpacity>
    </View>
  );
}
function ItemThree({
  title,
  paymentVariablePremium,
  paymentFixedPremium,
  addPaymentFixedDecutiblePremium,
  addPaymentVariableDecutiblePremium,
  paymentPremium,
}) {
  return (
    <View style={style.item}>
      <Text style={style.secondTitle}>{title}</Text>
      <Text style={style.title}>
        {paymentPremium} Kr<Text style={style.secondTitle}> per månad</Text>
      </Text>
      <Text style={style.secondTitle}>Fast självrisk {paymentPremium} kr</Text>
      <Slider
        style={style.firstSlider}
        minimumValue={0}
        value={paymentFixedPremium}
        maximumValue={3000}
        step={1500}
        onValueChange={addPaymentFixedDecutiblePremium}
      />
      <Text style={style.secondTitle}>
        Rörlig självrisk {paymentVariablePremium}% av skadekostanden
      </Text>
      <Slider
        style={style.secondSlider}
        minimumValue={15}
        value={paymentVariablePremium}
        maximumValue={25}
        step={10}
        onValueChange={addPaymentVariableDecutiblePremium}
      />
      <TouchableOpacity style={style.details}>
        <Text style={style.detailsText}>Se alla detaljer</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.chooseButtonOne}>
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
          data={DATA}
          renderItem={({item}) => (
            <Item
              title={item.title}
              paymentBas={this.props.paymentBas}
              paymentFixed={this.props.paymentFixed}
              paymentVariable={this.props.paymentVariable}
              addPaymentFixedDecutible={this.props.addPaymentFixedDecutible}
              addPaymentVariableDecutible={
                this.props.addPaymentVariableDecutible
              }
            />
          )}
          keyExtractor={item => item.id}
        />
        <FlatList
          data={DATATWO}
          renderItem={({item}) => (
            <ItemTwo
              title={item.title}
              paymentStandard={this.props.paymentStandard}
              paymentFixedStandard={this.props.paymentFixedStandard}
              paymentVariableStandard={this.props.paymentVariableStandard}
              addPaymentFixedDecutible={
                this.props.addPaymentFixedDecutibleStandard
              }
              addPaymentVariableDecutible={
                this.props.addPaymentVariableDecutibleStandard
              }
            />
          )}
          keyExtractor={item => item.id}
        />
        <FlatList
          data={DATATHREE}
          renderItem={({item}) => (
            <ItemThree
              title={item.title}
              paymentPremium={this.props.paymentPremium}
              paymentFixedPremium={this.props.paymentFixedPremium}
              paymentVariablePremium={this.props.paymentVariablePremium}
              addPaymentFixedDecutiblePremium={
                this.props.addPaymentFixedDecutiblePremium
              }
              addPaymentVariableDecutiblePremium={
                this.props.addPaymentFixedDecutiblePremium
              }
            />
          )}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    paymentBas: state.paymentReducer.bas,
    paymentStandard: state.paymentReducer.standard,
    paymentPremium: state.paymentReducer.premium,
    paymentFixed: state.paymentReducer.fixedDeductible,
    paymentVariable: state.paymentReducer.variableDeductible,
    paymentFixedStandard: state.paymentReducer.fixedDecutibleStandard,
    paymentVariableStandard: state.paymentReducer.variableDecutibleStandard,
    paymentFixedPremium: state.paymentReducer.fixedDecutiblePremium,
    paymentVariablePremium: state.paymentReducer.variableDecutiblePremium,
  };
}
const mapDispatchToProps = {
  addPaymentBas,
  addPaymentStandard,
  addPaymentPremium,
  addPaymentFixedDecutible,
  addPaymentVariableDecutible,
  addPaymentFixedDecutibleStandard,
  addPaymentVariableDecutibleStandard,
  addPaymentFixedDecutiblePremium,
  addPaymentVariableDecutiblePremium,
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
