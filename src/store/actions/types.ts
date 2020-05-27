import {chooseSubscriptonInterval} from './action';

export const ADD_ANIMAL = 'ADD_ANIMAL';
export const ADD_ANIMAL_NAME = 'ADD_ANIMAL_NAME';
export const ADD_ANIMAL_RACE = 'ADD_ANIMAL_RACE';
export const ADD_ANIMAL_GENDER = 'ADD_ANIMAL_GENDER';
export const ADD_ANIMAL_BIRTHDAY = 'ADD_ANIMAL_BIRTHDAY';

export const ADD_ANIMAL_CASTRATED = 'ADD_ANIMAL_CASTRATED';

export const ADD_PERSON_FULL_NAME = 'ADD_PERSON_FULL_NAME';
export const ADD_PERSON_EMAIL = 'ADD_PERSON_EMAIL';
export const ADD_PERSON_POSTKOD = 'ADD_PERSON_POSTKOD';

export const CHANGE_PAYMENT_FIXED_DECUTIBLE = 'CHANGE_PAYMENT_FIXED_DECUTIBLE';
export const CHANGE_PAYMENT_VARIABLE_DECUTIBLE =
  'CHANGE_PAYMENT_VARIABLE_DECUTIBLE';

export const CHOOSE_PAYMENT_OPTION = 'CHOOSE_PAYMENT_OPTION';
export const CHOOSE_SUB_DATE = 'CHOOSE_SUB_DATE';
export const CHOOSE_SUB_INTERVAL = 'CHOOSE_SUB_INTERVAL';
export const CHOOSE_COST = 'CHOOSE_COST';

export const CHOOSE_INSURANCE_BOOL = 'CHOOSE_INSURANCE_BOOL';
export const CHOOSE_INSURANCE_COMPANY = 'CHOOSE_INSURANCE_COMPANY';
export const CHOOSE_INSURANCE_COMPANY_TERMINATION =
  'CHOOSE_INSURANCE_COMPANY_TERMINATION';

export const FIREBASE_SUBMIT = 'FIREBASE_SUBMIT';
export const FIREBASE_SUBMIT_PENDING = 'FIREBASE_SUBMIT_PENDING';
export const FIREBASE_SUBMIT_FULFILLED = 'FIREBASE_SUBMIT_FULFILLED';
export const FIREBASE_SUBMIT_REJECTED = 'FIREBASE_SUBMIT_REJECTED';

export const AUTH_PERSON_LOGIN = 'AUTH_PERSON_LOGIN';
export const AUTH_PERSON_LOGIN_PENDING = 'AUTH_PERSON_LOGIN_PENDING';
export const AUTH_PERSON_LOGIN_FULFILLED = 'AUTH_PERSON_LOGIN_FULFILLED';
export const AUTH_PERSON_LOGIN_REJECTED = 'AUTH_PERSON_LOGIN_REJECTED';

export const AUTH_PERSON_LOGOUT = 'AUTH_PERSON_LOGOUT';
export const AUTH_PERSON_LOGOUT_PENDING = 'AUTH_PERSON_LOGOUT_PENDING';
export const AUTH_PERSON_LOGOUT_FULFILLED = 'AUTH_PERSON_LOGOUT_FULFILLED';
export const AUTH_PERSON_LOGOUT_REJECTED = 'AUTH_PERSON_LOGOUT_REJECTED';

export const AUTH_PERSON_REGISTER = 'AUTH_PERSON_REGISTER';
export const AUTH_PERSON_REGISTER_PENDING = 'AUTH_PERSON_REGISTER_PENDING';
export const AUTH_PERSON_REGISTER_FULFILLED = 'AUTH_PERSON_REGISTER_FULFILLED';
export const AUTH_PERSON_REGISTER_REJECTED = 'AUTH_PERSON_REGISTER_REJECTED';

export interface AnimalState {
  type: string;
  name: string;
  race: string;
  gender: string;
  birthday: Date | null;
  castrated: boolean;
}

interface AddAnimalAction {
  type: typeof ADD_ANIMAL;
  data: string;
}
interface AddAnimalNameAction {
  type: typeof ADD_ANIMAL_NAME;
  data: string;
}
interface AddAnimalRaceAction {
  type: typeof ADD_ANIMAL_RACE;
  data: string;
}
interface AddAnimalGenderAction {
  type: typeof ADD_ANIMAL_GENDER;
  data: string;
}
interface AddAnimalBirthdayAction {
  type: typeof ADD_ANIMAL_BIRTHDAY;
  data: Date;
}
interface AddAnimalCastratedAction {
  type: typeof ADD_ANIMAL_CASTRATED;
  data: boolean;
}

export type AnimalActionTypes =
  | AddAnimalAction
  | AddAnimalNameAction
  | AddAnimalGenderAction
  | AddAnimalBirthdayAction
  | AddAnimalRaceAction
  | AddAnimalCastratedAction;

export interface PersonState {
  fullName: string;
  email: string;
  postkod: string;
  uid: string;
  fireBasePending: boolean;
  fireBaseSuccess: boolean;
  fireBaseError: string;
}
interface AddPersonFullNameAction {
  type: typeof ADD_PERSON_FULL_NAME;
  data: string;
}

interface AddPersonEmailAction {
  type: typeof ADD_PERSON_EMAIL;
  data: string;
}
interface AddPersonPostKodAction {
  type: typeof ADD_PERSON_POSTKOD;
  data: number;
}

interface AuthLoginAction {
  type: typeof AUTH_PERSON_LOGIN;
  payload: any;
}
interface AuthLoginPendingAction {
  type: typeof AUTH_PERSON_LOGIN_PENDING;
  payload: any;
}
interface AuthLoginRejectedAction {
  type: typeof AUTH_PERSON_LOGIN_REJECTED;
  payload: any;
}
interface AuthLoginFulfilledAction {
  type: typeof AUTH_PERSON_LOGIN_FULFILLED;
  payload: any;
}

interface AuthRegisterAction {
  type: typeof AUTH_PERSON_REGISTER;
  payload: any;
}
interface AuthRegisterPendingAction {
  type: typeof AUTH_PERSON_REGISTER_PENDING;
  payload: any;
}
interface AuthRegisterRejectedAction {
  type: typeof AUTH_PERSON_REGISTER_REJECTED;
  payload: any;
}
interface AuthRegisterFulfilledAction {
  type: typeof AUTH_PERSON_REGISTER_FULFILLED;
  payload: any;
}

interface AuthLogoutAction {
  type: typeof AUTH_PERSON_LOGOUT;
  payload: any;
}
interface AuthLogoutPendingAction {
  type: typeof AUTH_PERSON_LOGOUT_PENDING;
  payload: any;
}
interface AuthLogoutRejectedAction {
  type: typeof AUTH_PERSON_LOGOUT_REJECTED;
  payload: any;
}
interface AuthLogoutFulfilledAction {
  type: typeof AUTH_PERSON_LOGOUT_FULFILLED;
  payload: any;
}

export type PersonActionTypes =
  | AddPersonFullNameAction
  | AddPersonEmailAction
  | AddPersonPostKodAction
  | AuthLoginAction
  | AuthLogoutAction
  | AuthRegisterAction
  | AuthLogoutPendingAction
  | AuthLogoutRejectedAction
  | AuthLogoutFulfilledAction
  | AuthLoginPendingAction
  | AuthLoginRejectedAction
  | AuthLoginFulfilledAction
  | AuthRegisterPendingAction
  | AuthRegisterRejectedAction
  | AuthRegisterFulfilledAction;

export interface PaymentOption {
  name: string; // bas / standard / premium
  baseCost: number;
  fixedDeductible: number;
  variableDeductible: number;
}

export interface PaymentState {
  options: PaymentOption[];
  chooseOption: string;
  choosenFixedDeducitble: PaymentOption['fixedDeductible'];
  choosenvariableDeductible: PaymentOption['variableDeductible'];
}

interface ChangePaymentFixedDeductibleAction {
  type: typeof CHANGE_PAYMENT_FIXED_DECUTIBLE;
  data: {
    name: string;
    value: number;
  };
}

interface ChangePaymentVariableDeductibleAction {
  type: typeof CHANGE_PAYMENT_VARIABLE_DECUTIBLE;
  data: {
    name: string;
    value: number;
  };
}
interface ChoosePaymentOptionAction {
  type: typeof CHOOSE_PAYMENT_OPTION;
  data: {
    chooseOption: string;
    choosenFixedDeducitble: PaymentOption['fixedDeductible'];
    choosenvariableDeductible: PaymentOption['variableDeductible'];
  };
}

export type PaymentActionTypes =
  | ChangePaymentFixedDeductibleAction
  | ChangePaymentVariableDeductibleAction
  | ChoosePaymentOptionAction;

export interface SubscriptionState {
  dateOfSub: string;
  chooseSubInterval: string;
  chooseCost: number;
  fireBasePending: boolean;
  fireBaseSuccess: boolean;
  fireBaseError: string;
}
interface ChooseSubscriptionDateAction {
  type: typeof CHOOSE_SUB_DATE;
  data: string;
}
interface ChooseSubscriptionIntervalAction {
  type: typeof CHOOSE_SUB_INTERVAL;
  data: {
    chooseSubInterval: string;
    chooseCost: PaymentOption;
  };
}
interface ChooseSubscriptionCostAction {
  type: typeof CHOOSE_COST;
  data: number;
}
interface FirebaseSubmitAction {
  type: typeof FIREBASE_SUBMIT;
  payload: any;
}
interface FirebaseSubmitPendingAction {
  type: typeof FIREBASE_SUBMIT_PENDING;
  payload: any;
}
interface FirebaseSubmitRejectedAction {
  type: typeof FIREBASE_SUBMIT_REJECTED;
  payload: any;
}
interface FirebaseSubmitFulfilledAction {
  type: typeof FIREBASE_SUBMIT_FULFILLED;
  payload: any;
}

export type SubscriptionActionTypes =
  | ChooseSubscriptionDateAction
  | ChooseSubscriptionIntervalAction
  | ChooseSubscriptionCostAction
  | FirebaseSubmitAction
  | FirebaseSubmitPendingAction
  | FirebaseSubmitRejectedAction
  | FirebaseSubmitFulfilledAction;

export interface InsuranceState {
  IfInsurance: boolean;
  InsuranceCompany: string;
  TerminationCompany: boolean;
}

interface ChooseInsuranceAction {
  type: typeof CHOOSE_INSURANCE_BOOL;
  data: boolean;
}
interface ChooseInsuranceCompanyAction {
  type: typeof CHOOSE_INSURANCE_COMPANY;
  data: string;
}
interface ChooseInsuranceCompanyTerminationAction {
  type: typeof CHOOSE_INSURANCE_COMPANY_TERMINATION;
  data: boolean;
}

export type ChooseInsuranceActionTypes =
  | ChooseInsuranceAction
  | ChooseInsuranceCompanyAction
  | ChooseInsuranceCompanyTerminationAction;
