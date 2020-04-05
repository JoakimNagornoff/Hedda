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

export const CHANGE_PAYMENT_FIXED_DECUTIBLE = 'CHANGE_PAYMENT_FIXED_DECUTIBLE';
export const CHANGE_PAYMENT_VARIABLE_DECUTIBLE =
  'CHANGE_PAYMENT_VARIABLE_DECUTIBLE';

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
  options: {
    name: string; // bas / standard / premium
    baseCost: number;
    fixedDeductible: number;
    variableDeductible: number;
  }[];
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

export type PaymentActionTypes =
  | ChangePaymentFixedDeductibleAction
  | ChangePaymentVariableDeductibleAction;
