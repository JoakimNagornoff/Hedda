import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {connect, ConnectedProps} from 'react-redux';
import SearchableDropdown from 'react-native-searchable-dropdown';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {RootState} from '/store/index';
import {
  addAnimalName,
  addAnimalRace,
  addAnimalAgeYear,
  addAnimalAgeMonth,
  addAnimalAgeDay,
  addAnimalGender,
  addAnimalCastrated,
} from 'store/actions/action';

class SecondScreen extends Component<Props, {}> {
  render() {
    //const {route} = this.props;
    //const {animal} = route.params;
    const {navigate} = this.props.navigation;
    const radio_props = [
      {label: 'hona', value: 'hona'},
      {label: 'hane', value: 'hane'},
    ];
    const radioProps = [
      {label: 'kastrerad', value: 'kastrerad'},
      {label: 'ejkastrerad', value: 'ejkastrerad'},
    ];
    return (
      <View style={style.container}>
        <Text style={style.title}>
          Uppgifter om din {this.props.animalType}
        </Text>
        <View style={style.halfOne}>
          <TextInput
            style={style.input}
            placeholder="Namn"
            autoCapitalize="words"
            value={this.props.animalName}
            onChangeText={this.props.addAnimalName}></TextInput>

          <SearchableDropdown
            onItemSelect={item => {
              console.log(item);
              this.props.addAnimalRace(item.name);
              console.log(item.name);
            }}
            itemStyle={{
              padding: 10,
              marginTop: 2,
              backgroundColor: '#ddd',
              borderColor: '#bbb',
              borderWidth: 1,
              borderRadius: 5,
            }}
            items={items}
            resetValue={false}
            textInputProps={{
              placeholder: 'Placeholder',
              underlineColorAndroid: 'transparent',
              style: {
                padding: 12,
                width: 380,
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 5,
                marginLeft: 5,
                marginRight: 5,
              },
              onTextChange: this.props.addAnimalRace,
            }}
            listProps={{
              nestedScrollEnabled: true,
            }}
          />
          <View style={style.age}>
            <TextInput
              style={style.inputAge}
              placeholder="ÅÅÅÅ"
              keyboardType="numeric"
              maxLength={4}
              value={
                this.props.animalAgeYear
                  ? this.props.animalAgeYear.toString()
                  : undefined
              }
              onChangeText={value =>
                this.props.addAnimalAgeYear(parseInt(value))
              }></TextInput>

            <TextInput
              style={style.inputAgeMM}
              placeholder="MM"
              keyboardType="numeric"
              value={
                this.props.animalAgeMonth
                  ? this.props.animalAgeMonth.toString()
                  : undefined
              }
              onChangeText={value =>
                this.props.addAnimalAgeMonth(parseInt(value))
              }></TextInput>
            <TextInput
              style={style.inputAgeDD}
              placeholder="DD"
              keyboardType="numeric"
              maxLength={2}
              value={
                this.props.animalAgeDay
                  ? this.props.animalAgeDay.toString()
                  : undefined
              }
              onChangeText={value =>
                this.props.addAnimalAgeDay(parseInt(value))
              }></TextInput>
          </View>
          <RadioForm
            radio_props={radio_props}
            initial={this.props.animalGender}
            style={style.radio}
            formHorizontal={true}
            animation={true}
            onPress={this.props.addAnimalGender}
          />
          <RadioForm
            radio_props={radioProps}
            initial={this.props.animalCastrated}
            style={style.radio}
            formHorizontal={true}
            animation={true}
            onPress={this.props.addAnimalCastrated}
          />

          <TouchableOpacity
            style={style.button}
            onPress={() => {
              navigate('ThirdScreen');
            }}>
            <Text style={style.buttonText}>Fortsätt</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    animalType: state.animalReducer.type,
    animalName: state.animalReducer.name,
    animalRace: state.animalReducer.race,
    animalGender: state.animalReducer.gender,
    animalAgeYear: state.animalReducer.year,
    animalAgeMonth: state.animalReducer.month,
    animalAgeDay: state.animalReducer.day,
    animalCastrated: state.animalReducer.castrated,
  };
}
const mapDispatchToProps = {
  addAnimalName,
  addAnimalRace,
  addAnimalAgeYear,
  addAnimalAgeMonth,
  addAnimalAgeDay,
  addAnimalGender,
  addAnimalCastrated,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {
  navigation: any;
  route: any;
};

//list with dog races.
const items = [
  {
    id: 1,
    name: 'Blandras',
  },
  {
    id: 2,
    name: 'Blandras(Pitbull)',
  },
  {
    id: 3,
    name: 'Affenpinscher',
  },
  {
    id: 4,
    name: 'Afghanhund',
  },
  {
    id: 5,
    name: 'Akita',
  },
  {
    id: 6,
    name: 'Aireldaleterrier',
  },
  {
    id: 7,
    name: 'Aidi',
  },
  {
    id: 8,
    name: 'Alapaha Blue Blood Bulldog',
  },
  {
    id: 9,
    name: 'Alaskan Malamute',
  },
  {id: 10, name: 'Dalmatine'},
];
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
  age: {
    height: 80,
    flexDirection: 'row',
    marginLeft: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 30,
  },
  inputAge: {
    borderWidth: 1,
    width: 60,
    height: 50,
    textAlign: 'center',
    marginLeft: 20,
    marginTop: 15,
  },
  inputAgeMM: {
    borderWidth: 1,
    width: 50,
    height: 50,
    textAlign: 'center',
    marginTop: 15,
    marginLeft: 20,
  },
  inputAgeDD: {
    borderWidth: 1,
    width: 50,
    height: 50,
    textAlign: 'center',
    marginTop: 15,
    marginLeft: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    textAlign: 'center',
    fontSize: 18,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 25,
    marginTop: 30,
  },
  button: {
    marginTop: 80,
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 382,
    height: 40,
    marginBottom: 5,
    borderWidth: 2,
    borderColor: '#000',
    marginLeft: 5,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
  },
  radio: {
    width: 385,
    height: 40,
    padding: 5,
    margin: 5,
    borderWidth: 1,
    paddingLeft: 100,
  },
});

export default connector(SecondScreen);
