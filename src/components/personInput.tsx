import React from 'react';
import {View, Text, StyleSheet, StatusBar, Button} from 'react-native';

import {TextInput} from 'react-native-gesture-handler';
import {Formik, FormikProps} from 'formik';
import * as Yup from 'yup';

const PersonInput = props => (
  <Formik
    initialValues={{email: '', name: '', lastName: '', postkod: ''}}
    onSubmit={values => {
      if (
        values.email.length > 0 &&
        values.name.length > 1 &&
        values.lastName.length > 1 &&
        values.postkod.length > 4
      ) {
      }
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
      <View>
        <TextInput
          style={style.Input}
          placeholder="email"
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}></TextInput>
        <Text style={style.errorMsg}>
          <Text style={style.errorMsg}>{touched.email && errors.email}</Text>
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
          keyboardType="numeric"
          onChangeText={handleChange('postkod')}
          onBlur={handleBlur('postkod')}
          value={values.postkod}></TextInput>
        <Text style={style.errorMsg}>{touched.postkod && errors.postkod}</Text>
        <Button
          onPress={handleSubmit}
          title="Submit"
          disabled={!isValid}></Button>
      </View>
    )}
  </Formik>
);
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
const style = StyleSheet.create({
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

export default PersonInput;
