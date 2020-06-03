import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Select from 'react-native-select-plus';
import RadioForm from 'react-native-simple-radio-button';

import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '/store/index';
import {
  addAnimalName,
  addAnimalRace,
  addAnimalBirthday,
  addAnimalGender,
  addAnimalCastrated,
} from 'store/actions/action';
import RNDateTimePicker from '@react-native-community/datetimepicker';

class AnimalScreen extends Component<Props, {}> {
  state = {
    datepickerOpen: false,
  };

  render() {
    const {navigate} = this.props.navigation;
    //hund ras list
    const raceItems = [
      {key: 2, label: 'Blandras'},
      {key: 3, label: 'Blandras(Pitbull)'},
      {key: 4, label: 'Affenpinscher'},
      {key: 5, label: 'Afghanhund'},
      {key: 6, label: 'Akita'},
      {key: 7, label: 'Aireldaleterrier'},
      {key: 8, label: 'Aidi'},
      {key: 9, label: 'Alapaha Blue Blood Bulldog'},
      {key: 10, label: 'Alaskan Malamute'},
      {key: 11, label: 'Dalmatine'},
      {key: 12, label: 'Barbet'},
      {key: 13, label: 'Basset Artésien Normand'},
      {key: 14, label: 'Beagle'},
    ];

    //katt ras list
    const catRace = [
      {key: 2, label: 'Blandras'},
      {key: 3, label: 'Abessiner'},
      {key: 4, label: 'Angora'},
      {key: 5, label: 'Balines'},
      {key: 6, label: 'Bengal'},
      {key: 7, label: 'Bombay'},
      {key: 8, label: 'Burma'},
      {key: 9, label: 'Perser'},
      {key: 10, label: 'Snowshoe'},
      {key: 11, label: 'Angora'},
      {key: 12, label: 'Toyger'},
      {key: 13, label: 'Wergedoll'},
    ];

    //häst ras list
    const horseRace = [
      {key: 1, label: 'Achaltekeer'},
      {key: 2, label: 'Am.Curly'},
      {key: 3, label: 'Andallusier'},
    ];
    //radio knappar hona/hane
    const radio_props = [
      {label: 'hona', value: 'hona'},
      {label: 'hane', value: 'hane'},
    ];
    //radio knappar för häst
    const radio_props_horse = [
      {label: 'Sto', value: 'Sto'},
      {label: 'Hingst', value: 'Hingst'},
      {label: 'Valack', value: 'Valack'},
    ];
    //radio knappar för hund och katt
    const radioProps = [
      {label: 'kastrerad', value: 'ja'},
      {label: 'ejkastrerad', value: 'nej'},
    ];

    return (
      <Formik
        initialValues={{
          name: '',
          race: '',
          gender: '',
          castrated: '',
          birthday: '',
        }}
        onSubmit={values => {
          this.props.addAnimalName(values.name);
          this.props.addAnimalRace(values.race);
          this.props.addAnimalGender(values.gender);
          this.props.addAnimalCastrated(values.castrated);
          this.props.addAnimalBirthday(values.birthday);
          navigate('DisplayScreen');
          //console.log(values);
        }}
        validationSchema={validationSchema}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
        }) => (
          <View style={style.container}>
            <Text style={style.title}>
              Uppgifter om din {this.props.animalType}
            </Text>
            <View style={style.halfOne}>
              <TextInput
                style={style.Input}
                placeholder="Namn"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
              />
              <Text style={style.errorMsg}>{touched.name && errors.name}</Text>
              <Button
                title={values.birthday || 'Välj födelsedatum'}
                onPress={() => {
                  this.setState({datepickerOpen: true});
                }}
              />
              {this.state.datepickerOpen && (
                <RNDateTimePicker
                  testID="dateTimePicker"
                  timeZoneOffsetInMinutes={0}
                  value={
                    values.birthday ? new Date(values.birthday) : new Date()
                  }
                  maximumDate={new Date()}
                  minimumDate={new Date(1990, 1, 1)}
                  mode="date"
                  display="spinner"
                  onChange={(event, date) => {
                    this.setState({datepickerOpen: false});
                    if (date) {
                      handleChange('birthday')(formatDate(date));
                    }
                  }}
                />
              )}
              <Text style={style.errorMsg}>
                {touched.birthday && errors.birthday}
              </Text>
              {this.props.animalType === 'Hund' && (
                <Select
                  style={style.raceInput}
                  data={raceItems}
                  width={360}
                  height={60}
                  placeholder="Select race"
                  search={true}
                  onSelect={e => {
                    const selectedRace = raceItems.find(race => race.key === e);
                    if (selectedRace) {
                      handleChange('race')(selectedRace.label);
                    }
                  }}
                  onBlur={handleBlur('race')}
                />
              )}
              {this.props.animalType === 'Katt' && (
                <Select
                  style={style.raceInput}
                  data={catRace}
                  width={360}
                  height={60}
                  placeholder="Select race"
                  search={true}
                  onSelect={e => {
                    const selectedCatRace = catRace.find(
                      race => race.key === e,
                    );
                    if (selectedCatRace) {
                      handleChange('race')(selectedCatRace.label);
                    }
                  }}
                  onBlur={handleBlur('race')}
                />
              )}
              {this.props.animalType === 'Häst' && (
                <Select
                  style={style.raceInput}
                  data={horseRace}
                  width={360}
                  height={60}
                  placeholder="Select race"
                  search={true}
                  onSelect={e => {
                    const selectedHorseRace = horseRace.find(
                      race => race.key === e,
                    );
                    if (selectedHorseRace) {
                      handleChange('race')(selectedHorseRace.label);
                    }
                  }}
                  onBlur={handleBlur('race')}
                />
              )}
              <Text style={style.errorMsg}>{touched.race && errors.race}</Text>
              {this.props.animalType === 'Hund' && (
                <RadioForm
                  radio_props={radio_props}
                  initial={this.props.animalGender}
                  style={style.radio}
                  formHorizontal={false}
                  labelHorizontal={true}
                  animation={true}
                  labelStyle={{fontSize: 20}}
                  onPress={handleChange('gender')}
                  onBlur={handleBlur('gender')}
                />
              )}
              {this.props.animalType === 'Katt' && (
                <RadioForm
                  radio_props={radio_props}
                  initial={this.props.animalGender}
                  style={style.radio}
                  formHorizontal={false}
                  labelHorizontal={true}
                  animation={true}
                  labelStyle={{fontSize: 20}}
                  onPress={handleChange('gender')}
                  onBlur={handleBlur('gender')}
                />
              )}
              {this.props.animalType === 'Häst' && (
                <RadioForm
                  radio_props={radio_props_horse}
                  initial={this.props.animalGender}
                  style={style.radio}
                  formHorizontal={false}
                  labelHorizontal={true}
                  animation={true}
                  labelStyle={{fontSize: 20}}
                  onPress={handleChange('gender')}
                  onBlur={handleBlur('gender')}
                />
              )}

              <Text style={style.errorMsg}>
                {touched.gender && errors.gender}
              </Text>
              {this.props.animalType === 'Hund' && (
                <RadioForm
                  radio_props={radioProps}
                  initial={this.props.animalCastrated}
                  style={style.radio}
                  formHorizontal={false}
                  labelHorizontal={true}
                  animation={true}
                  labelStyle={{fontSize: 20}}
                  onPress={handleChange('castrated')}
                  onBlur={handleBlur('castrated')}
                />
              )}
              {this.props.animalType === 'Katt' && (
                <RadioForm
                  radio_props={radioProps}
                  initial={this.props.animalCastrated}
                  style={style.radio}
                  formHorizontal={false}
                  labelHorizontal={true}
                  animation={true}
                  labelStyle={{fontSize: 20}}
                  onPress={handleChange('castrated')}
                  onBlur={handleBlur('castrated')}
                />
              )}
              <Text style={style.errorMsg}>
                {touched.castrated && errors.castrated}
              </Text>
              <Button
                onPress={handleSubmit}
                title="Submit"
                disabled={!isValid}
              />
            </View>
          </View>
        )}
      </Formik>
    );
  }
}
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .label('name')
    .required()
    .min(2, 'Name must have at least 2 characters '),
  race: Yup.string()
    .label('race')
    .required(),
  birthday: Yup.date()
    .label('birthday')
    .required(),
  gender: Yup.string()
    .label('gender')
    .required(),
  castrated: Yup.string()
    .label('castrated')
    .required(),
});

function mapStateToProps(state: RootState) {
  return {
    animalType: state.animalReducer.type,
    animalName: state.animalReducer.name,
    animalRace: state.animalReducer.race,
    animalGender: state.animalReducer.gender,
    animalBirthday: state.animalReducer.birthday,
    animalCastrated: state.animalReducer.castrated,
  };
}
const mapDispatchToProps = {
  addAnimalName,
  addAnimalRace,
  addAnimalBirthday,
  addAnimalGender,
  addAnimalCastrated,
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
  halfOne: {
    flex: 2,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 30,
  },
  Input: {
    borderWidth: 1,
    width: 400,
    borderColor: '#000',
    textAlign: 'center',
    fontSize: 18,
    marginRight: 5,
    marginLeft: 5,
    marginTop: 15,
  },
  raceInput: {
    borderWidth: 1,
    borderColor: '#000',
    marginStart: 15,
  },
  inputAge: {
    borderWidth: 1,
    width: 300,
    height: 50,
    textAlign: 'center',
    marginLeft: 30,
    marginTop: 15,
    fontSize: 20,
  },
  errorMsg: {
    color: 'red',
    marginStart: 15,
    fontSize: 14,
  },
  radio: {
    borderWidth: 1,
    padding: 5,
    alignItems: 'flex-end',
    flexDirection: 'column',
  },
});

function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

export default connector(AnimalScreen);
