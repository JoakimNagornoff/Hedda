export const ADD_ANIMAL = 'ADD_ANIMAL';
export const ADD_ANIMAL_NAME = 'ADD_ANIMAL_NAME';
export const ADD_ANIMAL_RACE = 'ADD_ANIMAL_RACE';
export const ADD_ANIMAL_GENDER = 'ADD_ANIMAL_GENDER';
export const ADD_ANIMAL_BIRTHDAY = 'ADD_ANIMAL_BIRTHDAY';

export const ADD_ANIMAL_CASTRATED = 'ADD_ANIMAL_CASTRATED';

export const ADD_PERSON_NAME = 'ADD_PERSON_NAME';
export const ADD_PERSON_LASTNAME = 'ADD_PERSON_LASTNAME';
export const ADD_PERSON_EMAIL = 'ADD_PERSON_EMAIL';
export const ADD_PERSON_POSTKOD = 'ADD_PERSON_POSTKOD';
export const SUBMIT_ANIMAL = 'SUBMIT_ANIMAL';

export const ADD_PAYMENT_BAS = 'ADD_PAYMENT_BAS';
export const ADD_PAYMENT_STANDARD = 'ADD_PAYMENT_STANDARD';
export const ADD_PAYMENT_PREMIUM = 'ADD_PAYMENT_PREMIUM';
export const ADD_PAYMENT_FIXED_DECUTIBLE = 'ADD_PAYMENT_FIXED_DECUTIBLE';
export const ADD_PAYMENT_VARIABLE_DECUTIBLE = 'ADD_PAYMENT_VARIABLE_DECUTIBLE';
export const ADD_PAYMENT_VARIABLE_DECUTIBLE_STANDARD =
  'ADD_PAYMENT_VARIABLE_DECUTIBLE_STANDARD';
export const ADD_PAYMENT_FIXED_DECUTIBLE_STANDARD =
  'ADD_PAYMENT_FIXED_DECUTIBLE_STANDARD';
export const ADD_PAYMENT_FIXED_DECUTIBLE_PREMIUM =
  'ADD_PAYMENT_FIXED_DECUTIBLE_PREMIUM';
export const ADD_PAYMENT_VARIABLE_DECUTIBLE_PREMIUM =
  'ADD_PAYMENT_VARIABLE_DECUTIBLE_PREMIUM';

export interface AnimalState {
  type: string;
  name: string;
  race: string;
  gender: string;
  birthday: Date | null;
  castrated: boolean;
  isSubmit: boolean;
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
interface SubmitAnimalAction {
  type: typeof SUBMIT_ANIMAL;
  data: boolean;
}

export type AnimalActionTypes =
  | AddAnimalAction
  | AddAnimalNameAction
  | AddAnimalGenderAction
  | AddAnimalBirthdayAction
  | AddAnimalRaceAction
  | AddAnimalCastratedAction
  | SubmitAnimalAction;

export interface PersonState {
  name: string;
  lastName: string;
  email: string;
  postkod: number | null;
}
interface AddPersonNameAction {
  type: typeof ADD_PERSON_NAME;
  data: string;
}
interface AddPersonLastNameAction {
  type: typeof ADD_PERSON_LASTNAME;
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

export type PersonActionTypes =
  | AddPersonNameAction
  | AddPersonLastNameAction
  | AddPersonEmailAction
  | AddPersonPostKodAction;

export interface PaymentState {
  bas: number | null;
  standard: number | null;
  premium: number | null;
  fixedDeductible: number | null;
  variableDeductible: number | null;
  fixedDecutibleStandard: number | null;
  variableDecutibleStandard: number | null;
  fixedDecutiblePremium: number | null;
  variableDecutiblePremium: number | null;
}
interface AddPaymentBasAction {
  type: typeof ADD_PAYMENT_BAS;
  data: number;
}
interface AddPaymentStandardAction {
  type: typeof ADD_PAYMENT_STANDARD;
  data: number;
}
interface AddPaymentPremiumAction {
  type: typeof ADD_PAYMENT_PREMIUM;
  data: number;
}
interface AddpaymentFixedDecutibleAction {
  type: typeof ADD_PAYMENT_FIXED_DECUTIBLE;
  data: number;
}
interface AddpaymentVariableDeductibleAction {
  type: typeof ADD_PAYMENT_VARIABLE_DECUTIBLE;
  data: number;
}
interface AddpaymentFixedDecutibleActionStandard {
  type: typeof ADD_PAYMENT_FIXED_DECUTIBLE_STANDARD;
  data: number;
}
interface AddpaymentVariableDeductibleActionStandard {
  type: typeof ADD_PAYMENT_VARIABLE_DECUTIBLE_STANDARD;
  data: number;
}
interface AddpaymentFixedDecutibleActionPremium {
  type: typeof ADD_PAYMENT_FIXED_DECUTIBLE_PREMIUM;
  data: number;
}
interface AddpaymentVariableDeductibleActionPremium {
  type: typeof ADD_PAYMENT_VARIABLE_DECUTIBLE_PREMIUM;
  data: number;
}

export type PaymentActionTypes =
  | AddPaymentBasAction
  | AddPaymentStandardAction
  | AddPaymentPremiumAction
  | AddpaymentFixedDecutibleAction
  | AddpaymentVariableDeductibleAction
  | AddpaymentFixedDecutibleActionStandard
  | AddpaymentVariableDeductibleActionStandard
  | AddpaymentFixedDecutibleActionPremium
  | AddpaymentVariableDeductibleActionPremium;
