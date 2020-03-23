import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {TextInput} from 'react-native-gesture-handler';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '/store/index';
import {
  addPersonName,
  addPersonLastName,
  addPersonEmail,
  addPersonPostKod,
} from 'store/actions/action';

class PersonScreen extends Component<Props, {}> {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Formik
        initialValues={{
          email: '',
          name: '',
          lastName: '',
          postkod: '',
        }}
        onSubmit={values => {
          this.props.addPersonEmail(values.email);
          this.props.addPersonName(values.name);
          this.props.addPersonLastName(values.lastName);
          this.props.addPersonPostKod(parseInt(values.postkod));
          navigate('ForthScreen');
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
            <Text style={style.title}>Uppgifter om ägaren</Text>
            <View style={style.halfOne}>
              <TextInput
                style={style.Input}
                placeholder="email"
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}></TextInput>
              <Text style={style.errorMsg}>
                {touched.email && errors.email}
              </Text>

              <TextInput
                style={style.Input}
                placeholder="name"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}></TextInput>
              <Text style={style.errorMsg}>{touched.name && errors.name}</Text>
              <TextInput
                style={style.Input}
                placeholder="lastName"
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                value={values.lastName}></TextInput>
              <Text style={style.errorMsg}>
                {touched.lastName && errors.lastName}
              </Text>
              <TextInput
                style={style.Input}
                placeholder="postkod"
                maxLength={5}
                keyboardType="numeric"
                onChangeText={handleChange('postkod')}
                onBlur={handleBlur('postkod')}
                value={values.postkod.toString()}></TextInput>
              <Text style={style.errorMsg}>
                {touched.postkod && errors.postkod}
              </Text>
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
  email: Yup.string()
    .label('email')
    .email('Enter a valid email')
    .required('Please enter a valid email '),

  name: Yup.string()
    .label('name')
    .required()
    .min(2, 'Name must have at least 2 characters '),
  lastName: Yup.string()
    .label('lastname')
    .required()
    .min(2, 'LastName must have at least 2 characters '),
  postkod: Yup.string()
    .label('postkod')
    .required()
    .matches(/^[1-9]+$/, 'Must be only digits')
    .min(5, 'Must be exactly 5 digits')
    .max(5, 'Must be exactly 5 digits'),
});

function mapStateToProps(state: RootState) {
  return {
    personName: state.personReducer.name,
    personLastName: state.personReducer.lastName,
    personEmail: state.personReducer.email,
    personPostKod: state.personReducer.postkod,
  };
}
const mapDispatchToProps = {
  addPersonName,
  addPersonLastName,
  addPersonEmail,
  addPersonPostKod,
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
    marginBottom: 10,
    marginTop: 15,
  },
  errorMsg: {
    color: 'red',
    marginStart: 15,
    fontSize: 14,
  },
});

export default connector(PersonScreen);
