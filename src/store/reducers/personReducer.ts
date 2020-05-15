import {
  PersonState,
  PersonActionTypes,
  ADD_PERSON_FULL_NAME,
  ADD_PERSON_EMAIL,
  ADD_PERSON_POSTKOD,
  AUTH_PERSON_LOGIN,
  AUTH_PERSON_LOGIN_PENDING,
  AUTH_PERSON_LOGIN_REJECTED,
  AUTH_PERSON_LOGIN_FULFILLED,
  AUTH_PERSON_REGISTER_FULFILLED,
  AUTH_PERSON_REGISTER_REJECTED,
  AUTH_PERSON_REGISTER_PENDING,
  AUTH_PERSON_REGISTER,
  AUTH_PERSON_LOGOUT_PENDING,
  AUTH_PERSON_LOGOUT,
  AUTH_PERSON_LOGOUT_FULFILLED,
  AUTH_PERSON_LOGOUT_REJECTED,
} from '../actions/types';

const initialState: PersonState = {
  fullName: '',
  email: '',
  postkod: '',
  uid: '',
  fireBasePending: false,
  fireBaseSuccess: false,
  fireBaseError: '',
};
const personReducer = (
  state = initialState,
  action: PersonActionTypes,
): PersonState => {
  switch (action.type) {
    case AUTH_PERSON_LOGIN_PENDING:
      return {
        ...state,
        fireBasePending: true,
      };
    case AUTH_PERSON_LOGIN_REJECTED:
      return {
        ...state,
        fireBaseError: 'Något gick fel.',
        fireBasePending: false,
      };
    case AUTH_PERSON_LOGIN_FULFILLED:
      return {
        ...state,
        fireBasePending: false,
        fireBaseSuccess: true,
        fullName: action.payload.name,
        email: action.payload.email,
        postkod: action.payload.postkod,
        uid: action.payload.uid,
      };

    case AUTH_PERSON_LOGOUT_PENDING:
      return {
        ...state,
        fireBasePending: true,
      };
    case AUTH_PERSON_LOGOUT_REJECTED:
      return {
        ...state,
        fireBaseError: 'Något gick fel.',
        fireBasePending: false,
      };
    case AUTH_PERSON_LOGOUT_FULFILLED:
      return {
        ...state,
        fireBasePending: false,
        fireBaseSuccess: true,
        fullName: '',
        email: '',
        postkod: '',
        uid: '',
      };

    case AUTH_PERSON_REGISTER_PENDING:
      return {
        ...state,
        fireBasePending: true,
      };
    case AUTH_PERSON_REGISTER_REJECTED:
      return {
        ...state,
        fireBaseError: 'Något gick fel.',
        fireBasePending: false,
      };
    case AUTH_PERSON_REGISTER_FULFILLED:
      return {
        ...state,
        fireBasePending: false,
        fireBaseSuccess: true,
        fullName: action.payload.name,
        email: action.payload.email,
        postkod: action.payload.postkod,
        uid: action.payload.uid,
      };
  }
  return state;
};
export default personReducer;
