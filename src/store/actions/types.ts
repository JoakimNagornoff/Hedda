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

export const CHOOSE_PAYMENT_OPTION = 'CHOOSE_PAYMENT_OPTION';
export const CHOOSE_SUB_DATE = 'CHOOSE_SUB_DATE';
export const CHOOSE_SUB_INTERVAL = 'CHOOSE_SUB_INTERVAL';

export const CHOOSE_INSURANCE_BOOL = 'CHOOSE_INSURANCE_BOOL';
export const CHOOSE_INSURANCE_COMPANY = 'CHOOSE_INSURANCE_COMPANY';
export const CHOOSE_INSURANCE_COMPANY_TERMINATION =
  'CHOOSE_INSURANCE_COMPANY_TERMINATION';

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
  chooseOption: string;
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
  };
}

export type PaymentActionTypes =
  | ChangePaymentFixedDeductibleAction
  | ChangePaymentVariableDeductibleAction
  | ChoosePaymentOptionAction;

export interface SubscriptionState {
  dateOfSub: string;
  chooseSubInterval: string;
}
interface ChooseSubscriptionDateAction {
  type: typeof CHOOSE_SUB_DATE;
  data: string;
}
interface ChooseSubscriptionIntervalAction {
  type: typeof CHOOSE_SUB_INTERVAL;
  data: string;
}

export type SubscriptionActionTypes =
  | ChooseSubscriptionDateAction
  | ChooseSubscriptionIntervalAction;

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
