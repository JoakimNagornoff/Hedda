import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Select from 'react-native-select-plus';
import DateTimePicker from '@react-native-community/datetimepicker';

import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '/store/index';
import {
  addAnimalName,
  addAnimalRace,
  addAnimalBirthday,
  addAnimalGender,
  addAnimalCastrated,
} from 'store/actions/action';

class DogScreen extends Component<Props, {}> {
  state = {
    datepickerOpen: false,
  };

  render() {
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
          console.log(values);
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
                keyboardType="email-address"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}></TextInput>
              <Text style={style.errorMsg}>{touched.name && errors.name}</Text>
              <Button
                title={values.birthday || 'Välj födelsedatum'}
                onPress={() => {
                  this.setState({datepickerOpen: true});
                }}
              />
              {this.state.datepickerOpen && (
                <DateTimePicker
                  testID="dateTimePicker"
                  timeZoneOffsetInMinutes={0}
                  value={
                    values.birthday ? new Date(values.birthday) : new Date()
                  }
                  maximumDate={new Date()}
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
              />
              <Text style={style.errorMsg}>{touched.race && errors.race}</Text>

              <Button
                onPress={handleSubmit}
                title="Submit"
                disabled={!isValid}></Button>
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
  birthday: Yup.string()
    .label('birthday')
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
    marginBottom: 20,
  },
  genderInput: {
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
    marginStart: 300,
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

export default connector(DogScreen);
